const fs =  require('fs');

fs.writeFile('./writeme.txt', '노드로 파일에 글을 쓴다.', (err)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});