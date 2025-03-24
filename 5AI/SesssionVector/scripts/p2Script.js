let nums = JSON.parse(sessionStorage.getItem("nums"))
let resElem = document.getElementById("sum")

let sum = 0;
for (const elem of nums) {
    sum += parseFloat(elem);
}

resElem.textContent = sum