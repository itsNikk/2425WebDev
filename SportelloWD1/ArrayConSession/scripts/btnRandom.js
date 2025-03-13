let btnCOntainerElem = document.getElementById("btnContainer")

for (let i = 0; i < 10; i++) {
    let newBtn = document.createElement("button")
    newBtn.value = i + 1
    newBtn.textContent = i + 1

    newBtn.addEventListener("click", () => {
        if (!sessionStorage.getItem("nums")) {
            let nums = []
            nums.push(i + 1)
            sessionStorage.setItem("nums", JSON.stringify(nums))
        } else {
            let nums = JSON.parse(sessionStorage.getItem("nums"))
            nums.push(i + 1)
            sessionStorage.setItem("nums", JSON.stringify(nums))
        }
    })

    btnCOntainerElem.appendChild(newBtn)
}

document.getElementById("goToStats").addEventListener("click", () => {
    window.location.href = "stats.html"
})