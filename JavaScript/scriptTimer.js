const a = setTimeout(() => {
    console.log("Bonjour")
},0)

console.log("Au revoir")

clearTimeout(a)


const b = setInterval(() => {
    console.log("Mon interval")
},2000)

clearInterval(b)


