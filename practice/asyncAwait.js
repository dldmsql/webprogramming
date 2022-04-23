function loginUser(id, password) {
    return new Promise((res, rej)=> {
        setTimeout( ()=> {
            console.log('아직 아무도 없다.');
            res({userId:id});
        },3000);
    })
}

function getUserInfo(id){
    return new Promise( (res, rej) => {
        setTimeout( ()=> {
            res(['짱구', 5 , '남자']);
        },2000);
    })
}

function getDetails(info) {
    return new Promise( ( res, rej ) => {
        setTimeout( () => {
            res('나는 짱구는 못말려의 주인공이에요. ');
        });
    },2000);
}

const loginGetInfo = async (id, password) => {
    let user = await loginUser(id, password);
    console.log(`${user.userId}님 반가워요. `);
    let infos = await getUserInfo(user.userId);
    console.log(infos);
    let details = await getDetails(infos[0]);
    console.log(details);
};

loginGetInfo('짱구', 0423);