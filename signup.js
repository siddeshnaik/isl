const form = document.getElementById("form_one");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpass = document.getElementById("confirmPassword");

form.addEventListener("submit",on_submit);
function on_submit(e){
    e.preventDefault();
    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "" || Cpass.value == ""){
        alert("all fields are mandatory");
    }
    else if(password.value != Cpass.value){
        alert("check the password")
    }
    else{
        window.location.href="courses.html";
    }
}

