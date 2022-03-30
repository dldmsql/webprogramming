const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

// console.log(http.METHODS);
// console.log(http.STATUS_CODES);

// event에 반응하는 리스너를 매개변수로 넘겨야 한다.
const server = http.createServer( (req, res) => {
    console.log('클라이언트 요청 중 ... ');
    console.log(req.method);
    console.log(req.url);
    // console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-9'});
    res.write('<h1>Hello, world</h1>'); // write() 여러 번 가능
    res.end('<p>Hello, Node Server!</p>');

}); // 서버 객체를 만든다.

server.listen(port);

server.on('listening', ()=> {
    console.log(`${hostname}:${port}에서 서버 실행중 ...`);
});

server.on('connection', ()=>{
    console.log('클라이언트가 서버에 연결합니다.');
});

server.on('error', (error) => {
    console.error(error);
});

// server.listen(port, hostname, ()=> {
//     console.log(`${hostname}:${port}에서 서버 실행중 ...`);
// } ); // 서버 실행 요청 ( 포트 번호 )
