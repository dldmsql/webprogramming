import {odd, even} from './var.js';

function checkNumber(num) {
    return num%2 ? odd : even;
}

export default checkNumber;