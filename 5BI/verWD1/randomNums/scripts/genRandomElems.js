let mainHeader = document.getElementById("mainHeader")
let showNumElem = document.getElementById("showNum")

let item = sessionStorage.getItem("N");
mainHeader.textContent = item

setTimeout(() => {
    showNumElem.textContent = ""

    for (let i = 0; i < item; i++) {
        let newP = document.createElement("p")
        newP.textContent = "Paragrafo " + (i + 1)
        newP.id = "id" + (i + 1)

        showNumElem.appendChild(newP)
    }


}, 1000)

