const fs = require('fs');

console.log('시작합니다.');
let data = fs.readFileSync('./readFile.txt');
console.log('1번입니다.', data.toString());
data = fs.readFileSync('./readFile.txt');
console.log('2번입니다.', data.toString());

data = fs.readFileSync('./readFile.txt');
console.log('3번입니다.', data.toString());