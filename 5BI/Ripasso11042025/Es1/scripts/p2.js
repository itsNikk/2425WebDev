let arr = JSON.parse(sessionStorage.getItem("seq"))
let table = document.getElementById("res")

let max = arr[0]
let min = arr[0]
let sum = 0

for (let elem of arr) {
    if (elem > max) {
        max = elem
    }
    if (elem < min) {
        min = elem
    }

    sum += elem
}

let avg = (sum / arr.length).toFixed("2")

// Solo per farlo vedere in console, non serve per l'esercizio
console.log(arr);
console.log(avg);
console.log("Min: " + min + ". Max:" + max);

let newTr = document.createElement("tr")
let valToAdd = [min, max, avg]
for (let elem of valToAdd) {
    let newTd = document.createElement("td")
    newTd.textContent = elem
    newTr.appendChild(newTd)
}

table.appendChild(newTr)

let resArr=[]
for (const elem of arr) {
    resArr.push(elem-avg);
}
console.log(resArr);
