n = 5;
for (let i = n-1;i>=0;i--){
    let row = '';
    for (let j = 1;j<=i;j++){
        row += '  ';
    }
    let stars =''
    for (let x = 1; x <= n-i ; x++){
        stars += '* ';
    }
    console.log(row+stars);
}