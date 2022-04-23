// const promise = new Promise( (res, rej) => {
//     console.log('프로미스 시작한다.');
//     setTimeout(() => {
//         let read = true;
//         read ? res('파일 읽는다.') : rej(new Error('파일 못 읽어.'));
//     }, 3000);
    
// }); 

// promise
// .then( value => console.log(value))
// .catch( err => console.error(err))
// .finally( () => console.log('이제 끝!'));

/*
프로미스 시작한다.
파일 읽는다.
이제 끝!
*/

// chaining
const fetchData = new Promise( (res, rej) => {
    setTimeout( ()=> res('당근'), 1000);
});
fetchData
.then( data => data + '치즈')
.then( data => data + '케익')
.then( data => {
    return new Promise( (res, rej) => {
        setTimeout(()=> res(data+'먹자!!!!!', 1000));
    })
})
.then( data => console.log(data))
.catch( err => console.error(err));