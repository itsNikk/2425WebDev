class Film {

    constructor(id, nome, genre, anno, prezzo) {
        this._id = id
        this._nome = nome
        this._genre = genre
        this._anno = anno
        this._prezzo = prezzo
    }

    // proprietà
    get prezzo() {
        return this._prezzo
    }

    set prezzo(newPrice) {
        this._prezzo = newPrice
    }
}

let toStatsBtn = document.getElementById("toStatsBtn")
let addFilmBtn = document.getElementById("addFilmBtn")
let idElem = document.querySelector("#idFilm")
let nomeElem = document.querySelector("#nomeFilm")
let genereElem = document.querySelector("#genereFilm")
let annoElem = document.querySelector("#annoFilm")
let prezzoElem = document.querySelector("#prezzoFilm")

addFilmBtn.addEventListener("click", (event) => {
    event.preventDefault()

    let f = new Film(idElem.value, nomeElem.value,
        genereElem.value, annoElem.value, prezzoElem.value)

    let films = []
    //let films = localStorage.getItem("films) || []
    if (localStorage.getItem("films") === null) {
        films.push(f)
    } else {
        films = JSON.parse(localStorage.getItem("films"))
        films.push(f)
    }

    localStorage.setItem("films", JSON.stringify(films))
})


toStatsBtn.addEventListener("click", (e) => {
    //NON eseguire il comportamento di default dell'evenot appena avvenuto
    e.preventDefault()
    //VADO a stats.html
    window.location.href = "stats.html"
})
