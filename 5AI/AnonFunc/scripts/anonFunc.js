//let f = () => alert("Ciao")

//time in JS
//setTimeout(() => alert("Ciao"), 3000) //dopo tot, lancia una funzione e basta
//setInterval(() => alert("HAHAHAH"),1000) // OGNI tot, lancia una funzione
//clearInterval() //interrompi un intervallo

let counter = document.getElementById('counter');
let c = 0;

let clickBtn = document.getElementById("clickBtn")
clickBtn.addEventListener('click', clicked);
clickBtn.addEventListener('contextmenu',
    (event) => {
        event.preventDefault()
        clickBtn.value = "Click DX"
    }
);
const intervalId = setInterval(updateText, 1000);

function clicked() {
    clickBtn.value = "Cliccato"
}

function updateText() {
    c++;
    if (c >= 5) clearInterval(intervalId);
    counter.textContent = c;
}


