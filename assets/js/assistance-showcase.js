(function () {
  let lightboxEl = null;

  function ensureLightbox() {
    if (lightboxEl) return lightboxEl;
    const el = document.createElement('div');
    el.className = 'assistance-lightbox';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Visuel agrandi');
    el.innerHTML =
      '<div class="assistance-lightbox__backdrop" tabindex="-1"></div>' +
      '<div class="assistance-lightbox__panel">' +
      '<button type="button" class="assistance-lightbox__close" aria-label="Fermer">' +
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
      '</button>' +
      '<img class="assistance-lightbox__img" alt="" decoding="async" />' +
      '</div>';
    el.hidden = true;
    document.body.appendChild(el);
    const img = el.querySelector('.assistance-lightbox__img');
    const close = () => {
      el.classList.remove('is-open');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      window.setTimeout(() => {
        el.hidden = true;
      }, 280);
    };
    function onKey(e) {
      if (e.key === 'Escape') close();
    }
    el.querySelector('.assistance-lightbox__backdrop').addEventListener('click', close);
    el.querySelector('.assistance-lightbox__close').addEventListener('click', close);
    lightboxEl = {
      el,
      img,
      open: (src, alt) => {
        img.src = src;
        img.alt = alt || '';
        el.hidden = false;
        el.classList.remove('is-open');
        void el.offsetWidth;
        requestAnimationFrame(() => {
          el.classList.add('is-open');
        });
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);
        requestAnimationFrame(() =>
          el.querySelector('.assistance-lightbox__close').focus()
        );
      },
      close,
    };
    return lightboxEl;
  }

  document.querySelectorAll('[data-assistance-showcase]').forEach((root) => {
    const hero = root.querySelector('.assistance-showcase__hero');
    const cap = root.querySelector('.assistance-showcase__cap');
    const expandBtn = root.querySelector('.assistance-showcase__expand');
    const chips = Array.from(
      root.querySelectorAll('.assistance-showcase__chip[role="tab"]')
    );
    const prev = root.querySelector('.assistance-showcase__nav--prev');
    const next = root.querySelector('.assistance-showcase__nav--next');
    const wrap = root.querySelector('.assistance-showcase__img-wrap');

    if (!hero) return;

    const lb = ensureLightbox();

    function openLb() {
      lb.open(hero.src, hero.alt);
    }

    expandBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      openLb();
    });
    wrap?.addEventListener('click', (e) => {
      if (e.target.closest('.assistance-showcase__expand')) return;
      openLb();
    });

    if (chips.length <= 1) return;

    let idx = chips.findIndex((c) => c.classList.contains('is-active'));
    if (idx < 0) idx = 0;

    function apply(i) {
      const n = chips.length;
      idx = ((i % n) + n) % n;
      const chip = chips[idx];
      const src = chip.getAttribute('data-src');
      const alt = chip.getAttribute('data-alt') || '';
      const caption = chip.getAttribute('data-caption') || '';
      if (src) {
        hero.classList.add('is-switching');
        const img = new Image();
        img.onload = () => {
          hero.src = src;
          hero.alt = alt;
          hero.classList.remove('is-switching');
        };
        img.onerror = () => hero.classList.remove('is-switching');
        img.src = src;
      }
      if (cap) cap.textContent = caption;
      chips.forEach((c, j) => {
        c.classList.toggle('is-active', j === idx);
        c.setAttribute('aria-selected', j === idx ? 'true' : 'false');
      });
    }

    chips.forEach((chip, i) => {
      chip.addEventListener('click', () => apply(i));
    });
    prev?.addEventListener('click', () => apply(idx - 1));
    next?.addEventListener('click', () => apply(idx + 1));

    root.addEventListener('keydown', (e) => {
      if (e.target.closest('.assistance-showcase__chip')) return;
      if (e.key === 'ArrowLeft') {
        apply(idx - 1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        apply(idx + 1);
        e.preventDefault();
      }
    });

    let touchStartX = null;
    wrap?.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    wrap?.addEventListener(
      'touchend',
      (e) => {
        if (touchStartX == null) return;
        const dx = e.changedTouches[0].screenX - touchStartX;
        touchStartX = null;
        if (Math.abs(dx) < 48) return;
        if (dx < 0) apply(idx + 1);
        else apply(idx - 1);
      },
      { passive: true }
    );
  });
})();
