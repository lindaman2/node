const{odd, even} = require('./var');
const checkNumber = require('./func.js');

function checkOddOrEven(str){
    if(str.length %2){
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(10));
console.log(checkOddOrEven('hello'));