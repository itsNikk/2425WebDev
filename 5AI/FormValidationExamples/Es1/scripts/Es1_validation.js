//Model
const formModel = {
    name: "",
    email: "",
    validate() {
        const errors = {};
        //!this.name => se name nullo
        if (!this.name) errors.name = "Il nome è obbligatorio.";
        if (!this.email) errors.email = "L'email è obbligatoria.";
        return errors;
    },
};

// Controller
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        formModel.name = nameInput.value.trim();
        formModel.email = emailInput.value.trim();

        const errors = formModel.validate();

        // || = oepratore condizionale= se errors.name undefined o vuoto allora usa "", se no usa il suo valore
        nameError.textContent = errors.name || "";
        emailError.textContent = errors.email || "";
        // operatore ternario ?: è una scorciatoia per if...else (con assegnamento)
        successMessage.textContent = Object.keys(errors).length === 0
            ? "Modulo validato con successo!"
            : "";
    });
});
