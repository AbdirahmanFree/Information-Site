const express = require("express")
const path = require("path")
require('dotenv').config()
const ENV = process.env.NODE_ENV

const app = express()

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/about",(req,res) => {
    res.sendFile(path.join(__dirname,"about.html"))
})

app.get("/contact", (req,res) => {
    res.sendFile(path.join(__dirname,"contact-me.html"))
})

app.get(/.*/, (req,res) => {
    if(ENV =='dev'){
        res.sendFile(path.join(__dirname,"404dev.html"))
    }
    else{
        res.sendFile(path.join(__dirname,"404prod.html"))
    }
})


const port = 5000;
const hostname ='localhost'



app.listen(port, () =>{
    console.log(`server running on http://${hostname}:${port}/`)
})