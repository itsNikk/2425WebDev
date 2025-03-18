const addBtn = document.getElementById("addBtn")
const showBtn = document.getElementById("showBtn")
let numElem = document.getElementById("num")

let nums = []

addBtn.addEventListener("click", () => {
    let inputVal = numElem.value;
    nums.push(inputVal)
    numElem.value = ""
})

showBtn.addEventListener("click", () => {
    for (const num of nums) {
        console.log(num + ":" + (num * 2))
    }
})