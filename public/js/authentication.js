const logInButton = document.getElementById("logIn")
const signUpButton = document.getElementById("signUp")
const message = document.getElementById("message")
let username = document.getElementById("username")
let password = document.getElementById("password")

function validator(){

    if(username.value === "" || password.value === ""){
        message.innerHTML = "Username or Password field cannot be empty!"
        username.value = ''
        password.value = ''
        return false
    }

    return true
}

function relocate(){
    if(validator()){
        setTimeout(()=>{
            window.location.assign = "http://localhost:3500/signUp"
        },1500)
    }
}

async function submitDetails(){
    if(validator()){
        let details = {username:username.value,password:password.value}

        const requestOption = {
            method:"POST",
            body:details
        }

        let response = await fetch("http://localhost:3500",requestOption)
        response = await response.json()

        console.log(response)
    }
}

signUpButton.addEventListener("click",relocate)
logInButton.addEventListener("click",submitDetails)
