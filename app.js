const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Chú không uống là không nể anh rồi',
//   }));
  res.end(
    `
    <html>
        <head></head>
        <body>
            <h1>
                Xin chào thầy và các bạn!
            </h1>
        </body>
    </html>

    `
  )
});

server.listen(8000);