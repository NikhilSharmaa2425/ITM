function sumNN(n){
    if (n<=1){
        return n;
    }
    return n + sumNN(n-1)
}

let n = 56;
console.log(sumNN(n));

let a = 10;
while (true) {
    console.log(a)
    a += 1
