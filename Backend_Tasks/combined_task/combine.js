
const http = require("http");
const fs = require('fs');
const path = require('path');

const server=http.createServer((req,res)=>{
  const filepath = path.join(__dirname,'public','Index.html');
  if(req.url=='/'){
    fs.readFile(filepath,(err,data)=>{
      if(err){
        res.setHeader('Content-Type', 'text/html');
        res.statusMessage("File Not found");
        res.end("File not found");
      }
      res.setHeader('Content-Type', 'text/html');
      res.end(data)

    })


  }

  
})

server.listen(3000,()=>{
  console.log("Server is running");
})


