class DistributoreCaffe {
    constructor() {
        this.capsuleDisponibili = 0;
        this.consumiPerCodice = {};
    }

    aggiungiCapsule(numCapsule) {
        this.capsuleDisponibili += numCapsule;
    }

    erogaCaffe(codiceUtente) {
        if (this.capsuleDisponibili > 0) {
            this.capsuleDisponibili--;
            if (!this.consumiPerCodice[codiceUtente]) {
                this.consumiPerCodice[codiceUtente] = 0;
            }
            this.consumiPerCodice[codiceUtente]++;
            return true;
        }
        return false;
    }

    generaReport(codiceUtente) {
        return "Caffè consumati da " + codiceUtente + ": " + (this.consumiPerCodice[codiceUtente] || 0) +
            " <br>Capsule rimanenti: " + this.capsuleDisponibili;
    }
}

const distributore = new DistributoreCaffe();

document.getElementById("consumaCaffeBtn").addEventListener('click', consumaCaffe)

document.getElementById("add10btn").addEventListener('click', () => {
    aggiungiCapsule(10);
})

document.getElementById("add20btn").addEventListener('click', () => {
    aggiungiCapsule(20);
})

function aggiungiCapsule(numCapsule) {
    distributore.aggiungiCapsule(numCapsule);
}

function consumaCaffe() {
    const codice = document.getElementById("codice").value;
    if (codice === null || codice === undefined || codice === "") return;
    if (distributore.erogaCaffe(codice)) {
        mostraReport(codice);
    } else {
        alert("Capsule esaurite!");
    }
}

function mostraReport(codice) {
    const reportDiv = document.getElementById("report");
    reportDiv.innerHTML = distributore.generaReport(codice);
}
