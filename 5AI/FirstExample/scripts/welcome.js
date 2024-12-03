alert("Benvenuto")

let username=prompt("Dimmi il tuo nome")
if (username !== "") {
    document.getElementById("username").textContent = "Ciao, "+username
    //document.getElementsByClassName
    let newPar=document.createElement("p")
    document.body.appendChild(newPar)
    newPar.textContent = "Sei il mio utente"
} else {
    document.getElementById("username").textContent ="Sei uno sconosciuto :("
}

for (let i=0; i<5; i++) {
    alert(i)
    //document.getElementById("counter").textContent = i+" "
}