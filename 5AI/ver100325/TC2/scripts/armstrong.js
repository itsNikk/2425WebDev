let maxArmstrong = document.getElementById("n")
const genBtn = document.getElementById("genArm")
let resElem = document.getElementById("res")

function isArmstrong(num) {
    let sum = 0;
    // Si poteva approcciare il problema anche in maniera matematica (%10 e /10) ma sarebbe stato più lungo
    //Cambiando tipo è più veloce e ottengo lo stesso risultato! :)
    let digits = num.toString().split("");
    let nLength = digits.length
    for (let i = 0; i < nLength; i++) {
        sum += Math.pow(parseInt(digits[i]), nLength)
    }

    return sum === num
}

genBtn.addEventListener("click", () => {
    for (let i = 0; i < maxArmstrong.value; i++) {
        if (isArmstrong(i)) {
            resElem.textContent += i + ", "
        }
    }
})