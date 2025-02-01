//parseInt(cosaParsare,inQualeBase)
const sessionExpiry = parseInt(sessionStorage.getItem("sessionExpiry"), 10);

// Controlla se l'utente è autenticato e se la sessione è ancora valida
if (sessionStorage.getItem("authenticated") !== "true" || Date.now() > sessionExpiry) {
    sessionStorage.removeItem("authenticated");
    sessionStorage.removeItem("sessionExpiry");
    sessionStorage.removeItem("uname");
    alert("Sessione scaduta. Effettua nuovamente il login.");
    window.location.href = "FV_Es4.html";
} else {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "Bentornato, " + sessionStorage.getItem("uname") + "!";

    // Aggiorna il timer della sessione
    const sessionTimer = document.getElementById("sessionTimer");
    const interval = setInterval(function (){
        const timeRemaining = Math.max(0, sessionExpiry - Date.now());
        if (timeRemaining <= 0) {
            clearInterval(interval);
            sessionStorage.removeItem("authenticated");
            sessionStorage.removeItem("sessionExpiry");
            sessionStorage.removeItem("uname");
            alert("Sessione scaduta. Effettua nuovamente il login.");
            window.location.href = "FV_Es4.html";
        } else {
            const minutes = Math.floor(timeRemaining / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);
            sessionTimer.textContent = "Tempo rimanente: " + +minutes + " m " + seconds + "s";
        }
    }, 1000);
}

// Logout: rimuovi il flag di autenticazione e reindirizza
document.getElementById("logoutButton").addEventListener("click", function () {
    sessionStorage.removeItem("authenticated");
    sessionStorage.removeItem("sessionExpiry");
    sessionStorage.removeItem("uname");
    window.location.href = "FV_Es4.html";
});