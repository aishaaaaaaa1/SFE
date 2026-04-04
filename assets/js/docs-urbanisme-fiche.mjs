import { downloadAudoeFiche, resolvePageUrl } from './audoe-fiche-pdf.mjs';

var STATUS_LABEL = {
  homologue: 'Homologué',
  'en-cours': 'En cours',
  etude: 'À l’étude',
};

function findDoc(anchor) {
  var list = window.AUDOE_DOC_CATALOG;
  if (!list || !anchor) return null;
  for (var i = 0; i < list.length; i++) {
    if (list[i].anchor === anchor) return list[i];
  }
  return null;
}

function busy(el, on) {
  if (!el) return;
  if (on) {
    el.setAttribute('data-was-label', el.innerHTML);
    el.innerHTML =
      '<span class="doc-catalog-dl-progress">Génération du PDF…</span>';
    el.setAttribute('aria-busy', 'true');
  } else {
    var w = el.getAttribute('data-was-label');
    if (w) el.innerHTML = w;
    el.removeAttribute('aria-busy');
    el.removeAttribute('data-was-label');
  }
}

var docCatalogGrid = document.getElementById('doc-catalog-grid');
if (!docCatalogGrid) {
  /* page sans catalogue */
} else {
  docCatalogGrid.addEventListener('click', async function (ev) {
  var a = ev.target.closest('a.doc-catalog-dl-fiche');
  if (!a) return;
  ev.preventDefault();
  var anchor = a.getAttribute('data-anchor');
  var doc = findDoc(anchor);
  if (!doc || !doc.ficheParagraphs || !doc.ficheParagraphs.length) return;

  busy(a, true);
  try {
    var status = STATUS_LABEL[doc.status] || doc.status;
    var imgs = (doc.ficheImages || []).map(function (p) {
      return resolvePageUrl(p);
    });
    await downloadAudoeFiche({
      title: doc.title,
      subtitleLines: ['Statut : ' + status + ' — Année : ' + doc.year],
      bodyParagraphs: doc.ficheParagraphs,
      imageUrls: imgs,
      sectionLabel: 'AUDOE — Documents d’urbanisme',
      fileName: doc.anchor + '-fiche-audoe.pdf',
    });
  } catch (e) {
    console.error(e);
    alert(
      'Impossible de générer le PDF (vérifiez la connexion ou ouvrez le site via http(s) plutôt qu’en fichier local).'
    );
  } finally {
    busy(a, false);
  }
  });
}
