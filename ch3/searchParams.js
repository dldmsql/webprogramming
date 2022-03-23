const url = require('url');

const myURL = new URL(
    "https://www.gilbut.co.kr/book/?page=3&limit=10&category=nodejs&category=javascript"
);
console.log('searchParams:',myURL.searchParams);
console.log('searchParams.getALL():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():',myURL.searchParams.has('page'));

console.log('searchParams.keys():',myURL.searchParams.keys());
console.log('searchParams.values():',myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter','es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));