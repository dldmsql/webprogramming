let a = 100, b = 10, c = 1;

console.log(`${a}, ${b}, ${c}의 합계 ${a+b+c}`);

let obj = { first: 'hello', second: 'my name is zzangu'};
let msg1 = '인사해볼게요. ' + obj.first + ' ' + obj.second;
let msg2 = `모두 주목! 
${obj.first} ${obj.second} 반가워`;

console.log(msg1);
console.log(msg2);

let value1 = 1;
let value2 = 2;
let bValue = false;
let operator= '불린값은 ' + (bValue ? '참' : '거짓');
console.log(operator);

operator = `불린 값이 뭐냐면, ${bValue ? '참' : '거짓'}이야.`;
console.log(operator);

console.log(`${value1 + value2}`);