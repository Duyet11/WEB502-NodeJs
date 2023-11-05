// const http = require('node:http');

// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Chú không uống là không nể anh rồi',
//   }));
//   res.end(
//     `
//     <html>
//         <head></head>
//         <body>
//             <h1>
//                 Xin chào thầy và các bạn!
//             </h1>
//         </body>
//     </html>

//     `
//   )
// });

// server.listen(8000);
const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.get('/products', (req, res) => {
  res.send('products page!')
})
app.post('/products', (req, res) => {
  const {params, query, body} = req
  console.log("params:", params)
  console.log(query)
  console.log(body)
  res.send('Add new product page!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})