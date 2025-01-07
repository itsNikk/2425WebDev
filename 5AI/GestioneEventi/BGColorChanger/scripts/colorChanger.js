const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value;
});
