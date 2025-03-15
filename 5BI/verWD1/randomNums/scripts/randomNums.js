let N = parseInt(Math.random() * (100 - 1) + 1)


setTimeout(() => {
    sessionStorage.setItem("N", N)
    window.location.href = "pagina2.html"
}, 2000)


