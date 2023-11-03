// Develop 3 HTML Web Pages for college home page(write about college & dept),about me, contact. Create a server and render these pages using Routing.

// Please Create a public folder on the same path as of this file and add different html files in public folder

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    // Handle the root URL
    if (req.url === '/' || req.url === '/index.html') {
        serveHTML('index.html', res);
    }
    // Handle the /about URL
    else if (req.url === '/about.html') {
        serveHTML('about.html', res);
    }
    // Handle the /contact URL
    else if (req.url === '/contact.html') {
        serveHTML('contact.html', res);
    }
});

function serveHTML(filename, res) {
    const filePath = path.join(__dirname, 'public', filename);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
}

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
