const http = require('http');

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1> hello </h1>');
    res.end();
});
server.listen(8080);
server.on('listening', () => {
    console.log('서버 듣고 있나?');
});