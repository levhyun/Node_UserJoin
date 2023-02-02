"use strict"

//////////////////////////////////////////////////////////////////////////////////////////

const notifications = document.querySelector(".notifications");

const toastDetails = {
    timer: 5000,
    error: {
        icon: 'fa-circle-xmark',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
    },
    info: {
        icon: 'fa-circle-info',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); 
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id, text) => {
    const { icon } = toastDetails[id];
    const toast = document.createElement("li"); 
    toast.className = `toast ${id}`; 
    toast.innerHTML = `
    <div class="column">
        <i class="fa-solid ${icon}"></i>
        <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
    `;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

//////////////////////////////////////////////////////////////////////////////////////////

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
            if(res.chk === 'success') {
                location.href = "/";
            } else {
                createToast(res.chk, res.text);
            }
        }) 
            .catch((err) => {
                createToast('errer', 'Error occurred during login');
            });
}
