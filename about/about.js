window.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('loaded');
});

/* Burger Menu */
document.addEventListener('DOMContentLoaded', (event) => {
  const hamburger = document.getElementById('hamburger');
  const navigation = document.getElementById('navigation');
  const navLinks = navigation.querySelectorAll('a');
  const closeButton = document.querySelector('.close-nav');
  
  function closeNav() {
    navigation.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });
  closeButton.addEventListener('click', closeNav);
  document.addEventListener('click', function(event) {
    const isClickInside = navigation.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
      closeNav();
    }
  });
});
 
/* Values Description */
document.addEventListener('DOMContentLoaded', function () {
    var valorActivo = null;
    window.mostrarDescripcion = function(elemento) {
      if (valorActivo) {
        valorActivo.classList.remove('activo');
        valorActivo.querySelector('.descripcion-valor').style.display = 'none';
      }
      if (valorActivo === elemento) {
        valorActivo = null;
      } else {
        elemento.classList.add('activo');
        elemento.querySelector('.descripcion-valor').style.display = 'block';
        valorActivo = elemento;
      }
    };
    document.addEventListener('click', function(e) {
      if (valorActivo && !valorActivo.contains(e.target)) {
        valorActivo.classList.remove('activo');
        valorActivo.querySelector('.descripcion-valor').style.display = 'none';
        valorActivo = null;
      }
    });
  });
  
  
  
  

  
  
  
  
  