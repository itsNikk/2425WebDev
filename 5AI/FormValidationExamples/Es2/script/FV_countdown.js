// Model
const redirectModel = {
    name: "",
    email: "",
    countdown: 5,
    validate() {
        const errors = {};
        if (!this.name) errors.name = "Il nome è obbligatorio.";
        if (!this.email) errors.email = "L'email è obbligatoria.";
        return errors;
    },
};

// Controller
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("redirectForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");
    const redirectMessage = document.getElementById("redirectMessage");

    let timer;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //trim() toglie evntuali spazi prima e dopo un valore
        redirectModel.name = nameInput.value.trim();
        redirectModel.email = emailInput.value.trim();

        const errors = redirectModel.validate();

        nameError.textContent = errors.name || "";
        emailError.textContent = errors.email || "";
        if (Object.keys(errors).length === 0) {
            successMessage.textContent = "Modulo validato con successo!";
            redirectMessage.textContent = "Reindirizzamento in " + redirectModel.countdown + " secondi...";

            // Countdown e Redirect
            clearInterval(timer);
            timer = setInterval(function () {
                redirectModel.countdown--;
                if (redirectModel.countdown > 0) {
                    redirectMessage.textContent = "Reindirizzamento in " + redirectModel.countdown + " secondi...";
                } else {
                    clearInterval(timer);
                    window.location.href = "landingPage.html";
                }
            }, 1000);
        } else {
            successMessage.textContent = "";
            redirectMessage.textContent = "";
        }
    });
});
