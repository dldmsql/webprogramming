// asynchronous callback

console.log('start!');

function login( id, password) {
    console.log( 'you are in login method ');
    setTimeout( ()=> {
        console.log( 'you get userinfo ');
        return {userId : id};
    },2000);
};

const user = login( 'dldmsql', 1234 );
console.log(`${user}님 안녕하세요`);

console.log('finish');

// output
/*
start!
you are in login method 
undefined님 안녕하세요
finish
you get userinfo 
*/

// 사용자 정보를 얻기도 전에 프로그램 종료

console.log(' 이 아래 코드는 콜백을 적용한 거다. ')

function loginU ( id, password, callback ){
    setTimeout( () => {
        console.log( ' 여기는 콜백이 포함된 로그인 내부이다. ');
        callback( {userId: id});
    },3000);
}

loginU = ('dldmsql', 1234, (user) => {
    console.log(`${user.userId}는 나야나!!`);
});
console.log('finish');

/*
 이 아래 코드는 콜백을 적용한 거다. 
finish
*/