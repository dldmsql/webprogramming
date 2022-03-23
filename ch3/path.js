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
const parsed = path.parse(string);
console.log('path.parse(): ', parsed);
console.log('path.format():', path.format(parsed));
console.log('path.normalized():', path.normalize('C://users//yhy59//path.js'));
console.log('---------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home)', path.isAbsolute('./home'));
console.log('---------------------------------');
console.log('path.relative():', path.relative('C:\\users\\yhy59\\path.js', 'C:\\'));
console.log('path.jon()',path.join(__dirname, '..', '..', '/etc','.','/temp'));
console.log('path.resolve():', path.resolve(__dirname,'..','etc','.','/temp'));