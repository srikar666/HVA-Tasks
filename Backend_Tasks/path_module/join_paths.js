const path = require('path');
const fs= require('fs')

const currdir = __dirname;

const combpath = path.join(currdir,'public','Index.html');

console.log(
    `
    currpath: ${currdir}
    combined or joined path: ${combpath}
    `
);
