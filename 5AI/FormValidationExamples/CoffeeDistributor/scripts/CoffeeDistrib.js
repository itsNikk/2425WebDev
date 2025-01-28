const codeErrPar = document.getElementById("newCodeErr")

class Distributore {
    constructor() {
        this.capsule = 0; // Numero di capsule disponibili
        this.codici = {}; // Oggetto per tracciare i codici e i relativi caffè addebitati
    }

    // Metodo per aggiungere capsule
    aggiungiCapsule(n) {
        if (n > 0) {
            this.capsule += n;
            console.log("Capsule aggiunte: " + n + ". Totale capsule: " + this.capsule);
        } else {
            console.log("Numero di capsule non valido.");
        }
    }

    // Metodo per aggiungere un codice
    aggiungiCodice(c) {
        if (!(c in this.codici)) {
            this.codici[c] = 0;
            console.log("Codice aggiunto: " + c);
        } else {
            console.log("Il codice " + c + " esiste già.");
        }
    }

    // Metodo per erogare caffè
    eroga(n, c) {
        if (!(c in this.codici)) {
            console.log("Codice non valido: " + c);
            return;
        }
        if (n <= 0) {
            console.log("Numero di caffè non valido.");
            return;
        }
        if (this.capsule >= n) {
            this.capsule -= n;
            this.codici[c] += n;
            console.log("Erogati " + n + " caffè per il codice: " + c + ". Capsule rimanenti: " + this.capsule);
        } else {
            console.log("Capsule insufficienti per erogare " + n + " caffè.");
        }
    }

    // Metodo per generare un report
    report(c) {
        if (!(c in this.codici)) {
            console.log("Codice non valido: " + c);
            return;
        }
        console.log("Report per il codice " + c + ":");
        console.log("Caffè addebitati: " + this.codici[c]);
        console.log("Capsule disponibili: " + this.capsule);
    }
}

// Funzione per istanziare il distributore
/*const defineDistributore = () => {
    const distributore = new Distributore();
    console.log("Distributore di caffè inizializzato.");
    return distributore;
};
*/

// Funzione per caricare capsule
const caricaCapsule = (distributore) => {
    const n = parseInt(document.getElementById("capsuleInput").value, 10);
    distributore.aggiungiCapsule(n);
};

// Funzione per erogare caffè
const erogaCaffe = (distributore) => {
    const c = document.getElementById("codiceInput").value;
    const n = parseInt(document.getElementById("numeroCaffeInput").value, 10);
    distributore.eroga(n, c);
};

// Funzione per generare un report
const ottieniReport = (distributore) => {
    const c = document.getElementById("reportCodiceInput").value;
    distributore.report(c);
};

// Esempio d'uso
const mioDistributore = new Distributore();
document.getElementById("aggiungiCodiceBtn").addEventListener("click", () => {
    const codice = document.getElementById("nuovoCodiceInput").value;
    if (codice === "") {
        document.getElementById("nuovoCodiceInput").focus()
        codeErrPar.textContent = "Codice non valido"
        return
    } else {
        codeErrPar.textContent = ""
        mioDistributore.aggiungiCodice(codice);
    }
});

document.getElementById("caricaCapsuleBtn").addEventListener("click", () => {
    caricaCapsule(mioDistributore);
});

document.getElementById("erogaCaffeBtn").addEventListener("click", () => {
    erogaCaffe(mioDistributore);
});

document.getElementById("ottieniReportBtn").addEventListener("click", () => {
    ottieniReport(mioDistributore);
});
