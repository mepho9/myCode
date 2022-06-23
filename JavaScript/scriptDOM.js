const h1HTMLbyId= document.getElementById("title")

h1HTMLbyId.innerText = "Mon nouveau titre"
h1HTMLbyId.innerHTML= "<p> Mon très nouveau titre </p>"


console.log(h1HTMLbyId)


// récupère des élements via leur classe
const h1HTMLbyClass = document.getElementsByClassName("title")
h1HTMLbyClass[0].innerText = "Mon titre récup par la classe"

console.log(h1HTMLbyClass)

// récupère des éléments via des tag
const h1HTMLbyTag = document.getElementsByTagName("h1")
h1HTMLbyTag[0].innerText = "Mon titre récupéré par Tag"

console.log(h1HTMLbyTag)


// Récupère le premier élément html qui correspond au selecteur css
const h1RecupByQuerySelector= document.querySelector("body > h1")

// Récupère tous les éléments html qui correspondent au selecteur css

const allH1 = document.querySelectorAll("body > h1")

console.log(h1RecupByQuerySelector)
console.log(allH1)


//Manipulation des classes
h1HTMLbyId.classList.add("red")
//h1HTMLbyId.classList.remove("red")

//Manipulation attribut HTML

console.log(h1HTMLbyId.getAttribute("class"))

h1HTMLbyId.setAttribute("class","title")

console.log(h1HTMLbyId.getAttribute("class"))

// Création d'élément 

const conteneurHTML = document.querySelector(".mon-contenu")

const newPHTML = document.createElement("p")

newPHTML.innerText="Mon contenu"

conteneurHTML.appendChild(newPHTML)

// Récupération d'un enfant

console.log(conteneurHTML.children)

console.log(document.querySelector("body").children)