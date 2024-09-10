const path = require('path')

const pathofmessage = path.parse('we/to/message.txt');

console.log(`Directory: ${pathofmessage.dir}`);
console.log(`Base: ${pathofmessage.base}`);
console.log(`Extension: ${pathofmessage.ext}`);
console.log(`Name: ${pathofmessage.name}`);