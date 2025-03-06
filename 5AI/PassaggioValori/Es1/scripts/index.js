const numButtons = 20;  // Numero di bottoni da generare
const buttonsContainer = document.getElementById('btnsContainer');
const goToStatsButton = document.getElementById('toStatsBtn');

let selectedNumbers = [];

for (let i = 1; i <= numButtons; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
            selectedNumbers.push(i);
    });
    buttonsContainer.appendChild(button);
}

goToStatsButton.addEventListener('click', () => {
    localStorage.setItem('selectedNumbers', JSON.stringify(selectedNumbers));
    window.location.href = 'stats.html';
});