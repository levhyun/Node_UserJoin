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
    user_name = document.querySelector("#name"),
    password = document.querySelector("#pswd"),
    password_check = document.querySelector("#pswd-chk"),
    signupBtn = document.querySelector("#btn");

signupBtn.addEventListener("click", signup);  

function signup() {
    if(!id.value || !user_name.value || !password.value || !password_check.value) {
        createToast('info', 'The sign up input box is empty.');
        return;
    }
    if(password.value !== password_check.value) {
        createToast('warning', 'Password mismatch');
        return;
    }

    const req = {
        id : id.value,
        name : user_name.value,
        pswd : password.value
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
                createToast('errer', 'Error occurred during sign up');
            });
}