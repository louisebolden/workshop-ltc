const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const url = req.url;
  if (url === '/data-please') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    const data = JSON.stringify({ data: "here you go"});
    res.end(data);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
