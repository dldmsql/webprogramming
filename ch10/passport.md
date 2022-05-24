# Passport

서버에 등록된 사용자를 식별/ 사용자별 이용 권한 설정을 위해 사용한ㄷ.ㅏ

## passport란?
내부적으로 쿠키와 세션을 사용해서 node.js에서 인증을 쉽게 적용할 수 있는 미들웨어이다.
strategy을 사용해서 사용자를 인증한다. 
### strategy
- 어떤 것을 이용해, 어떻게 인증을 구현할 것인가에 대한 전략이다.
- passport-local, passport-kakao, passport-google-oauth 등이 있다.

## passport 사용 방법
모듈 로딩과 초기화 및 세션 사용 설정

``` bash
const passport = require('passport');
....
app.use(passport.initializse());
app.use(passport.session());
```
앱이 passport를 사용하도록 초기화하고,
passport가 앱애서 설정한 express session을 사용하도록 설정한다.
세션을 사용하므로 express-session 미들웨어 다음에 위치시켜야 함에 주의하자.

strategy 설정
``` bash
const LocalStrategy = require('passport-local').strategy;
....
passport.use(
    new LocalStrategy((username, password, done) => {....});
)
```
username, password가 서버에 저장된 정보와 일치하는지 확인 후 로그인 승인

사용자 인증
``` bash
app.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
);
```
지정 strategy를 사용해서 로그인에 성공 혹은 실패할 경우 이동할 경로와 메세지를 설정한다.

세션 기록과 읽기
``` bash
passport.serializeUser((user, done) => {});
passport.desrializeUser((id, done) => {});
```
passport.authenticate에서 로그인 성공 시 실행할 콜백함수 등록
로그인 시, serializeUser에 등록된 콜백함수 실행 -> 서버
세션(req.session)에 사용자의 식별자를 저장

서버로 클라이언트 요청이 있을 때마다 호출되는 콜백함수 등록
로그인 성공 후 서버에 요청할 때마다 deserializeUser에 등록된 콜백함수 실행 -> req.session의 사용자 식별자를 이용해 실제 세션의 사용자 정보를 읽어 req.user에 저장

-----------------------------------------------------
여기부터 실습 파트