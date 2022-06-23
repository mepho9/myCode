const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("button")
const h2HTML = document.querySelector("h2")


// Evenement prend le type d'evenement en paramètre ainsi
// que la fonction appelé au moment du clique
buttonHTML.addEventListener("click", () => {

    const valeurInput = inputHTML.value
    h2HTML.innerText = valeurInput
    console.log(valeurInput)
})

inputHTML.addEventListener("input", (event) => {

    console.log(event.target.value)
    h2HTML.innerText = event.target.value

})


inputHTML.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        console.log("Bonjour")
    }
})

submitHTML.addEventListener("keyup" , (e) => {
    e.preventDefaut()
})