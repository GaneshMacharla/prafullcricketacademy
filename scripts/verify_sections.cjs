const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function test() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:5176/...');
  await page.goto('http://localhost:5176/', { waitUntil: 'networkidle0', timeout: 30000 });

  const title = await page.title();
  console.log('Page Title:', title);

  // Check section existence
  const sections = await page.evaluate(() => {
    return {
      hero: !!document.querySelector('h1'),
      pathway: !!document.querySelector('#pathway'),
      methodology: !!document.querySelector('#methodology'),
      achievements: !!document.querySelector('#achievements'),
      clinics: !!document.querySelector('#clinics'),
      schedule: !!document.querySelector('#schedule'),
      trialProtocol: !!document.querySelector('#trial-protocol'),
      faqs: !!document.querySelector('#faqs'),
      modalTrigger: !!document.querySelector('button')
    };
  });
  console.log('Sections detected:', JSON.stringify(sections, null, 2));

  // Test pathway tab switching
  const pathwayTabTest = await page.evaluate(async () => {
    const tabs = document.querySelectorAll('#pathway button');
    if (tabs.length >= 2) {
      const initialText = document.querySelector('#active-stage-title')?.textContent;
      tabs[1].click(); // click second stage
      await new Promise(r => setTimeout(r, 200));
      const afterText = document.querySelector('#active-stage-title')?.textContent;
      return { initialText, afterText, success: initialText !== afterText };
    }
    return { success: false, reason: 'tabs not found' };
  });
  console.log('Pathway Tab Switch:', pathwayTabTest);

  // Test methodology pillar switching
  const methodologyTest = await page.evaluate(async () => {
    const buttons = document.querySelectorAll('#methodology button');
    if (buttons.length >= 3) {
      const initialPillar = document.querySelector('#methodology h3')?.textContent;
      buttons[1].click(); // click second pillar
      await new Promise(r => setTimeout(r, 200));
      const afterPillar = document.querySelector('#methodology h3')?.textContent;
      return { initialPillar, afterPillar, success: initialPillar !== afterPillar };
    }
    return { success: false, reason: 'pillar buttons not found' };
  });
  console.log('Methodology Pillar Switch:', methodologyTest);

  // Test FAQ accordion
  const faqTest = await page.evaluate(async () => {
    const faqBtns = document.querySelectorAll('#faqs button');
    if (faqBtns.length > 0) {
      // Find an accordion button
      for (const btn of faqBtns) {
        if (btn.textContent && btn.textContent.includes('At what age')) {
          btn.click();
          await new Promise(r => setTimeout(r, 200));
          return { clicked: true };
        }
      }
    }
    return { clicked: false };
  });
  console.log('FAQ Accordion test:', faqTest);

  // Check horizontal overflow
  const overflow = await page.evaluate(() => {
    const docW = document.documentElement.clientWidth;
    const scrollW = document.documentElement.scrollWidth;
    return { docW, scrollW, hasOverflow: scrollW > docW };
  });
  console.log('Overflow check:', overflow);

  // Take screenshot
  const outDir = path.join(__dirname, '..', 'test_screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  await page.screenshot({ path: path.join(outDir, 'benchmark_sections_desktop.png'), fullPage: false });
  console.log('Screenshot saved to test_screenshots/benchmark_sections_desktop.png');

  await browser.close();
  console.log('Verification finished successfully!');
}

test().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
