import sharp from "sharp";
import { readdirSync, statSync, renameSync, unlinkSync, copyFileSync } from "fs";
import { join, extname } from "path";
import { tmpdir } from "os";
import { randomBytes } from "crypto";

const IMAGE_DIRS = [
  "public/images/work",
  "public/images/official",
  "public/images/service-pics",
];

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 78;
const WEBP_QUALITY = 78;

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

async function compressFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const sizeBefore = statSync(filePath).size;
  totalBefore += sizeBefore;

  // Write to a temp file in same directory to avoid cross-drive rename issues
  const tmpFile = filePath + ".tmp" + randomBytes(4).toString("hex");

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();

    let pipeline = img;
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    if (ext === ".webp") {
      await pipeline.webp({ quality: WEBP_QUALITY }).toFile(tmpFile);
    } else {
      await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpFile);
    }

    const sizeAfter = statSync(tmpFile).size;

    if (sizeAfter < sizeBefore) {
      // Replace original with compressed version
      unlinkSync(filePath);
      renameSync(tmpFile, filePath);
      totalAfter += sizeAfter;
      const saved = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(0);
      console.log(`  ✓ ${filePath.split("\\").pop()} ${(sizeBefore/1024/1024).toFixed(1)}MB → ${(sizeAfter/1024/1024).toFixed(1)}MB (-${saved}%)`);
    } else {
      // Compressed is larger, keep original
      unlinkSync(tmpFile);
      totalAfter += sizeBefore;
      console.log(`  – ${filePath.split("\\").pop()} already optimized`);
    }
    count++;
  } catch (err) {
    try { unlinkSync(tmpFile); } catch {}
    totalAfter += sizeBefore;
    console.log(`  ✗ ${filePath.split("\\").pop()} error: ${err.message.split("\n")[0]}`);
  }
}

async function processDir(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    console.log(`Skipping missing dir: ${dir}`);
    return;
  }
  console.log(`\nProcessing: ${dir}`);
  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isFile()) {
      await compressFile(full);
    }
  }
}

for (const dir of IMAGE_DIRS) {
  await processDir(dir);
}

console.log(`\n========================================`);
console.log(`Files processed: ${count}`);
console.log(`Total before: ${(totalBefore/1024/1024).toFixed(1)} MB`);
console.log(`Total after:  ${(totalAfter/1024/1024).toFixed(1)} MB`);
console.log(`Saved:        ${((totalBefore-totalAfter)/1024/1024).toFixed(1)} MB`);
console.log(`========================================`);
