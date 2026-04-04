(function () {
  const root = document.querySelector('[data-procedure-tabs]');
  if (!root) return;

  const tablist = root.querySelector('[role="tablist"]');
  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));

  function activate(index, updateHash) {
    const i = Math.max(0, Math.min(index, tabs.length - 1));
    tabs.forEach((tab, j) => {
      const on = j === i;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
    });
    panels.forEach((panel, j) => {
      if (!panel) return;
      if (j === i) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
    if (
      updateHash &&
      typeof history !== 'undefined' &&
      history.replaceState
    ) {
      const hash = i === 0 ? '#procedure-moins-50k' : '#procedure-plus-50k';
      const url = new URL(window.location.href);
      url.hash = hash;
      history.replaceState(null, '', url.pathname + url.search + hash);
    }
  }

  function indexFromHash() {
    const h = (window.location.hash || '').toLowerCase();
    if (h === '#procedure-plus-50k' || h === '#plus-50k') return 1;
    return 0;
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      activate(i);
      tab.focus();
    });
  });

  if (tablist) {
    tablist.addEventListener('keydown', (e) => {
      const current = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
      if (current < 0) return;
      let next = current;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        next = (current + 1) % tabs.length;
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        next = (current - 1 + tabs.length) % tabs.length;
        e.preventDefault();
      } else if (e.key === 'Home') {
        next = 0;
        e.preventDefault();
      } else if (e.key === 'End') {
        next = tabs.length - 1;
        e.preventDefault();
      }
      if (next !== current) {
        activate(next, true);
        tabs[next].focus();
      }
    });
  }

  window.addEventListener('hashchange', () => activate(indexFromHash(), false));

  activate(indexFromHash(), false);
})();
