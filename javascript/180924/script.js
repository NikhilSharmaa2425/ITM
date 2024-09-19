var container = document.getElementById("container")
var text = document.getElementById("text")
var button = document.getElementById("button")
function randomnumber(){
    let random = Math.floor(Math.random()*100)
    text.innerText = random
}

container.addEventListener("mousemove",randomnumber);

function removefunction(){
    container.removeEventListener("mousemove",randomnumber)
}
