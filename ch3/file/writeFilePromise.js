const fs =  require('fs').promises;

let txt = '노드로 파일에 글을 쓴다.';

fs.writeFile('./writeme.txt', txt)
.then(() => {
    return fs.readFile('./writeme.txt');
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err) => {
    console.log(err);
});