class Film {
    ID;
    name;
    genre;
    year;
    cost;

    constructor(ID, name, genre, year, cost) {
        this.ID = ID;
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.cost = cost;
    }

}

function checkUniqueID(films, idToCheck) {
    for (const film of films) if (film.ID === idToCheck) {
        return false
    }
    return true
}

let f = document.getElementById("newFilmForm")

f.addEventListener("submit", (e) => {
    e.preventDefault()

    let id = document.getElementById("id")
    let name = document.getElementById("name")
    let year = document.getElementById("year")
    let genre = document.getElementById("genre")
    let cost = document.getElementById("cost");

    let newFilm = new Film(id.value, name.value, genre.value, year.value, cost.value);
    let films = JSON.parse(localStorage.getItem("films")) || [];

    //BONUS point
    if (checkUniqueID(films, newFilm.ID)) {
        films.push(newFilm)
        localStorage.setItem("films", JSON.stringify(films))
    } else {
        //Show errors here and mayb reset form
    }

});

document.getElementById("toStats").addEventListener("click", () => {
    window.location.href = "stats.html"
})