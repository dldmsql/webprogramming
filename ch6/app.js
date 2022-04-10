const express = require('express');
const path = require('path');

const app = express();
// app.set('port', process.env.PORT || 3000);
app.set('port', 3000);

app.use((req,res,next) => {
    console.log(req.path);
    next();
});

app.get('/', (req,res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send({name: 'Happy', age:6});  // write-end가 포함
    // res.json({name: 'Happy', age:6});
    // res.sendFile(__dirname + '/index.html');
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.get('/users', (req,res)=> {
    res.json({name:'Happy', age:6});
})

app.get('/user/:id', (req,res) => {
    // res.json(req.params);
    res.send(`${req.params.id}님 반갑습니다!`);
});

app.get('*', (req,res) => { // 잘못된 경로로 요청할 때
    // res.status(404).send(`${req.path} is Not FOUND`);
    // res.status(404).end();
    // res.sendStatus(404);
    if(req.query){
        console.log(req.query);
        console.log(`${req.query.title}, ${req.query.year}인 책을 검색중 ...`);
        res.send('query test');
    }
    else res.redirect('/');
});

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}에서 대기중`);
});