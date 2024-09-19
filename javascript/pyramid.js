n = 5;
for (let i = 1;i <= n; i++){
    // let spaces = n-i;
    let row = '';
    for (let j = 1; j <= n-i; j++){
        row += '  ';
    }
    let stars = (i * 2)-1;
    for (let j = 1; j <= stars; j++){
        row += '* '
    }  
    console.log(row);
   
}  