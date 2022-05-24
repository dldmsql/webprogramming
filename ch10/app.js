// import modules
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');

// import routers
const authRouter = require('./auth');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

// 공통 middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        resave: false,
        saveUninitialized : false,
        secret : process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure : false,
        },
    })
);

// passort middleware 
app.use(passport.initialize());
app.use(passport.session());

// 요청 경로에 따라 라우터 실행
app.use('/', authRouter);