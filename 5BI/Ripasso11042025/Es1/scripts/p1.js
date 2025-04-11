let btn = document.getElementById("send")
let N = document.getElementById("len")

btn.addEventListener("click", () => {
    let arr = []
    for (let i = 0; i < N.value; i++) {
        arr.push(Math.floor((Math.random() * (2 * N.value))) + 1)
    }

    sessionStorage.setItem("seq", JSON.stringify(arr))
    window.location.href = "p2.html"
})
