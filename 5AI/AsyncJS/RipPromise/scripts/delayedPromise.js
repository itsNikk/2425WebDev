/*
    1) quando clicco su bottone lancio promessa
    2) La promessa, dopo 2 secondi, 
    con una probabilità del 50% viene rigettata/soddisfatta
    3) Dopo la terminazione dela promessa si stampa 
    il relativo valore sul dom.
*/

//alternativa document.querySelector("#start")
let btn = document.getElementById("start")
let p = document.querySelector("#res")

btn.addEventListener("click", () => {
    p.textContent = "Fetching data..."
    //2) lanciare promessa (2)
    fetchData().then((x) => {
        p.textContent = x.status + ":" + x.body
    }).catch((error) => {
        p.textContent = error.status + ":" + error.body
    })

    console.log("Sto lavorando");
    console.log("Sto lavorando");
    console.log("Sto lavorando");
    console.error("Errore in console");
    console.log("Sto lavorando");
})

//Promisificazione
/*
if(Math.random() > 0.5)
then
    resolve
else
    reject

COND ? <then> : <else>
*/
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve({ status: 200, body: "Data received" })
                : reject({ status: 404, body: "Not Found" })
        }, 2000)
    })
}

/*TODO:
    1) restituite in caso di resolve un oggetto/classe JS che 
    rappresenta un utente definito da id, nome ed età
    2) In caso di reject -> il body diventa un Error.
*/