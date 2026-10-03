const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.join(__dirname, '..', 'test_screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const mobileUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

const viewports = [
  { name: '320px_small_mobile', width: 320, height: 750, isMobile: true },
  { name: '375px_standard_mobile', width: 375, height: 812, isMobile: true },
  { name: '430px_large_mobile', width: 430, height: 932, isMobile: true },
  { name: '768px_tablet', width: 768, height: 1024, isMobile: false },
  { name: '1024px_laptop', width: 1024, height: 768, isMobile: false },
  { name: '1440px_desktop', width: 1440, height: 900, isMobile: false },
  { name: '1920px_large_monitor', width: 1920, height: 1080, isMobile: false }
];

console.log('Testing responsive viewports against http://localhost:5173/ ...');

for (const vp of viewports) {
  const screenshotPath = path.join(outputDir, `${vp.name}.png`);
  const tempProfile = path.join(os.tmpdir(), `chrome_test_${vp.width}`);
  console.log(`Testing [${vp.name}] ${vp.width}x${vp.height} ...`);
  
  const uaArg = vp.isMobile ? `--user-agent="${mobileUA}"` : '';
  const cmd = `"${chromePath}" --headless=new --disable-gpu ${uaArg} --user-data-dir="${tempProfile}" --window-size=${vp.width},${vp.height} --virtual-time-budget=2000 --screenshot="${screenshotPath}" http://localhost:5173/`;
  
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 15000 });
    if (fs.existsSync(screenshotPath)) {
      const stats = fs.statSync(screenshotPath);
      console.log(`✓ ${vp.name} captured successfully (${stats.size} bytes)`);
    }
  } catch (err) {
    console.error(`Error capturing ${vp.name}:`, err.message);
  }
}

console.log('All responsive tests completed!');
