//1) prendi gli elementi dal DOM
let form = document.getElementById("loginForm")

//2) aggiungi e controlla eventi
form.addEventListener("submit", (event) => {

    event.preventDefault()

    // prendo il valore dell'elemento nel DOM con ID pari a username (tramite CSS)
    let username = document.querySelector("#username")
    let usernameValue = username.value
    let erroMsgElem = document.querySelector("#errorMsg")

    let isValid = true

    if (usernameValue.length < 3 || usernameValue.length > 20) {
        isValid = false
    }

    // ctrl solo numeri e lettere no caratteri speciali
    for (let char of usernameValue) {
        if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) {
            isValid = false;
            break
        }
    }

    if (!isValid) {
        //alert("Username non valido")
        username.focus()
        username.value = ""
        erroMsgElem.style.display = "block"
        //TODO
    } else {
        erroMsgElem.style.display="none"
        sessionStorage.setItem('usern', usernameValue)
        //alert("Session started!")
        document.body.innerHTML = "<h1>Welcome, " + sessionStorage.getItem("usern")+"</h1>"
    }
})