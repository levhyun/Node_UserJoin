"use strict"

const id = document.querySelector("#id"),
    password = document.querySelector("#pswd"),
    loginBtn = document.querySelector("#btn");

loginBtn.addEventListener("click", login);  

function login() {
    const req = {
        id : id.value,
        pswd : password.value
    };
    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/";
            } else {
                alert(res.message);
            }
        }) 
            .catch((err) => {
                console.error("로그인 에러");
            });
}