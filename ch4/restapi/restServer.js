const http = require('http');
const fs = require('fs').promises;

const users = {};   // 데이터 저장용
const port = 8080;

const restServer = http.createServer(async (req, res) => {
    try{
        if(req.method === 'GET' ){
            if(req.url === '/'){
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, {'Content-Type':'text/html; charset=uft-8'});
                res.end(data);
            } else if(req.url === '/users'){
                res.writeHead(200, {
                    'Contnet-Type': 'application/json; charset=utf-8'
                });
                res.end(JSON.stringify(users));
            } else if(req.url === '/about'){
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type':'text/html; charset=uft-8'});
                res.end(data);
            } else {
                try { // 기타 다른 자원을 요청하는 경우 ( img, css, js )
                    const data = await fs.readFile(`.${req.url}`);
                    res.end(data);
                    
                } catch(err){
                    console.error(err);
                    res.writeHead(404, {
                        'Content-Type': 'text/plain; charset=utf-8'
                    });
                    res.end('NOT FOUND');
                }
            }
        } else if(req.method ==='POST'){
            if(req.url === '/user'){
                req.on('data', (data) => {
                    console.log('POST 본문(body): ', data.toString());
                    const {name} = JSON.parse(data);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201, {
                        'Content-Type': 'text/plain; charset=utf-8'
                    });
                    res.end('ok');
                }); 
            } else {
                console.error(err);
                res.statusCode = 404;
                res.end('NOT FOUND');
            }
        } else if(req.method ==='PUT'){
                if(req.url.startsWith('/user/')){
                    const key =req.url.split('/')[2];
                    req.on('data', (data)=>{
                        console.log('PUT 본문(body):', data.toString());
                        users[key] = JSON.parse(data).name;
                        res.writeHead(200, {
                            'Content-Type': 'text/plain; charset=utf-8'
                        });
                        res.end('ok');
                    });
                } else{
                    console.error(err);
                    res.statusCode = 404;
                    res.end('NOT FOUND');
                }
        } else if(req.method === 'DELETE'){ 
            if(req.url.startsWith('/user/')){
                const key =req.url.split('/')[2];
                delete users[key];
                res.writeHead(200, {
                        'Content-Type': 'text/plain; charset=utf-8'
                    });
                res.end('ok');
                
            } else{
                console.error(err);
                res.statusCode = 404;
                res.end('NOT FOUND');
            }
        } else {
            console.error(err);
            res.statusCode = 400;
            res.end('BAD REQUEST');
            
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type}': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
});
restServer.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 대기중입니다.`);
});