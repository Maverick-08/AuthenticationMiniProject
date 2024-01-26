let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let dob = document.getElementById("dob")
let password = document.getElementById("password")
let message = document.getElementById("message")
let signUpButton = document.getElementById("signUp")

function validator(){
    if(firstName.value === "" || lastName.value === "" || dob.value === "" || password.value === ""){
        message.innerHTML = "Empty fields are not allowed"
        return false
    }

    return true
}

async function submitDetails(){
    if(validator()){
        let details = {firstName:firstName.value,
                        lastName:lastName.value,
                        dob:dob.value,
                        password:password.value}

        let requestOption = {
            method:"POST",
            body:details
        }

        let response = await fetch("http://localhost:3500/register",requestOption)

        response = await response.json()

        console.log(response)
    }
}

signUpButton.addEventListener("click",submitDetails)