// Carrusel de imágenes - Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');

// Función para mostrar la siguiente imagen
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    
  
  slides[slideIndex - 1].style.display = "block";  
}

// Cambiar de imagen cada 5 segundos
setInterval(showSlides, 5000);

// Inicializar el carrusel
showSlides();

// Efecto de desplazamiento suave para enlaces de navegación
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 70, // Desplazamiento para dejar espacio con el menú
      behavior: "smooth"
    });
  });
});

// Efecto de hover en imágenes del equipo
const teamPlayers = document.querySelectorAll('.team .player');

teamPlayers.forEach(player => {
  player.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
  });

  player.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Animación de carga suave
window.addEventListener('load', () => {
  document.body.style.opacity = 1;
  document.body.style.transition = 'opacity 1s ease';
});
