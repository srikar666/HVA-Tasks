let fs = require('fs');
function Deletefile(name ){
  fs.unlink( name, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('message.txt has been deleted successfully.');
  }
});

}





module.exports=Deletefile