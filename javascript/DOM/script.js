let h2 = document.querySelector("h2")
h2.innerText = h2.innerText += " from nikhil Sharma"

console.log(h2)

let divs = document.querySelectorAll(".box")
console.log(divs)

for(let i = 0; i <= divs.length ; i++){
    divs[i].innerText = "this is the " + i + " div"
}