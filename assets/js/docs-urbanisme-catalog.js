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
      ficheImages: ['../assets/img/doc-pa-dakhla-2014.png'],
      ficheParagraphs: [
        "L’AUDOE conduit la mise à jour du plan d’aménagement de la ville de Dakhla dans une logique de centralités multiples, d’homogénéité du tissu urbain et d’urbanisme identitaire respectueux de l’environnement.",
        "Le document a été élaboré à l’échelle 1/2000e à partir de la photo aérienne et de la restitution urbaine actualisées ; une commission technique s’est tenue au siège de l’Agence le 26/06/2014.",
        "La fiche ci-jointe résume les informations publiées sur cette page ; la planche graphique illustrant le périmètre est reproduite ci-dessous.",
      ],
    },
    {
      title: 'Plan d’aménagement — zone touristique PK26–PK36 (Al Argoub)',
      communes: ['el argoub', 'argoub', 'al argoub'],
      type: 'pa',
      status: 'homologue',
      year: 2022,
      anchor: 'doc-pa-zone-touristique',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "La zone d’étude s’étend sur la baie d’Oued Eddahab entre le PK26 et le PK36 (commune rurale d’Al Argoub), soit environ 6 322 ha dédiés notamment au tourisme sportif et balnéaire selon le SDAU.",
        "Le plan d’aménagement vise la mise en œuvre du SDAU, l’affectation des zones, la maîtrise de l’urbanisation, les équipements de base et une plateforme référentielle pour les investissements touristiques.",
        "Des variantes à l’échelle 1/5000e ont été examinées fin 2014 ; le passage à l’échelle 1/2000e a été prescrit. Aucune planche graphique n’est publiée ici pour ce document ; la fiche reprend uniquement le texte descriptif.",
      ],
    },
    {
      title: 'Plan d’aménagement du centre de Bir Guandouz',
      communes: ['bir guandouz', 'bir gandouz', 'gandouz', 'lamhiriz'],
      type: 'pa',
      status: 'etude',
      year: 2025,
      anchor: 'doc-pa-bir-guandouz',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "Le centre de Bir Guandouz, situé sur la RN1 à proximité du littoral et de Lamhiriz, fait l’objet d’un plan d’aménagement pour structurer l’habitat, les activités et le paysage urbain.",
        "Le document homologué est visé par le décret n° 2.10.377 du 6 septembre 2010 ; la procédure de centre délimité suit son cours auprès des administrations concernées.",
      ],
    },
    {
      title: 'SDAU de la région Dakhla – Oued Eddahab',
      communes: ['dakhla', 'oued eddahab', 'baie', 'el argoub', 'argoub', 'région', 'péninsule'],
      type: 'sdau',
      status: 'homologue',
      year: 2015,
      anchor: 'doc-sdau-baie',
      pdf: null,
      ficheImages: ['../assets/img/doc-sdau-baie-oued-eddahab.png'],
      ficheParagraphs: [
        "Le schéma directeur d’aménagement urbain (SDAU) de la baie d’Oued Eddahab fixe les orientations stratégiques à l’horizon 2030 sur environ 400 km² : Dakhla, péninsule, rivages de la baie et centre d’El Argoub.",
        "Il vise l’équilibre entre extension urbaine maîtrisée, soutien aux filières pêche, tourisme et agriculture, et préservation de l’environnement de la baie.",
        "Homologation : BO n° 6409 du 02/11/2015, décret n° 2.15.230 du 16 octobre 2015. La carte de synthèse est jointe à cette fiche.",
      ],
    },
    {
      title: 'Plan d’aménagement du centre d’Aousserd',
      communes: ['aousserd'],
      type: 'pa',
      status: 'homologue',
      year: 2001,
      anchor: 'doc-pa-aousserd',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "L’actualisation du plan d’aménagement du centre d’Aousserd (première homologation en 2001) vise à valoriser les atouts du centre tout en intégrant inondations, tempêtes de sable et contraintes hydriques.",
        "L’élaboration s’appuie sur les concertations locales, le PCD communal et les études de protection contre les inondations.",
      ],
    },
    {
      title: 'Rive est de la baie — actualisation du centre d’Al Argoub',
      communes: ['el argoub', 'argoub', 'baie', 'dakhla'],
      type: 'pa',
      status: 'en-cours',
      year: 2014,
      anchor: 'doc-pa-rive-est-argoub',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "Étude lancée en 2014 : plan d’aménagement de la rive Est de la baie (environ 5 500 ha) et actualisation du plan du centre d’Al Argoub (530 ha, précédemment homologué en 2003).",
        "Objectifs : déclinaison du SDAU, renouvellement urbain d’Al Argoub dans une logique de développement durable, structuration des investissements touristiques le long de la rive Est et préservation du paysage.",
      ],
    },
    {
      title: 'Plan d’aménagement du centre de Tawarta',
      communes: ['tawarta', 'dakhla'],
      type: 'pa',
      status: 'homologue',
      year: 2014,
      anchor: 'doc-pa-tawarta',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "Le plan d’aménagement du centre périphérique de Tawarta encadre un noyau urbain complémentaire à Dakhla, en lien avec le SDAU et les potentialités agricoles et touristiques du site.",
        "Homologation publiée au BO n° 2663 du 20 rejeb 1435 (20 mai 2014).",
      ],
    },
    {
      title: 'P.D.A.R du centre de Bir Anzarane',
      communes: ['bir anzarane', 'anzarane', 'imoutlane'],
      type: 'pdar',
      status: 'homologue',
      year: 2015,
      anchor: 'doc-pdar-bir-anzarane',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "Plan de développement d’environ 250 ha pour le centre chef-lieu de Bir Anzarane : droit d’usage des sols, programmation d’équipements et complémentarité avec le village d’Imoutlane.",
        "Homologation : BO n° 6347 du 30 mars 2015. Surfaces indicatives : 72 ha habitat, 9 ha équipements, 8 ha activités, plus espaces de détente et espaces verts.",
      ],
    },
    {
      title: 'P.D.A.R du centre d’Imlili',
      communes: ['imlili', 'labouirda'],
      type: 'pdar',
      status: 'homologue',
      year: 2015,
      anchor: 'doc-pdar-imlili',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "Plan de développement d’environ 145 ha pour équilibrer le centre d’Imlili et le village de pêcheurs de Labouirda, renforcer la centralité communale et maîtriser l’extension urbaine.",
        "Homologation : BO n° 6347 du 30 mars 2015.",
      ],
    },
    {
      title: 'P.D.A.R — N’Tireft, Ain Bida, Lamhiriz',
      communes: ['ntireft', 'tireft', 'ain bida', 'lamhiriz'],
      type: 'pdar',
      status: 'en-cours',
      year: 2014,
      anchor: 'doc-pdar-villages-peche',
      pdf: null,
      ficheImages: [],
      ficheParagraphs: [
        "Trois PDAR pour les villages de pêche N’Tireft, Ain Bida et Lamhiriz, dans la logique des centres émergents de la région et du potentiel halieutique et touristique du littoral.",
        "N’Tireft : variante retenue fin 2014 avec orientation du développement vers le sud (projet de port). Ain Bida : phase diagnostic / 1/5000e. Lamhiriz : marché résilié avec le BET initial.",
      ],
    },
    {
      title: 'Plan de développement — Imoutlane et Labouirda',
      communes: ['imoutlane', 'labouirda', 'bir anzarane', 'imlili'],
      type: 'pdar',
      status: 'etude',
      year: 2014,
      anchor: 'doc-pdar-imoutlane-labouirda',
      pdf: null,
      ficheImages: [
        '../assets/img/doc-pdar-imoutlane-labouirda-plan-1.png',
        '../assets/img/doc-pdar-imoutlane-labouirda-plan-2.png',
        '../assets/img/doc-pdar-imoutlane-labouirda-plan-3.png',
      ],
      ficheParagraphs: [
        "Étude lancée en 2014 pour les plans de développement des villages de pêche Imoutlane (Bir Anzarane) et Labouirda (Imlili), afin d’orienter la croissance des noyaux périphériques et de réduire la pression sur Dakhla.",
        "Les extraits graphiques publiés sur le site (plans de masse, trame viaire et organisation des îlots) sont reproduits dans cette fiche PDF.",
      ],
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
    var useFiche = !d.pdf && d.ficheParagraphs && d.ficheParagraphs.length;
    var downHref = d.pdf ? d.pdf : useFiche ? '#' : mailtoDownload(d.title);
    var downAttr = d.pdf ? ' download' : '';
    var dlClass = useFiche ? ' doc-catalog-dl-fiche' : '';
    var dataAnchor = useFiche ? ' data-anchor="' + esc(d.anchor) + '"' : '';
    var dlRole = useFiche ? ' role="button"' : '';
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
      '<a href="service-taamir.html">Cartographie (Taamir)</a>' +
      '<span class="doc-catalog-sep" aria-hidden="true">|</span>' +
      '<a class="doc-catalog-dl' +
      dlClass +
      '" href="' +
      esc(downHref) +
      '"' +
      downAttr +
      dataAnchor +
      dlRole +
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

  window.AUDOE_DOC_CATALOG = DOCS;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
