const {odd, even} = require('./var');

function checkNum(num) {
    return num%2 ? odd: even;
}

module.exports = checkNum;