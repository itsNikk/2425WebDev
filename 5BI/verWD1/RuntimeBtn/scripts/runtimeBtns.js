let N = Math.random() * (10 - 5) + 5

const countClickBtn = document.getElementById("ctnBtn")
let clickDX = 0
let clickSX = 0;

for (let i = 0; i < N; i++) {
    let btn = document.createElement("button")
    btn.textContent = "0"
    btn.addEventListener("click", () => {
        btn.textContent = parseInt(btn.textContent) + 1
        sessionStorage.setItem("clickSX", ++clickSX)
    })

    btn.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        btn.textContent = parseInt(btn.textContent) - 1
        sessionStorage.setItem("clickDX", ++clickDX)
    })

    document.body.appendChild(btn)
}

countClickBtn.addEventListener("click", () => {
    window.location.href = "end.html"
})