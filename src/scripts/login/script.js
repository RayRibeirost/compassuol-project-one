'use strict';

function validation() {

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const message = document.getElementById('validation-text');
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (!emailInput && !passwordInput) {
        message.style.color = "red";
        message.innerHTML = "Insira seu email e senha";
    } else if (!emailInput.match(pattern)){
        message.style.color = "red";
        message.innerHTML = "Email ou senha inválidos";
    } else if (passwordInput.length < 8) {
        message.style.color = "red";
        message.innerHTML = "Sua senha deve ter 8 caracteres ou mais";
    } else {
        message.style.color = "green";
        message.innerHTML = "Dados ok";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 750);
    };
};
