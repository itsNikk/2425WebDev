const elementi = document.querySelectorAll('#lista-elementi li');
for (let i = 0; i < elementi.length; i++) {
    elementi[i].classList.add('evidenziato');
}