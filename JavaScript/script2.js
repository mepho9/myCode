const numPersonne = parseInt(prompt("Nombre de participant"))
const tabPersonne = []

for (let i = 0 ; i < numPersonne;i++){
    tabPersonne.push(prompt(`Prénom numéro ${i+1}`))
}

let randNumber = (Math.floor(Math.random()*tabPersonne.length))

const conteneurHTML = document.getElementsByClassName("tambola")
const displayerHTML= document.createElement("p")
displayerHTML.innerText= `Participant : \n ${tabPersonne} \n \n Gagnant : ${tabPersonne[randNumber]} !!!`
conteneurHTML[0].appendChild(displayerHTML)


