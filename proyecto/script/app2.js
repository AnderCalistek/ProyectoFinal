'use strict';
const buscando = document.getElementById('buscando');
const inputBuscar = document.getElementById('input_buscar');
const listado = document.getElementById('listPrice');
const tem = document.getElementById('template');
//const fragment = document.createDocumentFragment();
const fragment = new DocumentFragment();
const btnEnviar = document.getElementById('btnSend');
const form = document.getElementById('form');

//Objeto validacion
const formValid ={
    nombres: false,
    apellidos: false,
    mail: false,
    celPhone: false,
    politica: false
}

btnEnviar.addEventListener("click",(e) => {
    e.preventDefault();
    if(validInputsForm(formValid)===-1){
        alert("Enviando Formulario");
    }else{
        alert("Campos Invalidos");
    }

});
const validInputsForm = (objeto) =>{
    const values = Object.values(objeto);
    let reponse = values.findIndex(e=>e===false);
    return reponse;
}

form.addEventListener("change",(e) => {
     const inputId = e.target.id;
     console.log(inputId);
     const valueInput = e.target.value;
     console.log(valueInput);
     const classInput = e.target.classList;
     console.log(classInput);
     //Funciones para agregar estilos y quitar estilos
     const isValidClass = () =>{
        classInput.add("is-valid");
        classInput.remove("is-invalid");
     }
     const isInvalidClass = () =>{
        classInput.remove("is-valid");
        classInput.add("is-invalid");
     }
     switch(inputId){
        case "names":
            const nombresRx =
      /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
      formValid.nombres = valueInput.match(nombresRx) ? true : false;
        (formValid.nombres) ? isValidClass(): isInvalidClass();
        console.log(Object.values(formValid));
      break;
      case "lastNames":
            const apellidosRx =
        /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        formValid.apellidos = valueInput.match(apellidosRx) ? true : false; 
        (formValid.apellidos) ? isValidClass(): isInvalidClass();
        console.log(Object.values(formValid));
      case "mail":
        const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        formValid.mail = valueInput.match(mailRx) ? true : false;
        (formValid.mail) ? isValidClass(): isInvalidClass();
        break;

}
    // const inputField = document.getElementById('inputField');

// inputField.addEventListener('input', () => {
//  const inputValue = inputField.value;
  //const pattern = [A-Za-z]


  //if (pattern.test(inputValue)) {
   // inputField.classList.remove('invalid');
    // inputField.classList.add('valid');
 // } else {
   // inputField.classList.remove('valid');
   // inputField.classList.add('invalid');
  //}
//});
});



