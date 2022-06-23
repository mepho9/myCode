
const inputHTML = document.querySelector("input")

const incrHTML = document.getElementById("incr")
const decrHTML = document.getElementById("decr")

const spanHTML = document.querySelector("span")

let incrVal = 0;

inputHTML.addEventListener("input", (event) => {
    incrVal = event.target.value
})

incrHTML.addEventListener("click", () => {
    
    spanHTML.innerText= parseInt(spanHTML.innerText)+ parseInt(incrVal);
})

decrHTML.addEventListener("click", () => {
    
    spanHTML.innerText= spanHTML.innerText-incrVal;
})

