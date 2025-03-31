//ora è un arrray
let films = JSON.parse(localStorage.getItem("films"))

let sum = 0
let count2018 = 0
let countFantasy = 0

for (let elem of films) {
    //sommatot prezzi
    sum += parseFloat(elem._prezzo)

    if (elem._anno === "2018") { count2018++ }
    if (elem._genre === "fantasy") { countFantasy++ }

}

let avaragePrice = sum / films.length

document.getElementById("res").innerHTML = "Somma tot: " + sum + "<br>"
    + "Media: " + avaragePrice.toFixed(2          ) + "<br>" + "Film 2018: " + count2018 + "<br>" +
    "Film fantasy: " + countFantasy