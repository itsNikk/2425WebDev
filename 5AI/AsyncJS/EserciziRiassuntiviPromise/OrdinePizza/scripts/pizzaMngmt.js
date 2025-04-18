class Pizza {
    constructor(type, size, isHot) {
        this.type = type;
        this.size = size;
        this.isHot = isHot;
    }

    describe() {
        return this.type + " " + this.size + " " + (this.isHot ? "fumante" : "tiepida");
    }
}

function preparePizza() {
    return new Promise((resolve, reject) => {
        log("Preparazione in corso...");
        setTimeout(() => {
            if (Math.random() > 0.2) {
                const pizza = new Pizza("Margherita", "grande", true);
                resolve(pizza);
            } else {
                reject("Errore: forno rotto!");
            }
        }, 1500);
    });
}

// Log sul DOM
// Si poteva fare anche senza ovviamente
function log(msg) {
    const div = document.getElementById("log");
    // Veloce ma brutta, si poteva fare anche con CreateElement()
    div.innerHTML += "<p>" + msg + "</p>";
}

document.getElementById("orderBtn").addEventListener("click", () => {
    document.getElementById("log").innerHTML = "";
    log("Ordine ricevuto...");

    preparePizza()
        .then((pizza) => {
            log("Ordine completato!");
            log(pizza.describe());
        })
        .catch((err) => log(err));
});
