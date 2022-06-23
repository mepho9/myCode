const input1HTML = document.getElementById("elem1")
const input2HTML = document.getElementById("elem2")

const operator = document.getElementById("operator")

const resultat = document.getElementById("resultat")

let elemOne = 0;
let elemTwo = 0;
let selectedOperator = "+";


const tabValid = [false,false,false]

input1HTML.addEventListener("input", (event) => {
    elemOne= event.target.value
    tabValid[0] = true
    calculateIt();
})


operator.addEventListener("input", (event) => {
    selectedOperator= event.target.value
    tabValid[1] = true
    calculateIt();

})
input2HTML.addEventListener("input", (event) => {

    elemTwo= event.target.value
    tabValid[2] = true
    calculateIt();


})


function calculateIt(){
    let calcIt = true

    for (let i = 0 ; i < 3 ; i++){
        if(tabValid[i]==false){
            calcIt=false;
        }
    }
 
    if (calcIt){
        switch(selectedOperator){
            case "+":
                resultat.value = parseInt(elemOne) + parseInt(elemTwo)
                break;
            case "-":
                resultat.value = parseInt(elemOne) - parseInt(elemTwo)
                break;
            case "*":
                resultat.value = parseInt(elemOne) * parseInt(elemTwo)
                break;   
            case "/":
                resultat.value = parseInt(elemOne) / parseInt(elemTwo)
                break;
        
        }
    
    }
}

