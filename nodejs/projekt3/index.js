const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 5000;

function odpowiedz(request, response) {
    let filePath;
    let contentType;

    if (request.url === '/' || request.url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
        contentType = 'text/html; charset=utf-8';
    } else if (request.url === '/style.css') {
        filePath = path.join(__dirname, 'style.css');
        contentType = 'text/css; charset=utf-8';
    } else if (request.url === '/script.js') {
        filePath = path.join(__dirname, 'script.js');
        contentType = 'application/javascript; charset=utf-8';
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end('<h1>404 - Nie znaleziono</h1>');
        return;
    }

    fs.readFile(filePath, (err, dane) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end('<h1>Błąd serwera</h1>');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(dane);
        }
    });
}

const server = http.createServer(odpowiedz);

server.listen(port, () => {
    console.log('dziala, http://localhost:' + port);
});
