//Model
const redirectModel = {
    name: "",
    email: "",
    countdown: 5,
    validate() {
        const errors = {}
        if (!this.email) errors.email = "L'email è obbligatoria"
        if (!this.name) errors.name = "Il nome è obbligatorio"
        return errors
    }
}

//Controller
const form = document.getElementById("redirectForm")
const username = document.getElementById("username")
const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const email = document.getElementById("email")
const successMessage = document.getElementById("successMessage")
const redirectMessage = document.getElementById("redirectMessage")

let timer

form.addEventListener("submit", (event) => {
    event.preventDefault()

    redirectModel.name = username.value.trim()
    redirectModel.email = email.value.trim()

    const errors = redirectModel.validate()

    nameError.textContent = errors.name || ""
    emailError.textContent = errors.email || ""

    if (Object.keys(errors).length === 0) {
        successMessage.textContent = "Modulo OK"
        redirectMessage.textContent = "Redirect in " + redirectModel.countdown + " secondi"


        timer = setInterval(() => {

            redirectModel.countdown--
            if (redirectModel.countdown > 0) {
                redirectMessage.textContent = "Redirect in " + redirectModel.countdown + " secondi"
            } else {
                clearInterval(timer)
                localStorage.setItem("username",redirectModel.name)
                localStorage.setItem("userEmail",redirectModel.email)
                window.location.href = "landing.html"
            }

        }, 1000)


    } else {
        successMessage.textContent = ""
        redirectMessage.textContent = ""
    }

})

