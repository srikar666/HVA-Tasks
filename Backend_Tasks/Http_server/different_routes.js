const http = require("http");
const create = require("../File_system/Create");
const read = require("../File_system/Read");
const append = require("../File_system/Append");
const del = require("../File_system/Delete");

const name = "creta2025.txt";
const note = "abcdefg";
const note1 = "hijk";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    ``;
    res.statusCode = 200;
    res.end("Hello, Node.js!");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("I am learning Node.js!");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("You can reach us");
  } else if (req.url === "/create") {
    create(name, note);
    res.end("File created successfully");
  } else if (req.url === "/append") {
    append(name, note1);
    res.end("File appended successfully");
  } else if (req.url === "/read") {
    read(name);
    res.end("File read successfully");
  } else if (req.url === "/delete") {
    del(name);
    res.end("File deleted successfully");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// const http = require('http');

// const server = http.createServer((req, res) => {
//     // Set the content type once at the beginning
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     if (req.url === '/') {
//         res.end('Hello, Node.js!');
//     } else if (req.url === '/about') {
//         res.end('I am learning Node.js!');
//     } else if (req.url === '/contact') {
//         res.end('You can reach us');
//     } else {
//         // Override the header for 404 responses
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });

// const port = 8000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });
