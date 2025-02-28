const calcolaBtn = document.getElementById("calcola")
let par = document.getElementById("res")
let fval = document.querySelector("#factVal")

//Promisificazione
function computeFactorial(n) {
    return new Promise((resolve, reject) => {
        //Produttore
        if (n < 0 || isNaN(n)) reject(new Error("Il numero deve essere > 0"))

        let fattoriale = 1
        for (let i = 2; i <= n; i++) {
            fattoriale *= i
        }
        resolve(fattoriale)

    })
}

calcolaBtn.addEventListener("click", () => {

    for (i = -10; i < 250; i++) {
        computeFactorial(parseInt(i)).then(r => {
            par.innerHTML += i + "! : " + r + "<br>"
        }).catch(err => par.innerHTML += "Errore: " + err.message + "<br>")
    }

    /* const n = parseInt(fval.value)
    //Consumatore(i)
    computeFactorial(n).then(r => {
        par.innerHTML += n + "! : " + r + "<br>"
    }).catch(err => par.innerHTML += "Errore: " + err.message+"<br>")
*/

})