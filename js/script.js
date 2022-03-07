document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });



  // lazy load 

let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
	image.setAttribute("src", image.getAttribute("data-src"));
	image.onload = () => {
		image.removeAttribute("data-src");
	};
};
if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if (item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach((img) => {
		observer.observe(img);
	});
} else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}




 
//Gallery

/* variables */
const btnCierra = document.querySelector('#btn-cierre');

const btnAdelantar = document.querySelector('#btn-adelantar');

const btnRetroceder = document.querySelector('#btn-retroceder');

const imagenes = document.querySelectorAll('#gallery img');

const lightbox = document.querySelector('#contenedor-principal');

const imagenActiva = document.querySelector('#imagen-activa');
let indiceImagen = 0;

/*abre lightbox */
const abrelightbox = (event) =>{
	imagenActiva.src = event.target.src;
	lightbox.style.display = 'flex';
	indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen, i) => {
	imagen.addEventListener('click', abrelightbox);

});

/*cerrar lightbox */
btnCierra.addEventListener('click', (event) => {
	lightbox.style.display = 'none';

});

/*adelantar imagen */
const adelantarimagen = () => {

	if(indiceImagen === imagenes.length -1){
		indiceImagen = -1;
	}
	imagenActiva.src = imagenes[indiceImagen + 1].src;
	indiceImagen++;
};

btnAdelantar.addEventListener('click', adelantarimagen);

/* retroceder lightbox */

const retrocederImagen = () => {

	if(indiceImagen === 0){
		indiceImagen = imagenes.length;
	}
	imagenActiva.src = imagenes[indiceImagen - 1].src;
	indiceImagen--;
};

btnRetroceder.addEventListener('click', retrocederImagen);