const numButtons = 20;  // Numero di bottoni da generare
const buttonsContainer = document.getElementById('btnsContainer');
const goToStatsButton = document.getElementById('toStatsBtn');

let selectedNumbers = [];

// Funzione per creare i bottoni
for (let i = 1; i <= numButtons; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
            selectedNumbers.push(i);
    });
    buttonsContainer.appendChild(button);
}

// Gestione del pulsante per andare alla pagina delle statistiche
goToStatsButton.addEventListener('click', () => {
    localStorage.setItem('selectedNumbers', JSON.stringify(selectedNumbers));
    window.location.href = 'stats.html';
});