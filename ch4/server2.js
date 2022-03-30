const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(async (req, res) => {
    try{
        console.log('클라이언트 요청 처리중 ...');
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);

    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
});
server.listen(port);