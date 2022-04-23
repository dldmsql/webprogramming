const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use( morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const users = {};

app.get('/', (req,res)=> {
    res.redirect('/login');
});

app.get('/login', (req,res)=> {
    res.sendFile(path.join(__dirname, './public/login.html'));
});

app.get('/visit', (req,res)=> {
    res.sendFile(path.join(__dirname, './public/visit.html'));
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, './public/upload.html'));
});

app.get('/users', async (req, res)=> {
    res.json(users);
    console.log(users);
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const {name, memo} = req.body;
    const id = Date.now();
    users[id] = {name, memo};
    console.log(users);
    res.end();
});

app.put('/user/:id', (req,res) => {
    console.log(req.body);
    const {name, memo} = req.body;
    users[req.params.id] = {name, memo};
    console.log(users);
    res.end();
});

app.delete('/user/:id', (req,res)=> {
    delete users[req.params.id];
    res.end();
});

app.use((req, res, next)=> {
    res.status(404).send('NOT FOUND');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('SERVER INTERNAL ERROR');
});

app.listen(app.get('port'), ()=> {
    console.log('NOW SERVER LOADING ..... ');
});