let contenitoreTabella = document.getElementById('contenitore-tabella-mult');
let tabella = document.createElement('table');

for (let riga = 1; riga <= 10; riga++) {
    let rigaTabella = document.createElement('tr');
    for (let colonna = 1; colonna <= 10; colonna++) {
        let cella = document.createElement('td');
        cella.textContent = riga * colonna;
        rigaTabella.appendChild(cella);
    }
    tabella.appendChild(rigaTabella);
}

contenitoreTabella.appendChild(tabella);
