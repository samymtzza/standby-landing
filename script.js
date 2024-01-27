/* Intro VIDEO */
document.addEventListener('DOMContentLoaded', (e) => {
  var video = document.getElementById('heroVideo');
  video.play()
    .catch(error => {
      console.error("Error al intentar reproducir el video automáticamente:", error);
    });
});

/* Transicion de cambio de pagina */
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

/* Hero Section */
gsap.from(".hero-content h1", { 
  duration: 1, 
  y: 50, 
  opacity: 0, 
  stagger: 1.5,
  ease: "power3.out" 
});
gsap.from(".hero-content p", { 
  duration: 1, 
  y: 50, 
  opacity: 0, 
  delay: 2.3, 
  ease: "power3.out" 
});

/* Values Animation */
document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: [0.5] }); 
  document.querySelectorAll('.value-item').forEach(item => {
    observer.observe(item); 
  });
});

/* Dynamic Indicators */
document.addEventListener("DOMContentLoaded", function() {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.textContent = Math.floor(progress * (end - start) + start).toLocaleString("en-US");
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  function fetchDynamicData() {
    return {
      affiliatesCount: 154,
      ordersCompleted: 1290,
      tonsDelivered: 987 
    };
  }
  function updateIndicators(data) {
    animateValue(document.getElementById('affiliatesCount'), 0, data.affiliatesCount, 1000);
    animateValue(document.getElementById('ordersCompleted'), 0, data.ordersCompleted, 1000);
    animateValue(document.getElementById('tonsDelivered'), 0, data.tonsDelivered, 1000); 
  }
  let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const dynamicData = fetchDynamicData();
        updateIndicators(dynamicData);
        
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const countersSection = document.getElementById('dynamicIndicatorsSection'); 
  observer.observe(countersSection);
});

/* Clients - Swiper */
const swiper = new Swiper('.client-swiper', {
  slidesPerView: 1,  
  spaceBetween: 20,
  loop: false, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

/* Join Us - Application Form */
document.addEventListener('DOMContentLoaded', function() {
  var applyButton = document.getElementById('applyBtn');
  var form = document.getElementById('applicationForm');
  applyButton.addEventListener('click', function() {
    form.style.display = 'block';
    applyButton.style.display = 'none';
  });
  document.getElementById('driverApplication').addEventListener('submit', function(e) {
    e.preventDefault();
    setTimeout(function() {
      alert('Pronto nos pondremos en contacto contigo!');
      form.style.display = 'none';
      applyButton.style.display = 'block';
    }, 1000);
  });
});

/* FAQ */
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.getElementsByClassName("accordion");
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
      this.classList.toggle("faq-active");

      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});

/* Testimonials */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.review-slide');
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      slide.style.display = 'none'; 
      if(i === index) {
        slide.classList.add('active');
        slide.style.display = 'block'; 
      }
    });
  }
  let currentSlide = 0;
  showSlide(currentSlide); 

  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
  document.querySelector('.next').addEventListener('click', () => changeSlide(1));
  setInterval(() => {
    changeSlide(1);
  }, 5000); 
});



