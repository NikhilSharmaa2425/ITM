
const userInput = prompt("Please enter your numbner:");
 if(userInput > 100){
    console.log("enter value in range from 0-100")
 }

 else if(userInput >= 90 && userInput <= 100){
    console.log("A")
 }else if(userInput >= 70 && userInput < 90){
    console.log("B")
 }
 else if(userInput >= 50 && userInput < 70){
    console.log("C")
}
 else if(userInput >= 0 && userInput < 50){
    console.log("D")
}
else{
    console.log("Fail")
}