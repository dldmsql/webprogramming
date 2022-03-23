const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside:{
        inside:{
            key1: 'inside-key1',
            key2: 'inside-key2',
        },
    },
};
console.time('whole time');
console.log('stdout 출력 -' , string, number, boolean);
console.error('stderr 출력 - 에러 메세지');
console.log();

console.table([
    {name: 'andrew', birth:2001},
    {name: 'mina', birth:1995},
]);

console.log();
console.dir(obj, {colors:false, depth:2});
console.dir(obj, {colors:true, depth:2});
console.dir(obj, {colors:true, depth:1});

console.log();
console.time('시간측정');
for(let i = 0; i< 100000; i++){}
console.timeEnd('시간측정');

console.log();