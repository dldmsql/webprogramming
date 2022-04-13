/*
    app_v1.js 와의 차이:
    방문자 및 방문메세지를 전역변수 users 대신 users.json에 기록
    users.json의 기록을 읽어서 req.users에 저장
    post, put, delete에 의해 req.users가 수정된 후 users.json에 기록
*/

// imort modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs').promises;

const app = express();
app.set('port', process.env.PORT || 3000);

// express inner and outer middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// router middleware
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/login.html'));
});

app.get('/visit', (req, res) => {
    res.sendFile(path.join(__dirname, './public/visit.html'));
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, './public/upload.html'));
});

app.get('/users', async (req, res) => {
    res.sendFile(path.join(__dirname, './users.json'));
});

app.use('/user', async (req, res, next) => {
    req.users = JSON.parse(
        await fs.readFile(path.join(__dirname, './users.json'))
    );
    next();
});

app.post('/user', async (req, res) => {
    // console.log(req.body);
    const {name, memo} = req.body;
    const id = Date.now();
    req.users[id] = {name,memo};
    // console.log(users);
    await fs.writeFile(
        path.join(__dirname, './users.json'),
        JSON.stringify(req.users)
    );
    res.end();
});

app.put('/user/:id', async (req, res) => {
    // console.log(req.body);
    const {name, memo} = req.body;
    req.users[req.params.id] = {name, memo};
    // console.log(users);
    await fs.writeFile(
        path.join(__dirname, './users.json'),
        JSON.stringify(req.users)
    );
    res.end();
});

app.delete('/user/:id', async (req, res) => {
    delete req.users[req.params.id];
    await fs.writeFile(
        path.join(__dirname, './users.json'),
        JSON.stringify(req.users)
    );
    res.end();
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