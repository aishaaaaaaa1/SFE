import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const pairs = [
  ['https://audakhla.ma/index.php/presentation/creation', 'pages/presentation-creation.html'],
  ['https://audakhla.ma/index.php/presentation/missions-et-attributions', 'pages/presentation-missions.html'],
  ['https://audakhla.ma/index.php/presentation/champs-d-action-territoriale', 'pages/presentation-champs.html'],
  ['https://audakhla.ma/index.php/presentation/organisation-structurelle', 'pages/presentation-organisation.html'],
  ['https://audakhla.ma/index.php/presentation/responsables-auoea', 'pages/presentation-responsables.html'],
  ['https://audakhla.ma/index.php/gestion-urbaine/procedures-d-autorisation', 'pages/gestion-procedures.html'],
  ['https://audakhla.ma/index.php/gestion-urbaine/assistance-technique-et-architecturale', 'pages/gestion-assistance.html'],
  ['https://audakhla.ma/index.php/gestion-urbaine/controle-de-chantier', 'pages/gestion-controle.html'],
  ['https://audakhla.ma/index.php/planification-urbaine/documents-d-urbanisme', 'pages/planif-documents.html'],
  ['https://audakhla.ma/index.php/planification-urbaine/etudes-generales', 'pages/planif-etudes.html'],
  ['https://audakhla.ma/index.php/services-en-ligne/pre-instruction-en-ligne', 'pages/service-preinstruction.html'],
  ['https://audakhla.ma/index.php/services-en-ligne/e-note', 'pages/service-enote.html'],
  ['http://matnuhpv.chikaya.ma/index.php?page=citoyen.AccueilCitoyen', 'pages/service-reclamation.html'],
  ['http://www.chafafiya.ma/demande.php', 'pages/service-demande-info.html'],
  ['https://taamir.gov.ma/karazal/', 'pages/service-taamir.html'],
  ['https://courrier.gov.ma/virtualbo/index.php?page=courrier.FormulaireDemande&amp;idOrg=5373&amp;h=fd60a52d4d38a0c07970b3822d7c5286f0424ec50c7b1109e6d87eebbc3419c0', 'pages/service-bod.html'],
  ['https://audakhla.ma/index.php/reglementation/dahirs', 'pages/reg-dahirs.html'],
  ['https://audakhla.ma/index.php/reglementation/decrets', 'pages/reg-decrets.html'],
  ['https://audakhla.ma/index.php/reglementation/circulaires', 'pages/reg-circulaires.html'],
  ['https://audakhla.ma/index.php/reglementation/arretes', 'pages/reg-arretes.html'],
  ['https://audakhla.ma/index.php/ar/', 'pages/version-arabe.html'],
  ['https://audakhla.ma/index.php/actualites-fr', 'pages/actualites.html'],
  ['https://audakhla.ma/index.php/actualites-fr/204-l-agence-urbaine-de-dakhla-oued-eddahab-celebre-le-mois-urbain-d-octobre-2025-et-la-journee-mondiale-des-villes', 'pages/actu-mois-urbain.html'],
  ['https://audakhla.ma/index.php/actualites-fr/202-lancement-de-l-enquete-publique-relative-au-projet-de-plan-d-amenagement-sectoriel-de-la-zone-des-grands-equipements-et-services-bir-gandouz', 'pages/actu-bir-gandouz.html'],
  ['https://audakhla.ma/index.php/actualites-fr/136-sm-le-roi-preside-a-dakhla-la-ceremonie-de-lancement-des-programmes-de-developpement-des-regions-dakhla-oued-eddahab-et-guelmim-oued-noun-et-de-signature-des-contrats-programmes-y-afferents', 'pages/actu-roi-dakhla.html'],
  ['https://audakhla.ma/index.php/galerie-multimedia', 'pages/galerie.html'],
  ['https://audakhla.ma/index.php/avis-et-annonces', 'pages/avis-annonces.html'],
  ['https://audakhla.ma/index.php/plan-de-site', 'pages/plan-site.html'],
];

for (const [a, b] of pairs) {
  html = html.split(a).join(b);
}

html = html.replace(/href="https:\/\/audakhla\.ma\/"/g, 'href="index.html"');

fs.writeFileSync(path.join(root, 'index.html'), html, 'utf8');
console.log('Patched index.html');
