const express = require('express');
const path = require('path');

const router  = express.Router();

router.get('/', (req, res) => {
    console.log(req.signedCookies);
    if(req.signedCookies.admit) res.send('<h1>Login Success</h1>');
    else res.redirect('/login');
});

router.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.post('/admit',(req,res)=>{
    const {login, password} = req.body;
    console.log(req.query);
    console.log(req.body);
    if(login== 'guest' && password =='7777'){
        res.cookie('admit', true, {
            expires: new Date(Date.now()+ 3000),
            httpOnly:true,
            secure:false,
            path:'/',
            signed: true,
        });
        // res.clearCookie('admit',true, {
        //     httpOnly:true,
        //     path:'/',
        // });
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;