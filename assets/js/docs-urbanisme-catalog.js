(function () {
  var MAIL = 'agencedakhla@gmail.com';

  var DOCS = [
    {
      title: "Plan d’aménagement de Dakhla",
      communes: ['dakhla', 'ville de dakhla'],
      type: 'pa',
      status: 'homologue',
      year: 2023,
      anchor: 'doc-pa-dakhla',
      pdf: null,
    },
    {
      title: 'Plan d’aménagement — zone touristique PK26–PK36 (Al Argoub)',
      communes: ['el argoub', 'argoub', 'al argoub'],
      type: 'pa',
      status: 'homologue',
      year: 2022,
      anchor: 'doc-pa-zone-touristique',
      pdf: null,
    },
    {
      title: 'Plan d’aménagement du centre de Bir Guandouz',
      communes: ['bir guandouz', 'bir gandouz', 'gandouz', 'lamhiriz'],
      type: 'pa',
      status: 'etude',
      year: 2025,
      anchor: 'doc-pa-bir-guandouz',
      pdf: null,
    },
    {
      title: 'SDAU de la région Dakhla – Oued Eddahab',
      communes: ['dakhla', 'oued eddahab', 'baie', 'el argoub', 'argoub', 'région', 'péninsule'],
      type: 'sdau',
      status: 'homologue',
      year: 2015,
      anchor: 'doc-sdau-baie',
      pdf: null,
    },
    {
      title: 'Plan d’aménagement du centre d’Aousserd',
      communes: ['aousserd'],
      type: 'pa',
      status: 'homologue',
      year: 2001,
      anchor: 'doc-pa-aousserd',
      pdf: null,
    },
    {
      title: 'Rive est de la baie — actualisation du centre d’Al Argoub',
      communes: ['el argoub', 'argoub', 'baie', 'dakhla'],
      type: 'pa',
      status: 'en-cours',
      year: 2014,
      anchor: 'doc-pa-rive-est-argoub',
      pdf: null,
    },
    {
      title: 'Plan d’aménagement du centre de Tawarta',
      communes: ['tawarta', 'dakhla'],
      type: 'pa',
      status: 'homologue',
      year: 2014,
      anchor: 'doc-pa-tawarta',
      pdf: null,
    },
    {
      title: 'P.D.A.R du centre de Bir Anzarane',
      communes: ['bir anzarane', 'anzarane', 'imoutlane'],
      type: 'pdar',
      status: 'homologue',
      year: 2015,
      anchor: 'doc-pdar-bir-anzarane',
      pdf: null,
    },
    {
      title: 'P.D.A.R du centre d’Imlili',
      communes: ['imlili', 'labouirda'],
      type: 'pdar',
      status: 'homologue',
      year: 2015,
      anchor: 'doc-pdar-imlili',
      pdf: null,
    },
    {
      title: 'P.D.A.R — N’Tireft, Ain Bida, Lamhiriz',
      communes: ['ntireft', 'tireft', 'ain bida', 'lamhiriz'],
      type: 'pdar',
      status: 'en-cours',
      year: 2014,
      anchor: 'doc-pdar-villages-peche',
      pdf: null,
    },
    {
      title: 'Plan de développement — Imoutlane et Labouirda',
      communes: ['imoutlane', 'labouirda', 'bir anzarane', 'imlili'],
      type: 'pdar',
      status: 'etude',
      year: 2014,
      anchor: 'doc-pdar-imoutlane-labouirda',
      pdf: null,
    },
  ];

  var STATUS_LABEL = {
    homologue: 'Homologué',
    'en-cours': 'En cours',
    etude: 'À l’étude',
  };

  var STATUS_CLASS = {
    homologue: 'doc-cat-badge--ok',
    'en-cours': 'doc-cat-badge--progress',
    etude: 'doc-cat-badge--study',
  };

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function mailtoDownload(title) {
    var sub = encodeURIComponent('Demande de document — ' + title);
    var body = encodeURIComponent(
      'Bonjour,\n\nJe souhaite obtenir une copie du document suivant : ' +
        title +
        '.\n\nCordialement,'
    );
    return 'mailto:' + MAIL + '?subject=' + sub + '&body=' + body;
  }

  function cardHtml(d) {
    var badge = STATUS_LABEL[d.status] || d.status;
    var bcls = STATUS_CLASS[d.status] || 'doc-cat-badge--study';
    var downHref = d.pdf ? d.pdf : mailtoDownload(d.title);
    var downAttr = d.pdf ? ' download' : '';
    var icon =
      '<svg class="doc-catalog-card-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/></svg>';
    return (
      '<article class="doc-catalog-card" data-type="' +
      esc(d.type) +
      '">' +
      '<div class="doc-catalog-card-inner">' +
      '<div class="doc-catalog-card-icon" aria-hidden="true">' +
      icon +
      '</div>' +
      '<div class="doc-catalog-card-body">' +
      '<h3 class="doc-catalog-card-title">' +
      esc(d.title) +
      '</h3>' +
      '<div class="doc-catalog-card-meta">' +
      '<span class="doc-cat-badge ' +
      bcls +
      '">' +
      esc(badge) +
      '</span>' +
      '<span class="doc-catalog-year">Année : ' +
      esc(d.year) +
      '</span>' +
      '</div>' +
      '<div class="doc-catalog-actions">' +
      '<a href="#' +
      esc(d.anchor) +
      '">Consulter les détails</a>' +
      '<span class="doc-catalog-sep" aria-hidden="true">|</span>' +
      '<a class="doc-catalog-dl" href="' +
      esc(downHref) +
      '"' +
      downAttr +
      '>Télécharger <svg class="doc-catalog-dl-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></a>' +
      '</div>' +
      '</div></div></article>'
    );
  }

  function normalize(s) {
    return String(s)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function matches(doc, q, typeFilter) {
    if (typeFilter && typeFilter !== 'all' && doc.type !== typeFilter) return false;
    var t = q.trim();
    if (!t) return true;
    var n = normalize(t);
    var hay = normalize(doc.title + ' ' + doc.communes.join(' '));
    return hay.indexOf(n) !== -1;
  }

  function runFilter() {
    var grid = document.getElementById('doc-catalog-grid');
    var countEl = document.getElementById('doc-catalog-count');
    var emptyEl = document.getElementById('doc-catalog-empty');
    var search = document.getElementById('doc-catalog-search');
    var typeSel = document.getElementById('doc-catalog-type');
    if (!grid || !search || !typeSel) return;

    var q = search.value;
    var tf = typeSel.value;
    var list = DOCS.filter(function (d) {
      return matches(d, q, tf);
    });

    grid.innerHTML = list.map(cardHtml).join('');

    var n = list.length;
    if (countEl) {
      countEl.textContent =
        n === DOCS.length
          ? n + ' document' + (n > 1 ? 's' : '') + ' — affichez-les tous ou filtrez.'
          : n + ' résultat' + (n > 1 ? 's' : '') + '.';
    }
    if (emptyEl) emptyEl.hidden = n > 0;
  }

  function init() {
    var grid = document.getElementById('doc-catalog-grid');
    if (!grid) return;

    var search = document.getElementById('doc-catalog-search');
    var typeSel = document.getElementById('doc-catalog-type');
    var btn = document.getElementById('doc-catalog-submit');

    runFilter();

    if (btn) btn.addEventListener('click', runFilter);
    if (search) search.addEventListener('input', runFilter);
    if (typeSel) typeSel.addEventListener('change', runFilter);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
