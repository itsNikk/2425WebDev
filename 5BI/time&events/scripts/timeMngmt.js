let minElem = document.getElementById("minuti")
let secElem = document.querySelector("#secondi")
let resetBtnElem = document.getElementById("resetBtn")

let minCount = 0
let secCount = 0

resetBtnElem.addEventListener('click', () =>{
    minCount=secCount=0
    minElem.textContent = secElem.textContent = 0
    clearInterval(secInterval)
})


// set interval esegue ogni X millsecondi una funzione
setInterval(
    () => {
        minElem.textContent = minCount++
    }
    , 1000
)

let secInterval = setInterval(() => {
    secElem.textContent = secCount++
}, 1500);

// dopo X millisecondi esegui la funzione e bASTA.
setTimeout(() => {alert("Hello")},5000)