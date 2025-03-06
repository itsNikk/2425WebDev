const selectedNumbers = JSON.parse(localStorage.getItem('selectedNumbers'));

if (selectedNumbers.length === 0) {
    alert("Non hai selezionato alcun numero.");
    window.location.href = 'es1Index.html';
}


const total = selectedNumbers.length;
const sum = computeSum(selectedNumbers)
const average = sum / total;
const min = findMin(selectedNumbers)
const max = findMax(selectedNumbers)


document.getElementById('total').textContent = total;
document.getElementById('sum').textContent = sum;
//toFixed(int) prende solo 'int' numeri dopo la virgola
document.getElementById('average').textContent = average.toFixed(2);
document.getElementById('min').textContent = min;
document.getElementById('max').textContent = max;

document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'es1Index.html';
});

function computeSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += parseInt(elem);
    }
    return sum;
}

function findMin(arr) {
    let currentMin = arr[0];
    for (let elem of arr) {
        if (elem < currentMin) {
            currentMin = elem;
        }

    }

    return currentMin;
}

function findMax(arr) {
    let currentMax = arr[0];
    for (let elem of arr) {
        if (elem > currentMax) {
            currentMax = elem;
        }
    }

    return currentMax;
}