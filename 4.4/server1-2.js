const http2 = require('http2');
<<<<<<< HEAD
const fs = require('fs')
=======
const fs = require('fs');

http2.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 인증서 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
});
>>>>>>> e245683bf69bd8ab0e1caa464a1d4f76e089a123
