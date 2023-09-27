'use strict';
const form = document.getElementById("form");
const namesInput = document.getElementById("names");
const lastNamesInput = document.getElementById("lastNames");
const mailInput = document.getElementById("mail");
const celphoneInput = document.getElementById("celphone");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Lógica de validación aquí
    validarInput(namesInput, /^[A-Za-z]+$/); // Solo letras para nombres
    validarInput(lastNamesInput, /^[A-Za-z]+$/); // Solo letras para apellidos
    validarInput(mailInput, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/); // Validación de correo electrónico
    validarInput(celphoneInput, /^\d+$/); // Solo números para celular
});

namesInput.addEventListener("input", function() {
    validarInput(namesInput, /^[A-Za-z]+$/);
});
lastNamesInput.addEventListener("input", function() {
    validarInput(lastNamesInput, /^[A-Za-z]+$/);
});
mailInput.addEventListener("input", function() {
    validarInput(mailInput, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
});
celphoneInput.addEventListener("input", function() {
    validarInput(celphoneInput, /^\d+$/);
});

function validarInput(input, regex) {
    const valor = input.value.trim();
    const esValido = regex.test(valor);
    if (esValido) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

