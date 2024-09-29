div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id");
// console.log(id)

// let name = div.getAttribute("name");
// console.log(name);


// let para = document.querySelector("p")
// console.log(para.setAttribute("class","new-para"))

// para.setAttribute("class","changed2ndTime-class")


// div.style.backgroundColor = "red";
// div.style.fontSize = "30px"; 

// div.innerText = "hello";

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);
div.after(newBtn);

let p = document.querySelector("p");
p.remove()