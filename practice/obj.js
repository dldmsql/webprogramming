// 객체 리터럴 파트
let name = 'Park';
let age = 20;
let place = { city: 'Seoul', country: 'Korea' };

let person = {
    name,
    age,
    place,

    hello(word){
        console.log(word);
        console.log(`${this.name}라고 합니다. 나를 찾지 말고 살아가라. 너를 사랑했기에 후회없기에. 좋았던 기억만 가져가라.`);
    }
};

person.hello('안녕하세요. 가수');


let i = 0;
let a = {
['foo' + ++i]: i,
['foo' + ++i]: i,
['foo' + ++i]: i,
};
console.log(a.foo1); 
console.log(a.foo2); 
console.log(a.foo3); 
let param = 'size';
let config = {
[param]: 12,
['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};
console.log(config);

let j = 3;
let b = {
    ['zzangu' + i--]: i,
    ['zzangu' + i--]: i,
    ['zzangu' + i--]: i,
};
console.log(b.zzangu1);
console.log(b.zzangu2);
console.log(b.zzangu3);
console.log(b);


//익명 함수
const makeObj2 = (name, age) => ( { name, age } );
let person2 = makeObj2('Park', 20);
console.log(person2);


const childDetectivie = (name, gender) => ({name, gender});
let conan = childDetectivie('코난', 'male');
let zangmi = childDetectivie('장미', 'female');
console.log(`${conan.name}과 ${zangmi.name}는 어린이 탐정단일까?`);

// 전개 연산자
let arr1 = ['zzangu', 'zzanga'];
let arr2 = ['chursu', 'uri', 'hune', 'maengu'];

let children = [...arr1, ...arr2];
console.log(children);

let dducknipMB = ['suzi', arr1[1], ...arr2];
console.log(dducknipMB);

let array1 = {one: 'zzangu', two: 'zzanga'};
let array2 = {three: 'chursu', four: 'uri', five: 'hune', six: 'maengu'};


let dducknip = {
    ...array1,
    ...array2,
    
};
console.log(dducknip);

let {two, ...others} = dducknip;
console.log(others);

// 구조 분해 할당

let array = ['zzangu', 'zzanga', 'misun', 'heungman'];
let item1 = array[0];
let item2 = array[1];
let item3 = array[2];
let item4 = array[3];
let item5 = array[4] || 'whitedog';
console.log(array); // 4개만 출력
[item1, item2, item3, item4, item5 = 'whitedog'] = array;
console.log(item1, item2, item3, item4, item5); // 5개 다 출력

// swap
let x= 1, y= 2;
[x,y] = [y,x];
console.log(`${x}랑 ${y}`);

let out1, out2, rest;
[out1, out2, ...rest] = ['zzangu', 'zzanga', 'misun', 'heungman'];
console.log(rest);