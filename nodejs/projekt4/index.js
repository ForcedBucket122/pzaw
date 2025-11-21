const http = require('http');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql');

const port = 5000;

// konfiguracja bazy
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'komis'
});

con.connect(err => {
    if (err) throw err;
    console.log("Połączono z bazą danych");
});

// serwer HTTP
function odpowiedz(request, response) {
    let filePath;
    let contentType;

    // endpoint do pobierania danych z MySQL
    if (request.url === '/auta') {
        con.query("SELECT * FROM `auta`", (err, result) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: "Błąd bazy danych" }));
            } else {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(result));
            }
        });
        return;
    }

    // pliki statyczne
    if (request.url === '/' || request.url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
        contentType = 'text/html; charset=utf-8';
    } else if (request.url === '/style.css') {
        filePath = path.join(__dirname, 'style.css');
        contentType = 'text/css; charset=utf-8';
    } else if (request.url === '/skrypt.js') {
        filePath = path.join(__dirname, 'skrypt.js');
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
    console.log('Serwer działa: http://localhost:' + port);
});
