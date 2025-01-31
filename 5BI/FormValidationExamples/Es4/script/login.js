// Model
const loginModel = {
    username: "",
    password: "",
    sessionTimeout: 0.5 * 60 * 1000, // X minuti in millisecondi
    validate() {
        const errors = {};
        if (this.username !== "admin") errors.username = "Username non valido.";
        if (this.password !== "password123") errors.password = "Password non valida.";
        return errors;
    },
    authenticate() {
        const sessionExpiry = Date.now() + this.sessionTimeout;
        sessionStorage.setItem("authenticated", "true");
        sessionStorage.setItem("uname", this.username)
        sessionStorage.setItem("sessionExpiry", sessionExpiry.toString());
    },
};

// Controller
//DOMContentLoaded = defer
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const loginError = document.getElementById("loginError");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        loginModel.username = usernameInput.value.trim();
        loginModel.password = passwordInput.value.trim();

        const errors = loginModel.validate();
        usernameError.textContent = errors.username || "";
        passwordError.textContent = errors.password || "";

        if (Object.keys(errors).length === 0) {
            loginModel.authenticate();
            window.location.href = "dashboard.html";
        } else {
            loginError.textContent = "Credenziali non valide. Riprova.";
        }
    });
});
