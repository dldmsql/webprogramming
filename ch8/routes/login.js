const express = require('express');
const path = require('path');

const router  = express.Router();

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/login', (req, res)=> {
    res.sendFile(paht.join(__dirname), '../public/login.html');
});

module.exports = router;