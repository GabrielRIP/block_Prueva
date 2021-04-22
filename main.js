const open = document.getElementById('open');
const close = document.getElementById('close');
const options = document.getElementById('options');
const title = document.getElementById('nav__title');
const navBar = document.querySelector('.nav');
const optionBtn = document.querySelector('.nav .nav__btn');

//Maquina de escribir
const maquinita = (text = '', tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('');
  etiqueta.innerHTML;
  let cont = 0;
  let escribir = setInterval(function() {
    etiqueta.innerHTML += arrayCaracteres[cont];
    cont++;
    if(cont ===arrayCaracteres.length) {
      cont = 0;
      etiqueta.innerHTML = '';
    }
  }, tiempo);
}
maquinita("_ I'm Creep _        ", 295, title);


//Media, a partir de la resolucion de 768px
let mq768 = window.matchMedia('(min-width: 768px)');

const mediaQuery = (mq768) => {
  if(mq768.matches) {
    navBar.style.backgroundColor = '#132c33';
    options.style.display = 'grid';
    options.style.backgroundColor = 'transparent';
    title.classList.remove('nav__title2');
    title.classList.add('nav__title');
    
  } else {
    options.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';

    //Eventos para cuando se da click en el botton de la hamburguesa
    open.addEventListener('click', ()=> {
      open.style.display = 'none';
      close.style.display = 'block';
      title.classList.remove('nav__title');
      title.classList.add('nav__title2');
      options.style.display = 'block';
      navBar.style.backgroundColor = '#126e82';
      options.style.backgroundColor = '#126e82';
    });

    close.addEventListener('click', ()=> {
      close.style.display = 'none';
      open.style.display = 'block';
      title.classList.remove('nav__title2');
      title.classList.add('nav__title');
      options.style.display = 'none';
      navBar.style.backgroundColor = '#132c33';
      options.style.backgroundColor = '#126e82';
    });
  }
}
mediaQuery(mq768);
mq768.addListener(mediaQuery);
