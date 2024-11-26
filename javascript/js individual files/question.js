let d = 10
let a = 'nikk i'
let n = a.length
let res = ''
j = 0
for (let i = 0;i < d;i++){
    if (j>=n){
        j = 0
    }
    res += a[j]
    j+=1
}

console.log(res)
