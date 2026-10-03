/* La Coquille des Sucs — petits comportements du site */
(function () {
  document.documentElement.classList.remove('no-js');

  /* ---- Menu mobile ---- */
  var nav = document.getElementById('main-nav');
  var toggle = document.querySelector('.nav-toggle');
  var closeBtn = document.querySelector('.nav-close');

  function setNav(open) {
    if (!nav) return;
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (toggle) toggle.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  document.addEventListener('click', function (e) {
    if (document.body.classList.contains('nav-open') && !nav.contains(e.target) && !toggle.contains(e.target)) setNav(false);
  });

  /* ---- Sens du glissement entre les pages ----
     On compare la position des pages dans le menu : vers la droite du menu,
     la page arrive par la droite ; vers la gauche, elle arrive par la gauche. */
  var order = ['index', 'elevage', 'produits', 'visites', 'points-de-vente', 'contact', 'mentions-legales'];
  function pageKey(url) {
    var name = new URL(url, location.href).pathname.split('/').pop().replace('.html', '');
    return name === '' ? 'index' : name;
  }
  window.addEventListener('pagereveal', function (e) {
    if (!e.viewTransition || !window.navigation || !navigation.activation || !navigation.activation.from) return;
    var from = order.indexOf(pageKey(navigation.activation.from.url));
    var to = order.indexOf(pageKey(location.href));
    if (from > -1 && to > -1 && to < from) e.viewTransition.types.add('back');
  });

  /* ---- Apparition douce au défilement ---- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Année du pied de page ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---- Jour du marché mis en avant ---- */
  var today = new Date().getDay(); // 0 = dimanche
  document.querySelectorAll('[data-day]').forEach(function (el) {
    if (el.getAttribute('data-day').split(',').indexOf(String(today)) > -1) el.classList.add('is-today');
  });

  /* ---- Formulaire de contact ----
     Sans serveur, le formulaire prépare un e-mail dans la messagerie du
     visiteur. (Voir le README pour brancher un vrai service d'envoi.) */
  var form = document.getElementById('contact-form');
  if (form && form.getAttribute('data-mode') === 'mailto') {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var f = form.elements;
      var subject = f.sujet.value + ' — ' + f.nom.value;
      var body = f.message.value + '\n\n' + f.nom.value +
        (f.telephone.value ? '\nTél. : ' + f.telephone.value : '') +
        '\nE-mail : ' + f.email.value;
      location.href = 'mailto:' + form.getAttribute('data-to') +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
