const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8084, () => {
    console.log('8084번 포트에서 서버 대기중입니다!');
});