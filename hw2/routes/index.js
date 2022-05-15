/*
    모듈 정의
*/
const express = require('express');
const path = require('path');

const router = express.Router();

/*
    GET 정의
*/
router.get('/', (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    if(req.session.views)
        res.render('index', {title: '로그인'});
    
    else res.redirect('/login');
});

router.get('/login', (req, res)=> {
    res.render('index', {title: '로그인'});
});

/*
    POST 정의
*/
router.post('/admit',(req,res)=>{
    const {login, password} = req.body;
    // console.log(req.query);
    // console.log(req.body);
    if(login== 'guest' && password =='7777'){
        req.session.views = (req.session.views || 0) +1;
        res.redirect('/write');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;