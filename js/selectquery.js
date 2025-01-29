//QuerySelector
    const heading = document.querySelector('.title');
    console.log(heading);
    // heading.textContent = '';
    // heading.classList.add('nueva');
    
// querySelectorAll
    const enlaces = document.querySelectorAll('a');
    // console.log(enlaces[0]);
    // enlaces[0].classList.remove('link');

//getElementById
    const logo_img = document.getElementById('logo-img');
    // console.log(logo_img);

//createElement
const nuevo_enlace_a = document.createElement('A');
nuevo_enlace_a.classList.add("link");
nuevo_enlace_a.href = 'contacto.html'
nuevo_enlace_a.textContent = 'Contacto'
// console.log(enlace_a);

const nav = document.querySelector('nav');
nav.appendChild(nuevo_enlace_a);

