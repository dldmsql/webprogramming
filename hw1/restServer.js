const http = require('http');
const fs = require('fs').promises;

/*
    form을 통해 작성한 내용을 배열 단이로 저장하기 위해 만든 변수
*/
const lists = {};
const port = 8080;

const restServer = http.createServer(async (req, res) => {
    try {
        /*
            GET Method
        */
        if(req.method === 'GET'){
            /*
                Bring up main page from main.html
            */
            if(req.url === '/'){
            const data = await fs.readFile('./main.html');
            res.writeHead(200, {
                'Content-Type':'text/html; charset=utf-8'
            });
            res.end(data);
            /*
                show lists data
            */
            } else if(req.url === '/lists'){
                res.writeHead(200, {
                    'Contnet-Type': 'application/json; charset=utf-8'
                });
                res.end(JSON.stringify(lists));
            /*
                Bring up sub page from profile.html
            */
            } else if(req.url === '/about'){
                const data = await fs.readFile('./profile.html');
                res.writeHead(200, {
                    'Content-Type':'text/html; charset=utf-8'
                });
                res.end(data);
            /*
                Request other resources like image, css, is ...
            */    
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
             /*
                POST Method
            */
        } else if(req.method === 'POST'){
             /*
                Save data entered through a form and Send it to main.js
                The ID of the data is today's date and
                 is stored in an array that contains username, title, contents.
            */            
            if(req.url === '/list'){
                req.on('data', (data)=>{
                    console.log('POST Body:', data.toString());
                    const {username, title, contents} = JSON.parse(data);
                    const id = Date.now();
                    lists[id] = [username, title, contents];
                    res.writeHead(201, {
                        'Content-Type':'text/plian; charset=utf-8'
                    });
                    console.log('저장된 list: ', lists.toString());
                    res.end('ok');
                });
            } else {
                console.error(error);
                res.statusCode = 404;
                res.end('NOT FOUND');
            }
             /*
                PUT Method
            */
        } else if(req.method ==='PUT'){
             /*
                Click the button to modify the contents of the data.
                Data is distinguished from key that is third factor in url.
            */
                if(req.url.startsWith('/list/')){
                    const key =req.url.split('/')[2];
                    req.on('data', (data)=>{
                        console.log('PUT 본문(body):', data.toString());
                        console.log('PUT', lists[key]);
                        (lists[key])[2] = JSON.parse(data).contents;
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
             /*
                DELETE Method
            */    
        } else if(req.method === 'DELETE'){
             /*
                Click the button to delete the contents of the data.
                Data is distinguished from key that is third factor in url.
            */
            if(req.url.startsWith('/list/')){
                const key =req.url.split('/')[2];
                delete lists[key];
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
            console.error(error);
            res.statusCode = 400;
            res.end('BAD REQUEST');
        }
    } catch (error) {
        console.error(error);
        res.writeHead(500, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end(error.message);
    }
});

restServer.listen(port, () => {
    console.log(`${port}번 포트에서 서버 대기 중입니다.`);
});