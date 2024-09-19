const promise1 = new Promise((resolve,reject)=>{
    reject("resolved in promise 1")
})


const promise2 = new Promise((resolve,reject)=>{
    reject("resolved in promise 2")
})

const promise3 = new Promise((resolve,reject)=>{
    resolve("resolved in promise 3")
})


promise1.then((msg)=>console.log(`caught in then ${msg}`)).catch((msg)=>console.log(`caught in catch ${msg}`))

Promise.all([promise1,promise2,promise3]).then((msg)=>console.log(msg)).catch((msg)=>console.log(`caught in catch ${msg}`))