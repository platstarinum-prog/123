import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = resolve(__dirname, '..', 'public', 'images');

const sites = [
  { url: 'https://angelina-taro.me', name: 'case-angelina' },
];

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

for (const site of sites) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  try {
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    const shot = await page.screenshot({ type: 'png' });
    const jpg = await sharp(shot)
      .resize(800, 500, { fit: 'cover', position: 'top' })
      .toBuffer();
    await sharp(jpg).jpeg({ quality: 82 }).toFile(join(imgDir, `${site.name}.jpg`));
    console.log(`✓ ${site.name}`);
  } catch (e) {
    console.error(`✗ ${site.url}: ${e.message}`);
    const svg = `
<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#111827"/><stop offset="1" stop-color="#1f2937"/>
  </linearGradient></defs>
  <rect width="800" height="500" fill="url(#g)"/>
  <circle cx="680" cy="80" r="160" fill="#f43f5e" opacity="0.12"/>
  <rect x="60" y="90" width="320" height="22" rx="6" fill="#374151"/>
  <rect x="60" y="130" width="420" height="14" rx="6" fill="#1f2937"/>
  <rect x="60" y="160" width="380" height="14" rx="6" fill="#1f2937"/>
  <rect x="60" y="220" width="240" height="160" rx="16" fill="#1f2937"/>
  <rect x="320" y="220" width="240" height="160" rx="16" fill="#1f2937"/>
  <text x="60" y="430" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="900" fill="#ffffff">${site.url}</text>
  <text x="60" y="465" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#f43f5e" letter-spacing="3">CASE PREVIEW</text>
</svg>`;
    await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(join(imgDir, `${site.name}.jpg`));
  }
  await page.close();
}

await browser.close();
console.log('done');