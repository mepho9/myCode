
const nameProduit = ["Pomme", "Poire", "Cerise"]
const tabPrix = [3,2,1]
const tab = []
const tabQuantity = []
const conteneurQueryHTML = document.getElementsByClassName("produit")
let totalCal=0;
const conteneurRistourneHTML = document.querySelector("#ristourne")
const newRistourneHTML = document.createElement("p")
let checkRistourne = true;


for (let i = 0 ; i<nameProduit.length;i++) {
    const productDiv = document.createElement("div")
    productDiv.setAttribute("id", nameProduit[i])
    tab.push(productDiv)
    conteneurQueryHTML[0].appendChild(productDiv)
}
for (let i = 0 ; i < nameProduit.length ; i++){
    tabQuantity.push(parseInt(prompt(`Nombre de ${nameProduit[i]} désiré / (${tabPrix[i]}$)`)))
}
for (let i = 0 ; i < nameProduit.length ; i++){
    const conteneurHTML= tab[i]
    const newPHTML=document.createElement("p")
    newPHTML.innerText = `${nameProduit[i]} acheté : ${tabQuantity[i]} / Prix : ${tabQuantity[i]*tabPrix[i]} Dollar`
    conteneurHTML.appendChild(newPHTML)
}
for (let i = 0 ; i < tabQuantity.length;i++){
    totalCal+=tabQuantity[i]*tabPrix[i]
}
for (let i = 0 ; i < tabQuantity.length;i++){
    if(tabQuantity[i]=== 0){
        checkRistourne=false;
    }
}
if(checkRistourne){
    newRistourneHTML.innerText = `Vous avez dépensé ${totalCal*0.90} euro avec une ristourne ${totalCal*0.10} euro`
    conteneurRistourneHTML.appendChild(newRistourneHTML)
}
else{
    newRistourneHTML.innerText = `Vous n'avez aucune ristourne`
    conteneurRistourneHTML.appendChild(newRistourneHTML)
}
