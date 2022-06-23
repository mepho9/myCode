const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("button")
const h2HTML = document.querySelector("h2")


// Méthode 1
function multiplierPar2(x){
    return x*2
}
// Méthode 2
const multiplierPar3 = function(x){
    return x*3;
}
// Méthode 3
const multiplierPar4 = (x) => {
    return x*4
}
// Méthode 4
const multiplierPar5 = x => x*5

console.log(multiplierPar2(5))
console.log(multiplierPar3(5))
console.log(multiplierPar4(5))
console.log(multiplierPar5(5))

// Paramètre RESTE
// ...noms = list de tous les paramètres introduit
function afficherNom(messageDebut,...noms){
    console.log(messageDebut)
    console.log("--------------------------")
    for (const nom of noms){        case "-":
            resultat.innerText = parseInt(temp) - parseInt(event.target.value)
            break;
        console.log(nom)
    }
}

afficherNom("Salameche","Bulbizarre","Carapuce",45)

// Fonction de fonction 
function faireCalcul(x,cb){
    console.log("-----------------")
    if (typeof(cb) === "function"){
        const resultat = cb(x)
        console.log("Le résultat est de " + resultat)
    }
    console.log("-------------------")
}

faireCalcul(6,multiplierPar5)

faireCalcul(10,(x) => {
    return x*x
})


