function getRandomMessage() {
    let msg = Math.random() < .5 ? "0xy:" : "0x:y"
    for (let i = 0; i < Math.random() * 10; i++) {
        msg += Math.floor(Math.random() * 10)
    }
    return msg;
}

function fakeMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.4 ? reject(new Error("Errore in trasmissione")) : resolve(getRandomMessage())
        }, 1000);
    });
}

function decode(hex) {
    if (!hex.startsWith("0xy:")) return "Formato errato!";
    return "Il messaggio è corretto"

}

document.getElementById("decodeBtn").addEventListener("click", () => {
    const out = document.getElementById("output");
    out.innerHTML = "Ricezione...";

    fakeMessage()
        .then((msg) => out.innerHTML = msg + ": " + decode(msg))
        .catch((err) => out.innerHTML = "Errore: " + err.message);
});
