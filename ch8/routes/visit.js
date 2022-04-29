const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router  = express.Router();

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/visit.html'));
});

router.get('/users', async (req, res) => {
    res.json(users);
});

router.post('/user', (req, res) => {
    console.log(req.body);
    const {name, memo} = req.body;
    const id = Date.now();
    users[id] = {name,memo};
    console.log(users);
    res.end();
});

router.put('/user/:id', (req, res) => {
    console.log(req.body);
    const {name, memo} = req.body;
    users[req.params.id] = {name, memo};
    console.log(users);
    res.end();
});

router.delete('/user/:id', (req, res) => {
    delete users[req.params.id];
    res.end();
});app.get('/users', async (req, res) => {
    res.json(users);
    console.log(users);
});

router.route('/user/:id')
.put( async (req, res) => {
    console.log(req.body);
    const {name, memo} = req.body;
    users[req.params.id] = {name, memo};
    console.log(users);
    res.end();
})
.delete( (req, res) => {
    delete users[req.params.id];
    res.end();
});

module.exports = router;