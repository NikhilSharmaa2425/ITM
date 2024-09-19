let arr = [2, 4, 5, 8, 10, 13, 19, 30];

let start = 0;
let end = arr.length - 1;
let target = 13;
let res = -1;

while (start <= end) {
    let mid = Math.floor((start + end) / 2); 

    if (arr[mid] == target) {
        res = mid;
        break;
    } 
    else if (arr[mid] < target) {
        start = mid + 1;  
    } 
    else {
        end = mid - 1; 
    }
}

console.log(res);
