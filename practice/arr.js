// forEach

const nums = [1,2,3,4,5];
nums.forEach( (value) => console.log(value) );

const users = [
    {name: 'zzangu', age: 5},
    {name: 'zzanga', age: 1},
    {name: 'chursu', age: 5},

];

users.forEach( (user) => console.log(user.name) );

// map
const proceed = nums.map( (num) => num%2 );
console.log(proceed);

// filter
const even = nums.filter( (num) => num%2 === 0 );
console.log(even);

// reduce
let sum = nums.reduce( ( total, num) => total + num, 10); // 10 자리는 초기값
console.log(sum);

