// callback hell

function loginUser(id, password, callback) {
    setTimeout( () => {
        console.log('로그인 유저 함수 내부이다.');
        callback({userId: id});
    },3000);
}

function getUserInfo(id, callback) {
    setTimeout( ()=> {
        callback( ['zzangu', 5, 'male']);
    },2000);
}

function getDetails(info, callback){
    setTimeout( () => {
        callback('짱구는 못말려 주인공입니다.');
    },2000);
}

loginUser('짱구', 0423, (user) => {
    console.log(`${user.userId}님 환영해요.`);
    getUserInfo(user.userId, (infos)=> {
        console.log(infos);
        getDetails(infos[0], (info) => {
            console.log(info);
        });
    });
});
/*
로그인 유저 함수 내부이다.
짱구님 환영해요.
[ 'zzangu', 5, 'male' ]
짱구는 못말려 주인공입니다.
*/