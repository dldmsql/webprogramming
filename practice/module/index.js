import {odd, even} from './var.js';
import checkNumber from './func.js';

function checkStringOddOrEven (str) {
    return str.length%2 ? odd : even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('zzangu'));