(function () {
  var header = document.getElementById('header');
  var isHomeHeader = header && !document.body.classList.contains('page-inner');

  function syncHeaderScrolled() {
    if (!header || document.body.classList.contains('page-inner')) return;
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  if (isHomeHeader) {
    syncHeaderScrolled();
    window.addEventListener('scroll', syncHeaderScrolled, { passive: true });
    window.addEventListener('pageshow', function (e) {
      syncHeaderScrolled();
      if (e.persisted && header && document.activeElement && header.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    });
  }

  window.toggleMenu = function () {
    var m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('open');
  };

  document.querySelectorAll('.mobile-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      var m = document.getElementById('mobileMenu');
      if (m) m.classList.remove('open');
    });
  });

  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e, i) {
          if (e.isIntersecting) {
            setTimeout(function () {
              e.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  function animateCounter(el, target, duration) {
    duration = duration || 1800;
    var start = 0;
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      var span = el.querySelector('span');
      var prefix = span ? span.outerHTML : '';
      el.innerHTML = prefix + current;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var statNums = document.querySelectorAll('.stat-num[data-target]');
  if (statNums.length && 'IntersectionObserver' in window) {
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            animateCounter(el, parseInt(el.dataset.target, 10));
            statsObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNums.forEach(function (el) {
      statsObserver.observe(el);
    });
  }
})();
