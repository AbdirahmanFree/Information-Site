const { createServer } = require('node:http')
const fs = require('fs')
require('dotenv').config()

const ENV = process.env.NODE_ENV


const port = 5000;
const hostname ='localhost'

const server = createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
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
        res.statusCode = 404

        if(ENV == 'dev'){
            res.end(fs.readFileSync('./404dev.html'))
        }
        else {
            res.end(fs.readFileSync('./404prod.html'))
        }
      

        
    }
 
})

server.listen(port,hostname, () =>{
    console.log(`server running on http://${hostname}:${port}/`)
})