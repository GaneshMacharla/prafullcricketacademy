const https = require('https');
const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, '..', 'public', 'images', 'academy');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const photos = [
  {
    id: 'pca-gmaps-01',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7H072-QaLk39_-Q3bd36ZXg82XHuzTcCvWDXiruokSW_OcoQOmhIVhyX2U7zorbutfqqbSBdVMIQ8ulgyjoZzM6qUOV5HtGthXBX9kerrVE3qb-z8M-DZyeiN18CqOhu6MUA6F6Q-PljL=w1200-h800-k-no',
    filename: 'pca-gmaps-01.jpg',
    ci: 'CIABIhAjfvMVUpYJuBio43MkyOoI'
  },
  {
    id: 'pca-gmaps-02',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RvsdInogeMltcVbK9xVK-WfjMaIiXvoBEs5xLktWyPcagwNyJYQdlgmr2s4n6QZJi1LMSTwDGnUnYKwpuMuZp7ExVngw85rgkvNVOUy_uoucWVVGNtSDuKEKsptOwEVYnMX3si=w1200-h800-k-no',
    filename: 'pca-gmaps-02.jpg',
    ci: 'CIHM0ogKEICAgICDy_apBg'
  },
  {
    id: 'pca-gmaps-03',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tz-xxN3_hYHrYxCwKoQa2G90Q-WnsjxtlMfwDzFyISEBqJGd8pU2R3q-xmq6LBQqbJGMP2xS5Ql-aJfLdkOi1XsxkwaVDCpqZFDA5hQd_h79qOjhFZkahnls77WasJOmYfUzw=w1200-h800-k-no',
    filename: 'pca-gmaps-03.jpg',
    ci: 'CIHM0ogKEICAgIDmyfvyTQ'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(destDir, item.filename);
    const file = fs.createWriteStream(filePath);
    https.get(item.url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${item.filename} status:`, res.statusCode);
        resolve(null);
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${item.filename} (${fs.statSync(filePath).size} bytes)`);
        resolve(filePath);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${item.filename}:`, err);
      resolve(null);
    });
  });
}

async function run() {
  for (const item of photos) {
    await download(item);
  }
}

run();
