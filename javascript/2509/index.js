const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hell yeah, i am live at server')
})



server.listen(3000,()=>{
    console.log("server is connected")
})