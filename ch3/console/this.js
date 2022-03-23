console.log(' -----------global ----------');
console.log(this);
console.log(this === module.exports);
console.log(this === exports);
console.log(this === global);

function whatIsThis() {
    console.log('----------function scope ---------');
    console.log(this);
    console.log(this === module.exports);
    console.log(this === global);

}
whatIsThis();