//Model
class FormModel {
    username;
    phone;
    pswd;
    confPswd;

    constructor(username, phone, pswd, confPswd) {
        this.username = username;
        this.phone = phone;
        this.pswd = pswd;
        this.confPswd = confPswd;
    }

    validate() {
        let errors = {}

        let validUsername = this.username.length > 5 && this.username.charAt(2) === "#";
        if (!validUsername) {
            errors.username = "Lo username deve essere lungo almeno 5 caratteri ed avere un # in terza posizione"
        }

        let validPhone = this.phone.length > 10 && this.phone.charAt(0) === '+'
        if (!validPhone) {
            errors.phone = "Il telefono deve iniziare con un + seguito da almeno 9 caratteri"
        }

        let validPswd = this.pswd.length >= 6 && this.pswd.charAt(0) === this.pswd.charAt(0).toLowerCase()
        if (!validPswd) {
            errors.pswd = "La password deve essere lunga 6 e iniziare con una minuscola"
        }

        if (this.pswd !== this.confPswd) {
            errors.confPswd = "Le password non coincidono."
        }

        return errors
    }
}

// Controller + View
let valForm = document.getElementById("valForm")

valForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let uname = document.getElementById("username").value
    let phone = document.getElementById("phone").value
    let pswd = document.getElementById("pswd").value
    let confPswd = document.getElementById("confPswd").value;
    let errorsElem = document.getElementById("errors")


    let formModel = new FormModel(uname, phone, pswd, confPswd)
    let errors = formModel.validate()

    errorsElem.textContent = ""
    for (const error in errors) {
        errorsElem.innerHTML += "- " + errors[error] + "<br>"
    }

})


