const promise = new Promise((resolve, reject) => {
    console.log('파일 읽기 시작...');
    setTimeout( () => {
        let read = true;
        if(read) resolve('파일 읽기 성공');
        else reject(new Error('파일 읽기 실패'));
    }, 2000);
});

// then, catch, finally
promise
.then((value) => console.log(value))
.catch((error) => console.log(error))
.finally(() => {
    console.log('finally');
});

// chaining
const fecthData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Carrot'),1000);
});
fecthData
.then(data => data +' Cheese')
.then(data => data+' Cake')
.then(data => {
   
        setTimeout(() => data+'!',1000);
        // setTimeout( () => reject(new Error(`error! ${data}`)),1000);
   
})
.then(data => console.log(data))
.catch(error => {
    console.log(error);
});