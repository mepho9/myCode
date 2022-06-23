
const timerHTML = document.querySelector("span")


// const b = setInterval(() => {
//     const d = new Date()
//     timerHTML.innerText = d.toLocaleTimeString();

// },600)

function getDate(){
    const d = new Date()
    timerHTML.innerText = d.toLocaleTimeString();
    setTimeout(getDate,200);
}

getDate()
