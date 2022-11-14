var signUpForm = document.querySelector("#signUpForm");
var userNameField = document.querySelector("userNameField");
var userNameErrorMessage = document.querySelector("userNameErrorMessage");



signUpForm.addEventListener("string", (event)=>{
    event.preventDefault();

    if(!signUpForm.username.value == false){
        userNameField.classList.add("errorField")
        userNameField.classList.remove("hidden")
        console.log("you need to enter a username");

    }
    
});