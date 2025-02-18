const startBtn = document.getElementById("start")
const msgElem = document.getElementById("msg")


function getMessageWithDelay() {
    return new Promise((resolve) => {

        setTimeout(() => {
            
            resolve("result")

        }, 2000)

    })
}


startBtn.addEventListener("click", () => {
    msgElem.textContent = "Attendi..."
    //chiama la promise...
    getMessageWithDelay().then((message) => {
        msgElem.textContent = message
    })
})