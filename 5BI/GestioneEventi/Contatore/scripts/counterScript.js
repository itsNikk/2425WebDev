const button = document.getElementById('increment');
const counterDisplay = document.getElementById('counter');

let counter = 0;

let longClickTimeout;

function updateDisplay() {
    counterDisplay.textContent = counter;
}

button.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

button.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Impedisce il menu contestuale del browser
    counter--;
    updateDisplay();
});

button.addEventListener('mousedown', () => {
    longClickTimeout = setTimeout(() => {
        counter = 0;
        updateDisplay();
    }, 1000); 
});

button.addEventListener('mouseup', () => {
    clearTimeout(longClickTimeout);
});


