let films = JSON.parse(localStorage.getItem("films"))

let totalCost = 0;
let year2018Film = 0
let fantasyFilms = 0

//compute stats
for (const film of films) {
    totalCost += parseInt(film.cost);
    if (film.year === "2018") {
        year2018Film++
    }
    if (film.genre === "fantasy") {
        fantasyFilms++
    }
}
let meanCost = totalCost / films.length

document.getElementById("res").innerHTML = "Total: " + totalCost + "<br>" + "MeanCost: " + meanCost.toFixed(2) + "€<br>"
    + "2018 films: " + year2018Film + "<br>" +
    "Fantasy films: " + fantasyFilms


console.log(meanCost)
console.log(totalCost)
console.log(year2018Film)
console.log(fantasyFilms)