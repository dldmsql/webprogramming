const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs').promises;

const app = express();
app.set('port', process.env.PORT || 3000);

app.use( morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

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
    res.sendFile(__dirname, './user.json');
});
app.use('/user', async(req,res, next)=> {
    req.users = JSON.parse(
        await fs.readFile(path.join(__dirname, './user.json'))
    );
    next();
});



app.post('/user', async (req, res) => {
    console.log(req.body);
    const {name, memo} = req.body;
    const id = Date.now();
    req.users[id] = {name, memo};
    await fs.writeFile(path.join(__dirname, './user.json'), 
    JSON.stringify(req.users));
    res.end();
});

app.put('/user/:id', async (req,res) => {
    console.log(req.body);
    const {name, memo} = req.body;
    req.users[req.params.id] = {name, memo};
    await fs.writeFile(path.join(__dirname,'./user.json' ), JSON.stringify(req.users));
    res.end();
});

app.delete('/user/:id', async (req,res)=> {
    delete req.users[req.params.id];
    await fs.writeFile( path.join(__dirname, './user.json'), JSON.stringify(req.users));
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