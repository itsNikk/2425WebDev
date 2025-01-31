const codeErrElem = document.getElementById("newCodeErr")
const capsuleErrElem = document.getElementById("capsuleErr")
const codiceInputElem = document.getElementById("nuovoCodiceInput")
const capsuleInputElem = document.getElementById("capsuleInput")
const reportPlaceElem = document.getElementById("reportPlace")
const reportCodeErrElem = document.getElementById("reportCodeErr")

class Distributore {
    constructor() {
        this.capsule = 0; // Numero di capsule disponibili
        this.codici = {}; // Oggetto per tracciare i codici e i relativi caffè addebitati
    }

    // Metodo per aggiungere capsule
    aggiungiCapsule(n) {
        if (n > 0) {
            this.capsule += n;
            capsuleInputElem.classList.add("good")
            capsuleErrElem.classList.remove("error")
            capsuleErrElem.textContent = "Capsule aggiunte: " + n + ". Totale capsule: " + this.capsule
            console.log("Capsule aggiunte: " + n + ". Totale capsule: " + this.capsule);
        } else {
            capsuleInputElem.classList.remove("good")
            capsuleErrElem.classList.add("error")
            capsuleErrElem.textContent = "Numero di capsule non valido."
        }
    }

    aggiungiCodice(c) {
        if (!(c in this.codici)) {
            this.codici[c] = 0;
            codiceInputElem.classList.add("good")
            console.log("Codice aggiunto: " + c);
        } else {
            codiceInputElem.classList.remove("good")
            codeErrElem.textContent = "Il codice " + c + " esiste già."
        }
    }

    // Metodo per erogare caffè
    eroga(n, c) {
        if (!(c in this.codici)) {
            console.log("Codice non valido: " + c);
            return;
        }

        if (n <= 0 || isNaN(n)) {
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
            reportCodeErrElem.textContent = "Codice non valido: " + c
            reportPlaceElem.textContent = ""
            return;
        }

        reportCodeErrElem.textContent = ""
        reportPlaceElem.innerHTML = "Report per il codice " + c + ":" + "<br>"
            + "Caffè addebitati: " + this.codici[c] + "<br>"
            + "Capsule disponibili: " + this.capsule

    }
}

const caricaCapsule = (distributore) => {
    const n = parseInt(document.getElementById("capsuleInput").value, 10);
    distributore.aggiungiCapsule(n);
};

const erogaCaffe = (distributore) => {
    const c = document.getElementById("codiceInput").value;
    const n = parseInt(document.getElementById("numeroCaffeInput").value, 10);
    distributore.eroga(n, c);
};

const ottieniReport = (distributore) => {
    const c = document.getElementById("reportCodiceInput").value;
    distributore.report(c);
};

//Si potrebbe sostituire con una funzione che restituisce un Distributore (incapsulamento)
const mioDistributore = new Distributore();
document.getElementById("aggiungiCodiceBtn").addEventListener("click", () => {
    const codice = document.getElementById("nuovoCodiceInput").value;
    if (codice === "") {
        document.getElementById("nuovoCodiceInput").focus()
        codeErrElem.textContent = "Codice non valido"
    } else {
        codeErrElem.textContent = ""
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
