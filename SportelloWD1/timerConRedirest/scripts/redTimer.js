let countdownElem = document.getElementById("countdown")

let remainingTime = 10

setInterval(() => {
    remainingTime--
    countdownElem.textContent = "Mancano " + remainingTime + " secondi al redirect..."
    if (remainingTime === 0) {
        localStorage.setItem("msg", "ASJHF")
        window.location.href = "landingPage.html"
    }
}, 1000);