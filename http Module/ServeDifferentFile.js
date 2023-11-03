// Create a HTTP Server and serve HTML, CSV, JSON and PDF Files

// Please Create a public folder on the same path as of this file and add different html, json, csv and psf file in public folder

const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const contentTypes = {
  '.html': 'text/html',
  '.csv': 'text/csv',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
};

const server = http.createServer(async (req, res) => {
  const { url } = req;
  const filePath = path.join(__dirname, 'public', url);

  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    const contentType = contentTypes[ext] || 'text/plain';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
