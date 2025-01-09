let contenitore = document.getElementById('contenitore-liste');
for (let i = 1; i <= 10; i++) {
    let paragrafo = document.createElement('p');
    paragrafo.textContent = 'Paragrafo ' + i;

    let lista = document.createElement('ul');
    for (let j = 1; j <= i; j++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = 'Elemento ' + j;
        lista.appendChild(elementoLista);
    }

    contenitore.appendChild(paragrafo);
    contenitore.appendChild(lista);
}
