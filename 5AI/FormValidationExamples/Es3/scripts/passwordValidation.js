// Model
const passwordModel = {
    email: "",
    password: "",
    confirmPassword: "",
    progress: 0,
    validate() {
        const errors = {};
        if (!this.email) errors.email = "L'email è obbligatoria.";
        if (this.password.length < 8) errors.password = "La password deve essere di almeno 8 caratteri.";
        if (this.password !== this.confirmPassword) errors.confirmPassword = "Le password non coincidono.";
        return errors;
    },
    updateProgress() {
        let progress = 0;
        if (this.email) progress += 33;
        if (this.password.length >= 8) progress += 33;
        if (this.password === this.confirmPassword) progress += 34;
        this.progress = progress;
    },
};

// Controller
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("passwordForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const progressBar = document.getElementById("progressBar");
    const successMessage = document.getElementById("successMessage");

    const updateView = function () {
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        const errors = passwordModel.validate();
        if (errors.email) emailError.textContent = errors.email;
        if (errors.password) passwordError.textContent = errors.password;
        if (errors.confirmPassword) confirmPasswordError.textContent = errors.confirmPassword;

        progressBar.value = passwordModel.progress;
        successMessage.textContent = Object.keys(errors).length === 0 ? "Modulo inviato con successo!" : "";
    };

    emailInput.addEventListener("input", function () {
        passwordModel.email = emailInput.value.trim();
        passwordModel.updateProgress();
        updateView();
    });

    passwordInput.addEventListener("input", function () {
        passwordModel.password = passwordInput.value;
        passwordModel.updateProgress();
        updateView();
    });

    confirmPasswordInput.addEventListener("input", function () {
        passwordModel.confirmPassword = confirmPasswordInput.value;
        passwordModel.updateProgress();
        updateView();
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        updateView();
    });
});
