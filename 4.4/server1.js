const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
<<<<<<< HEAD
}).listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다!');
=======
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
>>>>>>> e245683bf69bd8ab0e1caa464a1d4f76e089a123
});