let fs = require('fs');
function Appendfile(name ,text){
 

fs.appendFile(name, text, (err) => {
  if (err) {
    console.error('Error to append file:', err);
  } else {
    console.log('Appended  successfully.');
  }
});
}

let textToAppend = '\nThis is Srikar.';
module.exports=Appendfile