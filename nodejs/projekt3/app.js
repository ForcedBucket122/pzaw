//path do budowania sciezek do plikow
const path = require('path');
const sciezkaDoPliku1 = path.join(__dirname, 'app.js');
const sciezkaDoPliku2 =__dirname+'\\'+'app.js';
const sciezkaDoPliku3 =__filename;
console.log('Sciezka: '+sciezkaDoPliku3);