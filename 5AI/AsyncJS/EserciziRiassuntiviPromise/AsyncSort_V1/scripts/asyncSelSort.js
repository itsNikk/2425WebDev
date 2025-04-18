function selectionSortAsync(arr, arrId) {
    return new Promise((resolve) => {
        let start = Date.now();

        for (let i = 0; i < arr.length; i++) {
            let lowestValue = arr[i];
            let indexOfLowestValue = i;
            for (let j = i; j < arr.length; j++) {
                if (arr[j] < lowestValue) {
                    lowestValue = arr[j];
                    indexOfLowestValue = j;
                }
            }
            //Swap
            let temp = arr[i];
            arr[i] = arr[indexOfLowestValue];
            arr[indexOfLowestValue] = temp;
        }
        const end = Date.now() - start
        resolve({id: arrId, sorted: arr, elapsedTime: end});
    });
}

function generateArray(size) {
    let resArr = []
    for (let i = 0; i < size; i++) {
        resArr[i] = Math.floor(Math.random() * 10000)
    }
    return resArr
}

//Potevo stampare anche senza una funzione, l'ho creata per comodità e leggibilità
function logResult(result) {
    let div = document.getElementById("results");
    let p = document.createElement("p");
    p.textContent = "Array " + result.id + " ordinato in " + result.elapsedTime + " ms. Dimensione: " + result.sorted.length;
    div.appendChild(p);
}

document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("results").innerHTML = "";

    let tasks = [];
    let sizes = [75000, 100, 700, 20000, 600, 800, 1000, 10000, 50000]; // Dimensioni diverse

    for (let i = 0; i < sizes.length; i++) {
        let arr = generateArray(sizes[i]);
        let promise = selectionSortAsync(arr, i + 1);
        tasks.push(promise);
    }

    // Mostra i risultati 'man mano' che arrivano
    // Concettualmente, è un risultato corretto?
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].then(function (result) {
            logResult(result);
        });
    }
});