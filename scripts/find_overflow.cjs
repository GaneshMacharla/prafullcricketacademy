const http = require('http');

// Let's check what element has scrollWidth or fixed min-width in the HTML/CSS
const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
console.log('HTML checked');
