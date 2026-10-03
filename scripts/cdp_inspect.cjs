const http = require('http');
const { exec } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cmd = `"${chromePath}" --headless=new --remote-debugging-port=9222 http://localhost:5173/`;

console.log('Launching Chrome with remote debugging...');
const proc = exec(cmd);

setTimeout(() => {
  // Query CDP for tabs
  http.get('http://localhost:9222/json', (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const tabs = JSON.parse(data);
      console.log('Tabs:', tabs.length);
      const wsUrl = tabs[0].webSocketDebuggerUrl;
      console.log('WebSocket URL:', wsUrl);
      
      // Let's use CDP via simple HTTP protocol or WebSocket to evaluate
      const WebSocket = require('ws');
      const ws = new WebSocket(wsUrl);
      ws.on('open', () => {
        // Set viewport to 375x812
        ws.send(JSON.stringify({
          id: 1,
          method: 'Emulation.setDeviceMetricsOverride',
          params: { width: 375, height: 812, deviceScaleFactor: 1, mobile: true }
        }));
        
        // Evaluate overflowing elements
        const expression = `(() => {
          const results = [];
          document.querySelectorAll('*').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > window.innerWidth + 2) {
              results.push({
                tag: el.tagName,
                id: el.id,
                cls: el.className,
                right: Math.round(r.right),
                width: Math.round(r.width)
              });
            }
          });
          return {
            innerWidth: window.innerWidth,
            docWidth: document.documentElement.offsetWidth,
            bodyWidth: document.body.offsetWidth,
            results: results.slice(0, 15)
          };
        })()`;

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 2,
            method: 'Runtime.evaluate',
            params: { expression, returnByValue: true }
          }));
        }, 500);
      });

      ws.on('message', (msg) => {
        const resp = JSON.parse(msg);
        if (resp.id === 2) {
          console.log('CDP EVALUATION RESULT:', JSON.stringify(resp.result.value, null, 2));
          ws.close();
          proc.kill();
          process.exit(0);
        }
      });
    });
  }).on('error', (e) => {
    console.error('Error connecting to CDP:', e);
    proc.kill();
    process.exit(1);
  });
}, 2000);
