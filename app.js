let pattren = `^[\\w\\.-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$`
let notifybtn = document.querySelector("#notify-btn")
let inputElement = document.querySelector("#email-input")


inputElement.addEventListener("focus", e => {
    e.preventDefault()
    inputElement.style.borderColor= "var(--blue)";
    console.log("hello")
});

inputElement.addEventListener("input", e => {
    e.preventDefault()
    inputElement.style.borderColor = "var(--blue)";
    document.querySelector(".error-text").innerHTML = "";
});



notifybtn.addEventListener("click",e => {
    e.preventDefault()
    if(inputElement.value.match(pattren)){
        document.querySelector(".error-text").innerHTML = "";
        inputElement.style.borderColor = "#04AA6D";
    }else{
        document.querySelector(".error-text").innerHTML = "Please enter a valid email address";
        inputElement.style.borderColor = "var(--light-red)";
    }
});

