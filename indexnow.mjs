// Tells Bing and other IndexNow search engines about every URL in the live sitemap.
// Run after a publish, once Vercel has finished deploying: npm run indexnow
// Preview without sending anything: npm run indexnow -- --dry-run
const HOST = "www.groundedlandservices.com";
const BASE_URL = `https://${HOST}`;
const dryRun = process.argv.includes("--dry-run");

async function main() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) throw new Error("INDEXNOW_KEY is missing from .env.local");

  const sitemap = await fetch(`${BASE_URL}/sitemap.xml`, { cache: "no-store" });
  if (!sitemap.ok) throw new Error(`Couldn't read the live sitemap (${sitemap.status})`);
  const urlList = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((url) => new URL(url).host === HOST);
  if (urlList.length === 0) throw new Error("No URLs found in the live sitemap");

  // The key file has to be live first, or IndexNow rejects the submission
  const keyLocation = `${BASE_URL}/${key}.txt`;
  const keyFile = await fetch(keyLocation, { cache: "no-store" });
  const keyIsLive = keyFile.ok && (await keyFile.text()).trim() === key;

  if (dryRun) {
    console.log(`Dry run: ${urlList.length} URLs would be sent. Key file live: ${keyIsLive ? "yes" : "no"}.`);
    return;
  }
  if (!keyIsLive) throw new Error(`${keyLocation} isn't live yet. Publish, wait for Vercel to finish, then try again.`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  });
  // 200 = accepted, 202 = accepted while the key is being checked
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow refused the submission (${res.status}): ${await res.text()}`);
  }
  console.log(`Sent ${urlList.length} URLs to IndexNow (${res.status}).`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
