let fruits = ["orange", "maango"];

for (let i = 0; i < fruits.length; i++) {
  let newString = "";
  for (let j = 0; j < fruits[i].length; j++) {
    if (fruits[i][j] === 'a') {
      newString += 'f';
    } else {
      newString += fruits[i][j]; 
    }
  }
  fruits[i] = newString;
}

console.log(fruits);
