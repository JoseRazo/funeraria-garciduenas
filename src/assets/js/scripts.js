/* SCRIPT PARA EFECTOS PARALAX */
const parallaxEls = document.querySelectorAll("[data-speed]");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
    const transformY = this.pageYOffset * parallaxEl.dataset.speed;
    if (parallaxEl.classList.contains("paralax-title")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
    } else if (parallaxEl.classList.contains("paralax-subtitle")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
    } else {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    }
  }
}
/* FIN DE SCRIPT PARA EFECTOS PARALAX */

/* SCRIPTS PARA EFECTOS SCROLLTOP DEL NAVBAR */
$(window).scroll(function () {
  if ($(document).scrollTop() > 150) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
/* FIN DE SCRIPT PARA EFECTOS SCROLLTOP DEL NAVBAR */

/* SCRIPTS SMOOTHSCROLL PARA ENLACES href=#servicios */
$('.smooth').click(function () {
  var elementClicked = $(this).attr("href");
  var destination = $(elementClicked).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 15 }, 800);
  return false;
});
/* FIN DE SCRIPT SMOOTHSCROLL */

// VALIDACION PARA INPUTS EN FORMULARIOS
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
// FIN DE VALIDACION PARA INPUTS EN FORMULARIOS

//SVRIPT OBTENER EL AÑO ACTUAL
var year = (new Date).getFullYear();
$(document).ready(function () {
  $("#fecha").text(year);
});
//FIN SCRIPT OBTENER EL AÑO ACTUAL

// Boton ir arriba
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('a.scroll-top').fadeIn('slow');

    } else {
      $('a.scroll-top').fadeOut('slow');
    }
  });

  $('a.scroll-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
// Fin Boton ir arriba

  /* SCRIPTS PARA ANIMACIONES */
  var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
  }
  $('.aniview').AniView();
/* FIN DE SCRIPT PARA ANIMACIONES */