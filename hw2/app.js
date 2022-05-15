/*
    module 정의
*/
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');

/*
    라우터 정의
*/
const indexRouter = require('./routes');
const writeRouter = require('./routes/writer');
const uploadRouter = require('./routes/upload');

/*
    app set 정의
*/
const app = express();
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
    session({
        resave:false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly:true,
            secure: false,
            maxAge: 600000,
        },
        name: 'my-session-cookie',
    })
);

app.use('/', indexRouter);
app.use('/write', writeRouter);
app.use('/upload', uploadRouter);

/*
    에러 처리
*/
app.use( ( req, res, next) => {
    res.status(404).send(`${req.method} ${req.path} is NOT FOUND`);
});

app.use( (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!');
});

/*
    서버 실행
*/
app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}에서 대기중`);
});