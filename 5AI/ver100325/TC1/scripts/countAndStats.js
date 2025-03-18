document.addEventListener('DOMContentLoaded', () => {
    let mul3List = document.getElementById("mul3");
    let mul5List = document.getElementById("mul5");

    setInterval(() => {
        let n = parseInt(Math.random() * (500 - 1) + 1);
        let nli = document.createElement("li");
        nli.textContent = n;
        console.log(nli.textContent);
        if (n % 3 === 0) {
            mul3List.appendChild(nli);
        } else if (n % 5 === 0) {
            mul5List.appendChild(nli);
        }
    }, 1000);
});
