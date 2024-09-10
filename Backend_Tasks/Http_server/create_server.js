const http = require('http');    

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, welcome to node js \n I am Srikar \nThis is my node js Task');
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// const http=require('http');
//  const myServer = http.createServer((req,res)=>{
//   res.write('created sucessfully')
//   res.end()
//  })
//  myServer.listen(4586)