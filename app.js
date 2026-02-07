const { createServer } = require('node:http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 5000;

const server = createServer((req, res) => {
    if(req.url = '/home'){
        res.statusCode = 200
        res.setHeader('content-type', 'text/html')
        res.end(fs.readFileSync('./index.html'))
    }
    else {
        res.statusCode = 404
        res.setHeader('content-type', 'text/html');
        res.end(fs.readFileSync('./404.html'))
    }

    
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})