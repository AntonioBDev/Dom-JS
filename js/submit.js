//Evento de submit 

// objeto 
const datos = {
    nombre: '',
    apellidos: '',
    email: '',
    comentario: ''
}

//Selectores a elementos HTML
const formulario = document.querySelector('.formulario'); //Seleccion del elemento Form
const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const email = document.querySelector('#email');
const comentario = document.querySelector('#comentario');
const fieldset = document.querySelector('fieldset')

// evento leer teclado
nombre.addEventListener('input', leerText);
apellidos.addEventListener('input', leerText);
email.addEventListener('input', leerText);
comentario.addEventListener('input', leerText);
// evento submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
     // Destructuring de  Objetos
    const {nombre, apellidos, email, comentario} = datos;

    //validar formulario 
     if(nombre === '' || apellidos === '' || email === '' || comentario === ''){
        mensajeError('Es necesario llenar todo los campos');
        return;
    }

    //Enviar formulario 
    enviarFormulario('Enviando Formulario');

    //Reset Formulario
});

//Funciones 
// leer texto
function leerText(e){
    datos[e.target.id] = e.target.value
    console.log(datos);
}

function mensajeError(mensaje){
    // console.log(mensaje);
    //Mostrar en pantalla 
    //crear elemento P 
    const errorP = document.createElement('P');
    errorP.textContent = mensaje;
    errorP.classList.add('error');
    fieldset.appendChild(errorP);

    setTimeout(()=>{
        errorP.remove();
    },3000)
}

function enviarFormulario(mensaje){
    const enviarPresentacion = document.createElement('P');
    enviarPresentacion.textContent = mensaje;
    enviarPresentacion.classList.add('notValCor');

    fieldset.appendChild(enviarPresentacion);

    setTimeout(()=>{
        enviarPresentacion.remove();
    },3000)

}


//mostrar en consola 
