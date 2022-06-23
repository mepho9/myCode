// Pour afficher dans la console

console.log("Bonjour le monde")

const myConstantVariable = 5

let myVariable = 5;   // le let était var myVariable avant mais mtn que let

var myOldVariable = 5;


let a = 4.12
let b = 12

// const input = parseInt(prompt("Entrez une valeur")) // input 

// console.log(input)

// const confirm = window.confirm("OK") // pop window confirmation boolean


// alert("Attention") // pop up window simple

// const salameche = "Salameche" // declaration string

// const sacha = `Sacha a capturé un ${salameche}`

// console.log(sacha)

// Type booléen

const majeur = true;
const mineur = false;


const a1 = undefined;
const a2 = null;
const a3 = NaN;

// Opérateur

const x = a + b * 5;

//  b ** 5 = exposant

console.log(x);

// Tableau

const tab = ["Salameche","Bulbizarre","Carapuce"];

console.log(tab[0])
tab[2] = "Kaiminus"

console.log(tab.length);
tab.push("Hericendre")

console.log(tab)


// Fonction des tableaux


tab.pop()
console.log(tab)

tab.slice(1,2) // renvoi l'endroit ciblé du tableau

console.log(tab.splice(1,2,"Vilépierre")) //  return et supprime un certian nombre d'élément à partir d'un indice

console.log(tab)

// ajoute un tableau au tableau

const tabConcat = tab.concat(["Ronflex", "Mewtwo"]);

console.log(tabConcat)

// attention : ajoute un tableau à la dernièer position (devient multi-dimensionnel)

tabConcat.push(["Ortide","Mystherbe"])

console.log(tabConcat)


// Reverse un tableau

tab.reverse()

console.log(tab)

// Ordonner par ordre alphabétique
tab.sort()

const tabNombre =[5,1,2,8,4]

tabNombre.sort((a,b) => a-b)

console.log(tabNombre)

