// levanto los campos del formulario de registro que voy a validar
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const pais = document.getElementById('pais');
const terminos = document.getElementById('terminos');
const formRegistro = document.getElementById('form-registro');
// levanto los campos de error
const errorNombre = document.getElementById('error-nombre');
const errorApellido = document.getElementById('error-apellido');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const errorFechaNacimiento = document.getElementById('error-fechaNac');
const errorPais = document.getElementById('error-pais');
const errorTerminos = document.getElementById('error-terminos');

//si se termino de cargar el dom
document.addEventListener('DOMContentLoaded', function() {

        //en el evento submit valido que los campos esten llenos y no dejo que se envie automaticamente el formulario
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("entro a la funcion");
            // limpio los mensajes de error
            errorNombre.innerText = "";
            errorApellido.innerText = "";
            errorEmail.innerText = "";
            errorPassword.innerText = "";
            errorFechaNacimiento.innerText = "";
            errorPais.innerText = "";
            errorTerminos.innerText = "";

            if (nombre.value === '' || nombre.value == null) {
                e.preventDefault();
                errorNombre.innerText = "El nombre es obligatorio";
            }
            if (apellido.value === '' || apellido.value == null) {
                e.preventDefault();
                errorApellido.innerText = "El apellido es obligatorio";
            }
            if (email.value === '' || email.value == null) {
                e.preventDefault();
                errorEmail.innerText = "El correo electrónico es obligatorio";
            }
            if (password.value === '' || password.value == null) {
                e.preventDefault();
                errorPassword.innerText = "La contraseña es obligatoria";
            }
            if (fechaNacimiento.value === '' || fechaNacimiento.value == null) {
                e.preventDefault();
                errorFechaNacimiento.innerText = "La fecha de nacimiento es obligatoria";
            }
            if (pais.value === '' || pais.value == null) {
                e.preventDefault();
                errorPais.innerText = "El país es obligatorio";
            }
            if (!terminos.checked) {
                e.preventDefault();
                errorTerminos.innerText = "Debes aceptar los términos y condiciones";
            }


        });

});

// no se valida cuando toca tabb y enter, solo al momento de precionar el submit
