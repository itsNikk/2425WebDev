const keyPressed = document.getElementById('keyPressed');

document.addEventListener('keydown', (event) => {
    keyPressed.textContent = "Tasto premuto:" + event.key;
});

document.addEventListener('keyup', () => {
    keyPressed.textContent = 'Nessun tasto premuto';
});
