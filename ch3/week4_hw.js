// page 10
// var.js, func.js, index.js

// page 17
const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside:{
        inside:{
            key:'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그입니다. 쉽표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요.');

console.table([
    {name: '제로', birth:1994},
    {name: 'hero', birth:1998},
]);

console.dir(obj, {colors:false, depth:2});
console.dir(obj, {colors:true, depth:1});

console.time('시간측정');
for(let i = 0; i< 100000; i++){}
console.timeEnd('시간측정');

function b(){
    console.trace('에러 위치 추적');
}
function a(){
    b();
}
a();
console.timeEnd('전체 시간');

// page 21
console.log(__filename);
console.log(__dirname);

// page 32
const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter: ',path.delimiter);
console.log('---------------------------------');
console.log('path.dirname():',path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('---------------------------------');
console.log('path.parse(): ', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C\\users\\yhy59',
    name:'week4_hw',
    ext:'.js',
}));
console.log('path.normalized():', path.normalize('C://users\\\\yhy59\\week4_hw.js'));
console.log('---------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home)', path.isAbsolute('./home'));
console.log('---------------------------------');
console.log('path.relative():', path.relative('C:\\users\\yhy59\\week4_hw.js', 'C:\\'));
console.log('path.jon()',path.join(__dirname, '..', '..', '/users','.','/yhy59'));
console.log('path.resolve():', path.resolve(__dirname,'..','users','.','/yhy59'));

// page 37
const url = require('url');

const {URL} = url;
const myURL = new URL(
    "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=00100100#anchor"
);
console.log('new URL():',myURL);
console.log('url.format():', url.format(myURL));
console.log('-------------------');
const parsedURL = url.parse(
    'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=00100100#anchor'
);
console.log('url parse():', parsedURL);
console.log('url.format():', url.format(parsedURL));

// page 46
const fs = require('fs').promises;

fs.readFile('./readme.txt', 'utf-8')
.then((data)=>{
    console.log(data);
    console.log(data.toString());

})
.catch((err) => {
    console.log(err);
});

// page 47
const fs =  require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다.')
.then(() => {
    return fs.readFile('./writeme.txt');
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err) => {
    console.log(err);
});

// page 49
const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번',data.toString());
console.log('끝');

// page 52
const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
.then(() => {
    return Promise.reject('이미 폴더 있음');
})
.catch((err) => {
    if(err.code === 'ENOENT'){
        console.log('폴더 없음');
        return fs.mkdir('./folder');
    }
    return Promise.reject(err);
})
.then(()=>{
    console.log('폴더 만들기 성공');
    return fs.open('./folder/file.js', 'w');
})
.then((fd) => {
    console.log('빈 파일 만들기 성공', fd);
    fs.rename('./folder/file.js', './folder/newfile.js');
})
.then(() => {
    console.log('이름 바꾸기 성공');
})
.catch((err)=> {
    console.log(err);
});