
let fs = require("fs");
function Createfile(name,note ){
  fs.writeFile( name,note, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File written successfully.");
  });
}
module.exports=Createfile
