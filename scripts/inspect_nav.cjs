const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Let's run chrome headless with dump-dom or a quick evaluate script
const html = `
<!DOCTYPE html>
<html>
<body>
<script>
window.location.href = 'http://localhost:5173/';
</script>
</body>
</html>
`;
fs.writeFileSync('test_nav.html', html);

// We can run a small script using node to fetch the rendered DOM or evaluate using Chrome DevTools
console.log('Inspecting navbar DOM elements...');
