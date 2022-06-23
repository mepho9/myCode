const card1 = document.getElementById("oneOne")
const card2 = document.getElementById("oneTwo")
const card3 = document.getElementById("twoOne")
const card4 = document.getElementById("twoTwo")

const cardList = [card1,card2,card3,card4]
let numPickedCard = 0;
let firstPickedCard = "red";
let colorList= ["red","red","blue","blue"]
let pickedCard =[false,false,false,false]
let clickedCard = [0,0]
let foundList=[false,false,false,false]

const shuffleArray = colorList => {
    for(let i = colorList.length-1;i> 0;i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = colorList[i];
        colorList[i] = colorList[j];
        colorList[j] =temp;
    }
}

shuffleArray(colorList)

let playing = true;

card1.addEventListener("click", (event)=>{
    if(numPickedCard<2 && pickedCard[0]==false ){
        card1.classList.add(colorList[0])
        numPickedCard += 1;
        pickedCard[0]=true;
        if(numPickedCard===2){
            if(alreadyPickedCard()===true){
                console.log("yes")
                if(checkSameColor()===true){
                    //!!!!!!!!!!!!!!!!!!!!
                    console.log("yessss")
                    sameCardConfirmed()


                }
                else{
                    console.log("No 2")

                    setTimeout(hiddeBackCard,1000)

                }
                
            }
            else{
                console.log("No")
                setTimeout(hiddeBackCard,1000)
            }
        }
        console.log(clickedCard)
        clickedCard = [0,0]
        console.log(pickedCard)

    }


})


card2.addEventListener("click", (event)=>{
    if (numPickedCard<2 && pickedCard[1]==false ){
        card2.classList.add(colorList[1])
        numPickedCard += 1;
        pickedCard[1]=true;

        if(numPickedCard===2){
            if(alreadyPickedCard()===true){
                console.log("yes")
                if(checkSameColor()===true){
                    //!!!!!!!!!!!!!!!!!!!!
                    console.log("yessss")
                    sameCardConfirmed()


                }
                else{
                    console.log("No 2")

                    setTimeout(hiddeBackCard,1000)

                }
                
            }
            else{
                console.log("No")
                setTimeout(hiddeBackCard,1000)
            }
        }
        console.log(clickedCard)
        clickedCard = [0,0]
        console.log(pickedCard)

}
})

card3.addEventListener("click", (event)=>{
    
    if(numPickedCard<2 && pickedCard[2]==false ){
        card3.classList.add(colorList[2])
        numPickedCard += 1;
        pickedCard[2]=true;
        if(numPickedCard===2){
            if(alreadyPickedCard()===true){
                console.log("yes")
                if(checkSameColor()===true){
                    //!!!!!!!!!!!!!!!!!!!!
                    console.log("yessss")
                    sameCardConfirmed()


                }
                else{
                    console.log("No 2")

                    setTimeout(hiddeBackCard,1000)

                }
                
            }
            else{
                console.log("No")
                setTimeout(hiddeBackCard,1000)
            }
        }
        console.log(clickedCard)
        clickedCard = [0,0]
        console.log(pickedCard)

    }

})

card4.addEventListener("click", (event)=>{
    
    if(numPickedCard<2 && pickedCard[3]==false ){
        card4.classList.add(colorList[3])
        numPickedCard += 1;
        pickedCard[3]=true;
        if(numPickedCard===2){
            
            if(alreadyPickedCard()===true){
                console.log("yes")
                if(checkSameColor()===true){
                    //!!!!!!!!!!!!!!!!!!!!
                    console.log("yessss")
                    sameCardConfirmed()


                }
                else{
                    console.log("No 2")

                    setTimeout(hiddeBackCard,1000)

                }
                
            }
            else{
                console.log("No")
                setTimeout(hiddeBackCard,1000)
            }

        }
        console.log(clickedCard)  /////// PROBLEME CLICKEDCARD = 0,0
        clickedCard = [0,0]
        console.log(pickedCard)
    }


})


function alreadyPickedCard(){
    let index = 0;
    console.log(index)
    
    for (let i = 0 ; i < colorList.length;i++){
        if (pickedCard[i]===true){
            clickedCard[index]=i
            index++;
            console.log(i)
        }
        
    }
    console.log(clickedCard)
    if(index===2){
        return true
    }
    else{
        return false;
    }
}

function checkSameColor(){
    res = false;
    console.log(pickedCard[clickedCard[0]])
    if(cardList[clickedCard[0]].getAttribute("class")===cardList[clickedCard[1]].getAttribute("class")){
        res = true;
    }
    return res;
}

function sameCardConfirmed(){
    for (let i = 0 ; i < clickedCard.length;i++){
        cardList[clickedCard[i]].setAttribute("class","")
        cardList[clickedCard[i]].classList.add("won")
        console.log("done")
    }
    numPickedCard=0
}

function hiddeBackCard(){
    let incr = 0;
    for(let elem of cardList){
        console.log(elem.getAttribute("class"))
        if(elem.getAttribute("class")==="won"){
            foundList[incr]=true
        }
        else if(foundList[incr]===false){
            elem.setAttribute("class", "")
            elem.classList.add("hidden")
            pickedCard[incr]=false;
        }

        incr++;
    }
    pickedCard =[false,false,false,false]

    numPickedCard=0;
}


