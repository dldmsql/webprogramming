const url = require('url');

const myURL = new URL(
    "http://www.yes24.com/product/goods/101803558"
);
console.log('new URL():',myURL);
console.log('url.format():', url.format(myURL));
console.log('-------------------');
const parsedURL = url.parse(
    'http://www.yes24.com/product/goods/101803558'
);
console.log('url parse():', parsedURL);
console.log('url.format():', url.format(parsedURL));