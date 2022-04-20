const cryto = require('crypto');

console.log('base64:', cryto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('base64(1234):', cryto.createHash('sha512').update('1234').digest('base64'));
console.log('hex:', cryto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', cryto.createHash('sha512').update('다른 비밀번호').digest('base64'));