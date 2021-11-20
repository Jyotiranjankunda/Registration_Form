var Name = document.getElementById("name"), 
    phone = document.getElementById("phone"), 
    regno = document.getElementById("regno"), 
    dob = document.getElementById("dob"), 
    email = document.getElementById("email"), 
    branch = document.getElementById("branch"), 
    domain = document.getElementById("domain"), 
    fb = document.getElementById("fb"), 
    insta = document.getElementById("insta"), 
    twitter = document.getElementById("twitter"), 
    github = document.getElementById("github"),
    submit = document.getElementById("submit");
 

document.addEventListener('change',()=>{
    localStorage.setItem("name", Name.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("regno", regno.value);
    localStorage.setItem("dob", dob.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("branch", branch.value);
    localStorage.setItem("domain", domain.value);
    localStorage.setItem("fb", fb.value);
    localStorage.setItem("insta", insta.value);
    localStorage.setItem("twitter", twitter.value);
    localStorage.setItem("github", github.value);
    localStorage.setItem("submit",0);
});

 
var submit = localStorage.getItem("submit");
 

if (submit==0){
    Name.value = localStorage.getItem("name");    
    phone.value = localStorage.getItem("phone");
    regno.value = localStorage.getItem("regno");
    dob.value = localStorage.getItem("dob");
    email.value = localStorage.getItem("email"); 
    branch.value = localStorage.getItem("branch");
    domain.value = localStorage.getItem("domain");
    fb.value = localStorage.getItem("fb");
    insta.value = localStorage.getItem("insta");
    twitter.value =localStorage.getItem("twitter");
    github.value = localStorage.getItem("github");
}

function saveData() { 
    if (validation()) {
        localStorage.setItem("name", Name.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("regno", regno.value);
        localStorage.setItem("dob", dob.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("branch", branch.value);
        localStorage.setItem("domain", domain.value);
        localStorage.setItem("fb", fb.value);
        localStorage.setItem("insta", insta.value);
        localStorage.setItem("twitter", twitter.value);
        localStorage.setItem("github", github.value);
        localStorage.setItem("submit",1);
    }  
}

function validation(){
    if (Name.value == '' || phone.value == '' || regno.value == '' || dob.value == '' || email.value == '' || branch.value == '' || domain.value == '' || fb.value == '' || insta.value == '' || twitter.value == '' || github.value == '') {
        alert("Please fill out all fields");
        return false;
    }
    else if(document.querySelector("#phone").value.length != 10){
        alert("Phone number must be of 10 digits");
        return false;
    }
    return true;
}
