function loginUser(id, password) {
    return new Promise( (res, rej)=> {
        setTimeout( ()=> {
            console.log('아직 아무도 없음.');
            res({userId: id});
        },3000);
    })
}

function getUserInfo(id) {
    return new Promise( (res, rej) => {
        setTimeout(()=> {
            res( ['zzangu', 5, 'male'] );
        },2000);
    })
}

function getDetails(info){
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res('나는 짱구는 못말려의 주인공이에요.');
        },2000);
    })
}

loginUser( '짱구', 0423)
.then( (user) => {
    console.log(`${user.userId}님 환영해요.!!!!!!`);
    return getUserInfo(user.userId);
})
.then( (infos) => {
    console.log(infos);
    return getDetails(infos[0]);
})
.then((info) => {
    console.log(info);
})
.catch((err)=> console.error(err))
.finally(()=> console.log('이제 끝!!!!!!!'));

/*
아직 아무도 없음.
짱구님 환영해요.!!!!!!
[ 'zzangu', 5, 'male' ]
나는 짱구는 못말려의 주인공이에요.
이제 끝!!!!!!!
*/