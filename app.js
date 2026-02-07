const { createServer } = require('node:http')
const fs = require('fs')


const port = 5000;
const hostname ='localhost'

const server = createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.end(fs.readFileSync('./index.html'))
        res.statusCode = 200
    }
    else if(req.url == '/about'){
        res.end(fs.readFileSync('./about.html'))
    }
    else if(req.url == '/contact'){
        res.end(fs.readFileSync('./contact-me.html'))
    }
    else {
        res.end(fs.readFileSync('./404.html'))
        res.statusCode = 404
    }
 
})

server.listen(port,hostname, () =>{
    console.log(`server running on http://${hostname}:${port}/`)
})