//Model
const formModel = {

    name: "",
    email: "",
    countdown: 3,
    validate() {
        const errors = {}
        if (!this.name) errors.name = "Il nome è obbligatorio"
        if (!this.email) errors.email = "La mail è obbligatoria"
        return errors;
    }
}

//Control
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm")
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("emailError")
    const succMsg = document.getElementById("successMessage")
    const redirectElem = document.getElementById("redirectMsg")

    let timer

    form.addEventListener("submit", function (event) {
        event.preventDefault()

        formModel.name = nameInput.value.trim()
        formModel.email = emailInput.value.trim()

        const errors = formModel.validate()

        nameError.textContent = errors.name || ""
        emailError.textContent = errors.email || ""
        if (Object.keys(errors).length === 0) {
            succMsg.textContent = "Modulo validato correttamente!"
            redirectElem.textContent = "Reindirizzamento in " + formModel.countdown + " secondi."


            timer = setInterval(function () {
                formModel.countdown--
                if (formModel.countdown > 0) {
                    redirectElem.textContent = "Reindirizzamento in " + formModel.countdown + " secondi."
                } else {
                    clearInterval(timer)
                    window.location.href = "thankyou.html"
                }
            }, 1000)
        } else {
            succMsg.textContent = redirectElem.textContent = ""
        }
    })




})
