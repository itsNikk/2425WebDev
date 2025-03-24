// document.getELementBy*
// document.querySelector(CSS)

//1) seleziona gli elementi del DOM
let inputELem = document.getElementById("faces")
let btnElem = document.querySelector("#launchBtn")

//2) Eventi
inputELem.addEventListener("change", () => {
    let val = inputELem.value
    if (val < 1 || val > 12) {
        inputELem.values = ""
        inputELem.focus()
        document.getElementById("res").textContent = "Il numero inserito deve essere >3 e <12"
    }
    console.log(val);
})

btnElem.addEventListener("click", () => {
    if (isNaN(inputELem.value) || inputELem.value === "") return;

    let extractedVal = (Math.random() * inputELem.value) + 1
    document.getElementById("res").textContent =
        "Il valore estratto è:" + Math.floor(extractedVal)
});