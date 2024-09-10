let fs= require('fs');

function readfile(name){

  fs.readFile(name, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

}
module.exports=readfile