"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#pswd"),
    password_check = document.querySelector("#pswd-chk"),
    signupBtn = document.querySelector("#btn");

signupBtn.addEventListener("click", signup);  

function signup() {
    const req = {
        id : id.value,
        name : name.value,
        pswd : password.value,
        pswd_chk : password_check.value
    };
    fetch("/signup", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/login";
            } else {
                alert(res.message);
            }
        }) 
            .catch(() => {
                console.error("회원가입 에러");
            });
}