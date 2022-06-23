// conditionnelle




const age = 18


// if else
if (age >= 18 ){
    console.log("Majeur")
}

// Type of : idem que instance of (retourne le type)
// === plutôt que ==
else if(typeof(age) === "number")
{
    console.log("Vous n'êtes pas assez âgé")
}

else
{
    console.log("Erreur")
}


// Switch

const a = 40

switch(a){
    case 42:
        console.log("La varaible vaut 42")
        break
    case 43: 
        console.log("La variable vaut 43")
        break
    default:
        console.log("Default");
        break
}


switch(true){
    case a>=42:
        console.log("La variable vaut 42")
        break
    case a < 42:
        console.log(`La variable vaut ${a}`)
        break
    default:
        console.log("Default")
        break
}


// "Faux" booléen
const b = 0
const c = ""

if(b){
    console.log("Je passe dans le if")
}
if(c){
    console.log("Je passe dnas le if")
}


let i = 0;
while (i < 10){
    console.log(i)
    i++;
}

console.log(i)
for (let j = 0 ; j < 10 ; j++){
    console.log(j)
}

// console.log(j) Lance une erreur

const tab = ["Salameche", "Bulbizarre","Carapuce"]

for(const pokemon of tab){
    console.log(pokemon)
}

for (const indice in tab){
    console.log(indice)
}

// objet salameche récupéré
const salameche = {
    name : "Salameche",
    type : "Feu",
    level: 12

}

console.log(salameche)

salameche.type = "Eau"

console.log(salameche["type"]) // = console.log(salameche.type)

for(const at in salameche){
    console.log(at)
}
for(const at in salameche){
    console.log(salameche[at])
}
