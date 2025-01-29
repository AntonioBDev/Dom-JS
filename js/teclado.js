//Evento input y textarea
//objeto 
const datos = {
    nombre: '',
    apellidos: '',
    email: '',
    comentario: ''
};


const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellidos');
const email = document.querySelector('#email');
const comentario = document.querySelector('#comentario');

nombre.addEventListener('input',leerTexto)
apellido.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
comentario.addEventListener('input', leerTexto);

function leerTexto(e){
    console.log(e.target.value)
    datos[e.target.id] = e.target.value
    console.log(datos);
}