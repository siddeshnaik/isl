//form validation
const myForm = document.getElementById("form_two");
const myEmail = document.getElementById("email");
const myPassword = document.getElementById("password");
const msg = document.querySelector("msg");

myForm.addEventListener("submit",on_submit);
function on_submit(e){
    e.preventDefault();
    if(myEmail.value == ""|| myPassword.value == ""){
        alert("all fields are mandatory");
    }
    else{
        window.location.href="courses.html";
    }
}
