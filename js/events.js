// Eventos Load y DOMContentLoeaded 

console.log(3);
window.addEventListener('load', function(){ //Load Espero que JS y todo los archviso que dependen del HTML estn listo 
    console.log('2');
});
console.log(4);

document.addEventListener('DOMContentLoaded', function(){ //Solo espera por el HTML, pero no espera CSS o Imagenes, al verificar realiza CallBack
    console.log(5);
})


document.addEventListener('DOMContentLoaded', imprimir);

function imprimir(){
    console.log("Hola mundo");
}

// Seleccionar elemento y asociarle un evento 
const btnEnviar = document.querySelector('#btn');
let datos1 = document.querySelector('#nombre').value;
let datos2 = document.querySelector('#apellidos').value;
let comentario = document.querySelector('#comentario');
let i = 0;

btnEnviar.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();
    i +=1;
    console.log(i);
    let resultado = parseInt(datos1) + parseInt(datos2);
    comentario.textContent = resultado.toString();
    
});

