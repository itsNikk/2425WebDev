//Modello
class FormModel {
    constructor() {
        this.data = {
            username: "",
            email: "",
            pswd: "",
        }
    }

    setData(field, value) {
        this.data[field] = value
    }

    validate() {
        let errors = {}

        if (!this.data.username.trim()) {
            errors.username = "Il nome utente è obbligatorio"
        }

        if (this.data.pswd.length < 6) {
            errors.password = "La password deve essere almeno lunga 6 chars"
        }

        if (!this.data.email.includes("@")) {
            errors.email = "L'email deve contenere @"
        }

        return errors
    }
}


let model = new FormModel()


//Controller + View
const formElem = document.getElementById("userForm")

formElem.addEventListener("submit", (event) => {
    event.preventDefault()
    let usernameElem = document.querySelector("#username")
    let emailElem = document.querySelector("#email")
    let pswdElem = document.querySelector("#pswd")

    console.log(usernameElem.value);
    console.log(emailElem.value);
    console.log(pswdElem.value);

    //Il modello è popolato con input utente...
    model.setData("username", usernameElem.value)
    model.setData("email", emailElem.value)
    model.setData("pswd", pswdElem.value)

    let errors = model.validate()
    if (Object.keys(errors).length > 0) {
        //mostrare errori in VIEW
        showErrors(errors)
    } else {
        //placeholder
        document.getElementById("success").textContent = "TUtto ok"
    }

})

function showErrors(errors) {
    let erroContainerElem = document.getElementById("errors")
    erroContainerElem.textContent = ""


    for (let field in errors) {
        erroContainerElem.innerHTML += errors[field] + "<br>"
    }
}