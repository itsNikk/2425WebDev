let len = document.getElementById("len")



len.addEventListener("change", () => {
    let nums = []
    for (let i = 0; i < len.value; i++) {
        let elem = ((Math.random() * 100) + 1).toFixed(2)
        //push a ggiunge in coda
        nums.push(elem)
    }

    for (const elem of nums) {
        console.log(elem);
    }

    setTimeout(() => {
        sessionStorage.setItem("nums", JSON.stringify(nums))
        window.location.href = "p2.html"
    }, 1000)

})


