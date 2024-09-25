// const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('Hell yeah, i am live at server')
// })



// server.listen(3000,()=>{
//     console.log("server is connected")
// })

const express = require("express")

const app = express()

//5 methods - post get put delete patch

app.get("/getdata",(req,res)=>{
    res.send("hi there")
})

app.listen(3000,()=>{
    console.log("server is connected")
})