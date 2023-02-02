"use strict"

const notifications = document.querySelector(".notifications");

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); 
    setTimeout(() => toast.remove(), 500);
}

const createToast = () => {
    const toast = document.createElement("li"); 
    toast.className = `toast success`; 
    toast.innerHTML = `
    <div class="column">
        <i class="fa-solid fa-circle-check"></i>
        <span>Login succeeded</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
    `;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), 5000);
}

createToast();