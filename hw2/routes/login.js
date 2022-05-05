const express = require('express');
const path = require('path');

const router  = express.Router();

router.get('/', (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    if(req.session.user)
        res.send(
            `<h2>views: ${req.session.user}</h2><h2>expires in: ${
                req.session.cookie.maxAge / 1000
            }s</h2>`
        );
    
    else res.redirect('/login');
});

router.get('/login', (req, res)=> {
    res.render('login', {title: 'Login'});
});

router.post('/admit',(req,res)=>{
    const {name, password} = req.body;

    if(name== 'guest' && password =='7777'){
        req.session.user = (req.session.user || 0) +1;
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

router.get('/logout', (req,res)=> {
    if(req.session.user){
        console.log('로그아웃 중...');
        req.session.destroy((err)=> {
            if(err)
            return;
            else res.redirect('/login');ㄴ
        });
    } else {
        console.log('로그인을 하지 않은 상태');
        res.redirect('/lgoin');
    }
});

module.exports = router;