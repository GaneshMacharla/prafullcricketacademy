const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Use Chrome with evaluate script or DevTools protocol
// Or we can inject a script into index.html temporarily to log window.innerWidth and any overflowing elements!
const testScript = `
<script>
window.addEventListener('load', () => {
  console.log('VIEWPORT innerWidth:', window.innerWidth, 'clientHeight:', window.innerHeight);
  const docWidth = document.documentElement.offsetWidth;
  const elements = document.querySelectorAll('*');
  const overflowing = [];
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > window.innerWidth + 1) {
      overflowing.push({
        tag: el.tagName,
        id: el.id,
        className: el.className,
        right: Math.round(rect.right),
        width: Math.round(rect.width)
      });
    }
  });
  console.log('OVERFLOWING ELEMENTS (' + overflowing.length + '):', JSON.stringify(overflowing.slice(0, 10)));
  const div = document.createElement('div');
  div.id = 'debug-viewport';
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.background = 'red';
  div.style.color = 'white';
  div.style.zIndex = '99999';
  div.style.fontSize = '12px';
  div.innerText = 'W:' + window.innerWidth + ' docW:' + docWidth + ' over:' + overflowing.length;
  document.body.appendChild(div);
});
</script>
`;

console.log('Testing script ready');
