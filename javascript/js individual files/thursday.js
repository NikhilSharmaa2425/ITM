// map
let arr = [1,2,3,4,5,6,7,8,9]

let new_arr = arr.map((item,index)=>{
    return item+1
})

console.log(new_arr)

console.log(arr)

//for each
arr.forEach((item,index)=>{
    console.log(item+1)
})

//filter

let filter_arr = arr.filter((item,index)=>{
    return item != 0
})


//reduce 

let summ = arr.reduce((accumulator,index)=>{
    accumulator += item
    return accumulator
})


//sort 
arr.sort()
console.log(arr)

//reverse

arr.reverse()
console.log(arr)

//for in 
// for (let )