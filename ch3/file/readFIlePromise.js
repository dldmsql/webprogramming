const fs = require('fs').promises;

fs.readFile('./readme.txt', 'utf-8')
.then((data)=>{
    console.log(data);
    console.log(data.toString());

})
.catch((err) => {
    console.log(err);
});