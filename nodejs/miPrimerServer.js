const http = require('http');

let server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    if (req.url == '/about') {
        res.end('Estoy en ABOUT');
    } else if (req.url === '/contact') {
        res.end('Estoy en CONTACTO');
    }
});

server.listen(3000);

// about, contact