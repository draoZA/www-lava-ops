(function () {
  'use strict';

  // Mobile menu
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Carousels: each .feature-carousel has .carousel-track and prev/next buttons
  document.querySelectorAll('.feature-carousel').forEach(function (wrap) {
    var track = wrap.querySelector('.carousel-track');
    var prev = wrap.querySelector('.carousel-prev');
    var next = wrap.querySelector('.carousel-next');
    if (!track || !prev || !next) return;

    var slides = track.querySelectorAll('.carousel-slide');
    var total = slides.length;
    var index = 0;

    function goTo(i) {
      index = (i + total) % total;
      track.style.transform = 'translateX(-' + index * 100 + '%)';
    }

    prev.addEventListener('click', function () { goTo(index - 1); });
    next.addEventListener('click', function () { goTo(index + 1); });
  });

  // Contact: build mailto on click (bot protection)
  var contactLink = document.getElementById('contact-email-link');
  if (contactLink) {
    contactLink.addEventListener('click', function (e) {
      e.preventDefault();
      var user = contactLink.getAttribute('data-user');
      var domain = contactLink.getAttribute('data-domain');
      if (user && domain) {
        window.location.href = 'mailto:' + user + '@' + domain;
      }
    });
  }
})();
