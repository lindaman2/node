const {odd, even} = require('./var');

// ES2015 모듈 require 대신 import
// import { odd, even } from './var';

function checkOddOrEven(num){
    if(num % 2) {
        return odd;
    }
    return even
}

 module.exports = checkOddOrEven;

 // ES2015 모듈 module.exports 대신 export default 사용
 // export default checkOddOrEven;