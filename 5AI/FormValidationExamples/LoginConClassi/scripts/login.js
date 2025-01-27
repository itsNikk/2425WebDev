function loginUtente(nomeUtente) {
    const utentiRegistrati = JSON.parse(localStorage.getItem("utenti")) || [];
    const utente = utentiRegistrati.find(u => u.nomeUtente === nomeUtente);

    const messaggioDiv = document.getElementById("messaggio");

    if (utente) {
        messaggioDiv.innerHTML = "Login riuscito. La tua password è: " + utente.password;
    } else {
        messaggioDiv.innerHTML = "Utente non trovato!";
    }
}

// Gestisce il login in login.html
    document.getElementById("loginBtn").addEventListener("click", function() {
        const nomeUtente = document.getElementById("loginNomeUtente").value;
        if (nomeUtente) {
            loginUtente(nomeUtente);
        } else {
            alert("Inserisci il nome utente!");
        }
    });

