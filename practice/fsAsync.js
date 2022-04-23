const fs = require('fs');

console.log('시작합니다.');
fs.readFile('./readFile.txt', (err, data) => {
    
    console.log( '여긴 1번입니다. ', data.toString());
});

fs.readFile('./readFile.txt', (err, data) => {
    
    console.log( '여긴 2번입니다. ' , data.toString());
});

fs.readFile('./readFile.txt', (err, data) => {

    console.log( '여긴 3번입니다. ' , data.toString());
});

console.log('끝났습니다.')
