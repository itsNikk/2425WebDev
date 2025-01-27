function registraUtente(nomeUtente, mail) {
    const utente = {
        nomeUtente: nomeUtente,
        mail: mail,
        password: generaPassword(),
    };

    // Recupera gli utenti già registrati dal localStorage
    // ... || [] -> se ho qualcosa nel LS lo uso, altrimenti []
    let utentiRegistrati = JSON.parse(localStorage.getItem("utenti")) || [];
    const utenteEsistente = utentiRegistrati.find(u => u.nomeUtente === nomeUtente)
    if (utenteEsistente) {
        alert("User già presente... cambiare")
        return
    }

    utentiRegistrati.push(utente);

    // Salva gli utenti nel localStorage, stringify usato perchè stiamo usando un array di utenti
    localStorage.setItem("utenti", JSON.stringify(utentiRegistrati));

    alert("Registrazione completata! La tua password generata è: " + utente.password);
    window.location.href = "login.html"
}

function isNumber(charToCheck) {
    return charToCheck >= 0 && charToCheck <= 9;
}

function isUpperCase(charToCheck) {
    return charToCheck >= "A" && charToCheck <= "Z";
}

function generaPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    let numCount = 0;
    let upperCharCount = 0;

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        let extractedChar = chars[randomIndex];

        if (isNumber(extractedChar)) numCount++;
        if (isUpperCase(extractedChar)) upperCharCount++;

        password += extractedChar;
    }

    //Se la password non rispetta i criteri di validazione la rigeneriamo
    if (numCount !== 2 || upperCharCount !== 3)
        return generaPassword()
    else
        return password;
}

// Gestisce la registrazione in index.html
document.getElementById("registratiBtn").addEventListener("click", function () {
    const nomeUtente = document.getElementById("nomeUtente").value;
    const mail = document.getElementById("mail").value;
    if (nomeUtente && mail) {
        registraUtente(nomeUtente, mail);
    } else {
        alert("Compila tutti i campi!");
    }
});

