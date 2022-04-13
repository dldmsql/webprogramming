const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req,res,next) => {
    console.log('use - '+ req.path);
    next(); // 반드시 작성해야 한다. 그래야 뒤로 넘어간다.
});

// app.all('/', (req,res,next) => {
//     console.log('all - '+ req.path);
//     next(); 
// });

app.get(
    '/',
    (req, res, next) => {
        console.log('1st /의 first callback');
        next(new Error('Something wrong!'));
    },
    (req, res, next) => {
        console.log('1st /의 second callback');
        next();
    }
);

app.get('/', (req, res) => {
    console.log('2nd /의 callback');
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/users', (req,res)=> {
    res.json({name:'Happy', age:6});
})

app.get('/user/:id', (req,res) => {
    // res.json(req.params);
    res.send(`${req.params.id}님 반갑습니다!`);
});

app.get('/search', (req,res) => { // 잘못된 경로로 요청할 때
        console.log(req.query);
        console.log(`${req.query.title}, ${req.query.year}인 책을 검색중 ...`);
        res.send('query test');

});

app.use( ( req, res, next) => {
    res.status(404).send(`${req.method} ${req.path} is NOT FOUND`);
});

app.use( (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!');
});

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}에서 대기중`);
});