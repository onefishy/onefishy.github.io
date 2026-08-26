(function () {
  var navLinks = document.querySelectorAll('.site-navigation li[data-anchor]');
  var targets = document.querySelectorAll('#top, main section[id]');
  if (!navLinks.length || !targets.length || !('IntersectionObserver' in window)) return;

  function setActive(id) {
    navLinks.forEach(function (li) {
      li.classList.toggle('active', li.getAttribute('data-anchor') === id);
    });
  }

  var nav = document.querySelector('.site-navigation');
  var navHeight = nav ? nav.offsetHeight : 0;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    rootMargin: '-' + (navHeight + 1) + 'px 0px -55% 0px',
    threshold: 0
  });

  targets.forEach(function (t) { observer.observe(t); });
})();
