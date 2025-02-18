const startElem = document.getElementById("startSim")
const resElem = document.getElementById("result")

function fetchData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            Math.random() > 0.5 ? resolve("Dati OK") : reject(new Error("Problemi a fetchare..."))
        }
            , 2000)


    })


}


startElem.addEventListener("click", () => {

    resElem.textContent = "Fetichin' data..."
    fetchData()
        .then(data => resElem.textContent = data)
        .catch(data => console.log("Errore fetchando... " + data.message))

})