import { downloadAudoeFiche, resolvePageUrl } from './audoe-fiche-pdf.mjs';

function slugFromTitle(t) {
  return String(t)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 72) || 'reglementation';
}

function isRegPage() {
  return /reg-(dahirs|decrets|circulaires|arretes)\.html$/i.test(location.pathname);
}

function init() {
  if (!isRegPage()) return;
  var root = document.querySelector('.reg-catalog-root');
  if (!root) return;

  root.addEventListener('click', async function (ev) {
    var btn = ev.target.closest('.reg-fiche-btn--catalog');
    if (!btn) return;

    var title = btn.getAttribute('data-reg-title') || 'Document';
    var file = btn.getAttribute('data-reg-file') || 'document.pdf';

    btn.disabled = true;
    var prev = btn.textContent;
    btn.textContent = 'Génération…';
    try {
      await downloadAudoeFiche({
        title: title,
        subtitleLines: ['Fichier : ' + file],
        bodyParagraphs: [
          'Fiche générée depuis le site de l’Agence urbaine de Dakhla – Oued Eddahab (AUDOE). Elle résume l’entrée sélectionnée dans la rubrique Réglementation et inclut une illustration du siège de l’Agence.',
          'Les liens « Consulter les détails » et « Télécharger » sur la carte permettent d’ouvrir ou d’enregistrer le PDF officiel hébergé sur le site.',
          'Référence : ' + file,
        ],
        imageUrls: [resolvePageUrl('../assets/img/siege-audoe.png')],
        sectionLabel: 'AUDOE — Réglementation',
        fileName: slugFromTitle(title) + '-fiche-audoe.pdf',
      });
    } catch (e) {
      console.error(e);
      alert(
        'Impossible de générer la fiche PDF (connexion ou ouverture en fichier local).'
      );
    } finally {
      btn.disabled = false;
      btn.textContent = prev;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
