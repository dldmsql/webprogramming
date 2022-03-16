// chaining
const fecthData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Carrot'),1000);
});
fecthData
.then(data => data +' Cheese')
.then(data => console.log(data+' Cake'))
.then(data => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => resolve(data+'!'),1000);
    });
})
.then(data => console.log(data))
.catch(error => {
    console.log(error);
});

// pomise
function loginUser(id, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('사용자 정보 얻음');
            resolve({userId: id});
        },3000);
    })
}

function getUserVideos(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['video1', 'video2','video3']);
        },2000);
    })
}

function videoDetails(video){
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('비디오 제목은 ....');
    },2000);
   })
}

loginUser('eunbi', 123456)
.then((user)=> {
    console.log(`${user.userId}님 환영합니다.`);
    return getUserVideos(user.userId);
})
.then((videos)=>{
    console.log(videos);
    return videoDetails(videos[0]);
})
.then((details) =>  console.log(details));

// async - await
function loginUser(id, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('사용자 정보 얻음');
            resolve({userId: id});
        },3000);
    })
}

function getUserVideos(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['video1', 'video2','video3']);
        },2000);
    })
}

function videoDetails(video){
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('비디오 제목은 ....');
    },2000);
   })
}

const loginGetVideos = async (id, password) => {
    let user = await loginUser(id, password);
    console.log(`${user.userId}님 환영합니다.`);
    let videos = await getUserVideos(user.id);
    console.log(videos);
    let details = await videoDetails(videos[0]);
    console.log(details);
};

loginGetVideos('eunbi', 123456);