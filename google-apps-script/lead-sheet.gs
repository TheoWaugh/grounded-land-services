/**
 * Grounded Land Services: website quote requests → this Google Sheet.
 *
 * Paste this whole file into Extensions → Apps Script (replacing what's there), then:
 *   1. Project Settings (gear icon) → Script properties → add LEAD_SECRET (the value Claude gave you).
 *   2. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 *
 * It only adds rows and saves photos. The thank-you email is sent by the website, not from here.
 */

// The tab the rows go into. Leave "" to use the first tab of this spreadsheet.
var SHEET_NAME = "";
var PHOTO_FOLDER_NAME = "Website Lead Photos";
var LEAD_SOURCES = ["Google Profile", "Calculator", "Chat", "Website"];
var MAX_PHOTOS = 5;

function doPost(e) {
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply_({ ok: false, error: "bad request" });
  }

  // Spam check: only the website's server knows the secret
  var secret = PropertiesService.getScriptProperties().getProperty("LEAD_SECRET");
  if (!secret || data.secret !== secret) return reply_({ ok: false, error: "unauthorized" });
  if (!text_(data.name, 100) || !text_(data.email, 200)) return reply_({ ok: false, error: "missing name or email" });

  var photos = Array.isArray(data.photos) ? data.photos.slice(0, MAX_PHOTOS) : [];
  var photoFolderUrl = photos.length ? savePhotos_(photos, data) : "";

  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // two requests at once can't both grab the same last row
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = SHEET_NAME ? spreadsheet.getSheetByName(SHEET_NAME) : spreadsheet.getSheets()[0];
    if (!sheet) return reply_({ ok: false, error: "sheet tab not found: " + SHEET_NAME });

    // Client name, Email, Phone number, City, Service, Lead source, Job size, Estimate, Status
    sheet.appendRow([
      cell_(data.name, 100),
      cell_(data.email, 200),
      cell_(data.phone, 40),
      cell_(data.city, 100),
      cell_(data.service, 60),
      LEAD_SOURCES.indexOf(data.leadSource) >= 0 ? data.leadSource : "Website",
      cell_(data.jobSize, 60),
      cell_(data.estimate, 60),
      "New",
    ]);
    if (photoFolderUrl) {
      var count = photos.length + (photos.length === 1 ? " photo" : " photos");
      sheet.getRange(sheet.getLastRow(), 1).setNote(count + " from the website form:\n" + photoFolderUrl);
    }
  } finally {
    lock.releaseLock();
  }
  return reply_({ ok: true });
}

// Opening the web app link in a browser shows this, so you can check the deployment works.
function doGet() {
  return ContentService.createTextOutput("Grounded Land Services lead sheet is running.");
}

/** Saves the photos in their own folder inside "Website Lead Photos" and returns that folder's link. */
function savePhotos_(photos, data) {
  var folders = DriveApp.getFoldersByName(PHOTO_FOLDER_NAME);
  var parent = folders.hasNext() ? folders.next() : DriveApp.createFolder(PHOTO_FOLDER_NAME);
  var stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
  var name = [stamp, text_(data.name, 60), text_(data.city, 60)].filter(String).join(" – ");
  var folder = parent.createFolder(name);
  photos.forEach(function (base64, i) {
    if (typeof base64 !== "string") return;
    var blob = Utilities.newBlob(Utilities.base64Decode(base64), "image/jpeg", "photo-" + (i + 1) + ".jpg");
    folder.createFile(blob);
  });
  return folder.getUrl();
}

function text_(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// The leading apostrophe makes Sheets store what the customer typed as plain text:
// phone numbers keep their format, and nothing they type can run as a formula.
function cell_(value, max) {
  var v = text_(value, max);
  return v ? "'" + v : "";
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
