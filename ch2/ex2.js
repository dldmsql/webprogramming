/*
    고급 웹프로그래밍 2주차 예제 실행 과제 코드
    하나의 파일에 모든 코드를 작성했기에, 실행하려면 원하는 페이지의 코드만 살려두고 나머지를 주석처리해야 한다.
*/


// 객체 리터럴
// page 8
console.log(">>>>>> this code is in page 8. <<<<<<<<<<<<<<");
let name = 'park';
let age = 20;
let place = {city : 'Seoul', conutry : 'Korea'};

// ES2015 이전
let person = {
    name : name,
    age : age,
    place : place,
};
console.log(person);
// ES2015
let person2 = {
    name,
    age,
    place,
};
console.log(person2);

// page 10
console.log(">>>>>> this code is in page 10. <<<<<<<<<<<<<<");
// ES2015 이전
let robot = {
    name : 'smarty',
    say : function (word) {
        console.log(word);
        console.log(`저는 ${this.name} 예요.`);
    },
};
// ES2015
let robot2 = {
    name: 'smarty2',
    say(word) {
        console.log(word);
        console.log(`저는 ${this.name} 예요.`);
    },
};
robot.say('안녕하세요?');
robot2.say('안녕하세요?');

// page 11
console.log(">>>>>> this code is in page 11. <<<<<<<<<<<<<<");
// ES2015 
let i = 0;
let a  = {
    ['foo' + ++i ] : i,
    ['foo' + ++i ] : i,
    ['foo' + ++i ] : i,
};

console.log(a.foo1);
console.log(a.foo2);
console.log(a.foo3);

let param = 'size';
let config = {
    [param]:12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};
console.log(config);

//전개연산자
// page 15 - 16
console.log(">>>>>> this code is in page 15-16. <<<<<<<<<<<<<<");
let array1 = ['one', 'two'];
let array2 = ['three', 'four'];

let combined5 = [...array1, ...array2];
let combined6 = ['zero' , ...array2, 'plus', ...array1];

console.log(combined5);
console.log(combined6);

let obj1 = { one : 1, two : 2, other : 0};
let obj2 = { three : 3, four : 4, other : -1};

let combined = {
    ...obj1,
    ...obj2,
};
console.log(combined);

combined = {
    ...obj2,
    ...obj1,
};
console.log(combined);

let { other, ...ohters } = combined;
console.log(combined);

// 구조분해 할당
// page 17-20
console.log(">>>>>> this code is in page 17-20. <<<<<<<<<<<<<<");
let lists = ['apple', 'mango'];
[item1, item2, item3 = 'grape'] = lists;
console.log(item1, item2, item3);

// 두 변수 값 교환
let x = 1, y = 3;
[x,y] = [y,x];
console.log(x,y);

console.log(">>>>>> this code is in page 17-20. <<<<<<<<<<<<<<");
let a, b, rest;
[a,b ] = [10,20];
console.log(a);
console.log(b);

[a,b, ...rest] = [10,20, 30,40, 50];
console.log(a);
console.log(b);
console.log(rest);

console.log(">>>>>> this code is in page 17-20. <<<<<<<<<<<<<<");
let objs = {
    key1: 'one',
    key2: 'two',
};
let {key1: newKey1, key2, key3 = 'default_key3_value'} = objs;
console.log(objs);

console.log(">>>>>> this code is in page 17-20. <<<<<<<<<<<<<<");
let { a, b} = {a:10, b:20};
console.log(a);
console.log(b);

let {c,d,...rest} = {c:30, d:40, e:50, f:60};
console.log(c);
console.log(d);
console.log(rest);

// 배열의 함수
// forEach()
console.log(">>>>>> this code is in page 21. <<<<<<<<<<<<<<");
const nums = [40,55,128,905,77];
nums.forEach(function(value, index, array){
    console.log(`${index}번째 요소: ${value}`)
});
nums.forEach( (value, index) => {
   console.log(`${index}번째 요소: ${value}`)
});
nums.forEach((value) => console.log(value));

// map()
console.log(">>>>>> this code is in page 23. <<<<<<<<<<<<<<");
const nums = [1,2,3,4,5];
const processed = nums.map( (num) => num*num);
console.log(processed);

// filter()
console.log(">>>>>> this code is in page 24. <<<<<<<<<<<<<<");
const nums = [1,2,3,4,5,6,7,8,9,10];
const evenNums = nums.filter( (num) => num%2 === 0);
console.log(evenNums);

// reduce()
console.log(">>>>>> this code is in page 25. <<<<<<<<<<<<<<");
const nums = [1,2,3,4,5,6,7,8,9,10];
let sum = nums.reduce((total, num) => total + num , 0);
console.log(sum);