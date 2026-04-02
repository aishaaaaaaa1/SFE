import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AUD_PAGE_UPDATES } from './audakhla-bodies.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const P = {
  'presentation-creation.html': {
    title: 'Création · AUDOE Dakhla',
    tag: 'Présentation',
    heading: 'Création de l’Agence',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Présentation'],
      ['Création'],
    ],
    body: `<p>L’Agence Urbaine de Dakhla – Oued Eddahab (AUDOE) est un établissement public créé pour accompagner le développement urbain harmonieux de la région. Sa création s’inscrit dans la politique nationale d’aménagement du territoire et de décentralisation des compétences en matière d’urbanisme.</p>
<p>L’AUDOE regroupe les missions de planification, d’instruction des autorisations et de contrôle sur le périmètre de la région Dakhla-Oued Eddahab et Aousserd.</p>
<h2>Périmètre et missions</h2>
<p>Les missions couvrent l’élaboration des documents d’urbanisme, le suivi des opérations d’aménagement et la coordination avec les collectivités et les partenaires institutionnels.</p>`,
  },
  'presentation-missions.html': {
    title: 'Missions et attributions · AUDOE',
    tag: 'Présentation',
    heading: 'Missions et attributions',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Présentation'],
      ['Missions'],
    ],
    body: `<p>L’AUDOE assure la planification et la gestion de l’espace urbain : schémas directeurs, plans d’aménagement, documents d’urbanisme et suivi de leur mise en œuvre.</p>
<ul>
<li>Instruction et pré-instruction des demandes d’autorisation d’urbanisme ;</li>
<li>Contrôle de conformité des constructions et des lotissements ;</li>
<li>Assistance technique et architecturale aux porteurs de projets ;</li>
<li>Veille réglementaire et information des usagers.</li>
</ul>`,
  },
  'presentation-champs.html': {
    title: 'Champs d’action territoriale · AUDOE',
    tag: 'Présentation',
    heading: 'Champs d’action territoriale',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Présentation'],
      ['Champs d’action'],
    ],
    body: `<p>L’action de l’Agence couvre l’ensemble des communes de la région et les zones d’expansion urbaine identifiées dans les documents d’urbanisme.</p>
<p>Des dispositifs spécifiques peuvent s’appliquer aux zones côtières, aux pôles économiques et aux projets structurants relevant de la compétence de l’État.</p>`,
  },
  'presentation-organisation.html': {
    title: 'Organisation structurelle · AUDOE',
    tag: 'Présentation',
    heading: 'Organisation structurelle',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Présentation'],
      ['Organisation'],
    ],
    body: `<p>L’AUDOE est organisée en directions et services spécialisés (planification, instruction des dossiers, contrôle, affaires juridiques, communication numérique).</p>
<p>Le Conseil d’administration fixe les orientations stratégiques ; la direction générale assure le pilotage opérationnel.</p>`,
  },
  'presentation-responsables.html': {
    title: 'Responsables · AUDOE',
    tag: 'Présentation',
    heading: 'Responsables de l’AUDOE',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Présentation'],
      ['Responsables'],
    ],
    body: `<p>Les responsables de l’Agence assurent la coordination des missions et des relations avec les tutelles ministérielles et les collectivités territoriales.</p>
<p>Pour toute demande institutionnelle, veuillez utiliser les coordonnées indiquées dans le pied de page du site.</p>`,
  },
  'gestion-procedures.html': {
    title: 'Procédures d’autorisation · AUDOE',
    tag: 'Gestion urbaine',
    heading: 'Procédures d’autorisation',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Gestion urbaine'],
      ['Procédures'],
    ],
    body: `<p>Les autorisations d’urbanisme (permis de construire, lotir, démolir, etc.) sont instruites selon les délais et procédures prévus par la réglementation en vigueur.</p>
<p>La pré-instruction en ligne permet de déposer une demande complète et d’en suivre l’état.</p>
<div class="cta-strip"><p>Pré-instruction et suivi des dossiers</p><a class="btn-primary" href="service-preinstruction.html">Accéder à la pré-instruction</a></div>`,
  },
  'gestion-assistance.html': {
    title: 'Assistance technique · AUDOE',
    tag: 'Gestion urbaine',
    heading: 'Assistance technique et architecturale',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Gestion urbaine'],
      ['Assistance'],
    ],
    body: `<p>L’Agence met à disposition des professionnels et des particuliers une assistance pour la compréhension des règles d’urbanisme et la cohérence des projets avec les documents d’urbanisme.</p>
<p>Des séances de conseil peuvent être organisées sur rendez-vous.</p>`,
  },
  'gestion-controle.html': {
    title: 'Contrôle de chantier · AUDOE',
    tag: 'Gestion urbaine',
    heading: 'Contrôle de chantier',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Gestion urbaine'],
      ['Contrôle'],
    ],
    body: `<p>Les chantiers font l’objet de contrôles pour vérifier la conformité aux autorisations délivrées et aux règles de sécurité et d’environnement applicables.</p>
<p>Les constats peuvent donner lieu à des prescriptions ou à des mesures de régularisation.</p>`,
  },
  'planif-documents.html': {
    title: 'Documents d’urbanisme · AUDOE',
    tag: 'Planification',
    heading: 'Documents d’urbanisme',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Planification'],
      ['Documents'],
    ],
    body: `<p>Les plans d’aménagement, schémas et études sectorielles encadrent l’évolution des villes et des zones rurales.</p>
<p>Les documents approuvés sont consultables et téléchargeables via le portail dédié aux documents d’urbanisme en ligne.</p>
<div class="cta-strip"><p>Consulter la cartographie et les pièces graphiques</p><a class="btn-primary" href="service-taamir.html">Portail Taamir (Karazal)</a></div>`,
  },
  'planif-etudes.html': {
    title: 'Études urbanistiques · AUDOE',
    tag: 'Planification',
    heading: 'Études urbanistiques et architecturales',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Planification'],
      ['Études'],
    ],
    body: `<p>L’Agence pilote ou coordonne des études d’impact, de faisabilité et de conception urbaine pour préparer les opérations d’aménagement et les projets publics.</p>
<p>Ces études alimentent les révisions des documents d’urbanisme et les projets partenariaux.</p>`,
  },
  'service-preinstruction.html': {
    title: 'Pré-instruction en ligne · AUDOE',
    tag: 'Services en ligne',
    heading: 'Pré-instruction en ligne',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Services en ligne'],
      ['Pré-instruction'],
    ],
    body: `<p>Déposez votre dossier de demande d’autorisation d’urbanisme via le formulaire ci-dessous (saisie locale, sans redirection).</p>`,
  },
  'service-enote.html': {
    title: 'E-Note · AUDOE',
    tag: 'Services en ligne',
    heading: 'E-Note de renseignements',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Services en ligne'],
      ['E-Note'],
    ],
    body: `<p>Demandez une note de renseignements urbanistiques via le formulaire guidé ci-dessous (parcours entièrement sur ce site).</p>`,
  },
  'service-reclamation.html': {
    title: 'Réclamation en ligne · AUDOE',
    tag: 'Services en ligne',
    heading: 'Réclamation en ligne',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Services en ligne'],
      ['Réclamation'],
    ],
    body: `<p>Les réclamations sont traitées via la plateforme nationale Chikaya.</p>
<div class="cta-strip"><p>Redirection vers le portail citoyen</p><a class="btn-primary" href="http://matnuhpv.chikaya.ma/index.php?page=citoyen.AccueilCitoyen" target="_blank" rel="noopener noreferrer">Accéder à Chikaya</a></div>`,
  },
  'service-demande-info.html': {
    title: 'Demande d’informations · AUDOE',
    tag: 'Services en ligne',
    heading: 'Demande d’informations',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Services en ligne'],
      ['Demande d’informations'],
    ],
    body: `<p>Pour une demande d’accès à l’information au sens du cadre légal (Chafafiya), utilisez le formulaire national.</p>
<div class="cta-strip"><p>Portail Chafafiya</p><a class="btn-primary" href="http://www.chafafiya.ma/demande.php" target="_blank" rel="noopener noreferrer">Déposer une demande</a></div>`,
  },
  'service-taamir.html': {
    title: 'Taamir · Documents d’urbanisme',
    tag: 'Services en ligne',
    heading: 'Documents d’urbanisme en ligne (Taamir)',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Services en ligne'],
      ['Taamir'],
    ],
    body: `<p>Le portail national Karazal (Taamir) permet de consulter les documents d’urbanisme et la cartographie.</p>
<div class="cta-strip"><p>Ouvrir Taamir</p><a class="btn-primary" href="https://taamir.gov.ma/karazal/" target="_blank" rel="noopener noreferrer">Accéder à taamir.gov.ma</a></div>`,
  },
  'service-bod.html': {
    title: 'Bureau d’ordre digital · AUDOE',
    tag: 'Services en ligne',
    heading: 'Bureau d’Ordre Digital',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Services en ligne'],
      ['Bureau d’ordre'],
    ],
    body: `<p>Déposez et suivez vos courriers officiels via le bureau d’ordre virtuel de l’agence.</p>
<div class="cta-strip"><p>Service Courrier.gouv</p><a class="btn-primary" href="https://courrier.gov.ma/virtualbo/index.php?page=courrier.FormulaireDemande&amp;idOrg=5373&amp;h=fd60a52d4d38a0c07970b3822d7c5286f0424ec50c7b1109e6d87eebbc3419c0" target="_blank" rel="noopener noreferrer">Accéder au formulaire AUDOE</a></div>`,
  },
  'reg-dahirs.html': {
    title: 'Dahirs · AUDOE',
    tag: 'Réglementation',
    heading: 'Dahirs',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Réglementation'],
      ['Dahirs'],
    ],
    body: `<nav class="reg-tabs" aria-label="Réglementation">
      <a href="reg-dahirs.html" class="is-current">Dahirs</a>
      <a href="reg-decrets.html">Décrets</a>
      <a href="reg-circulaires.html">Circulaires</a>
      <a href="reg-arretes.html">Arrêtés</a>
    </nav>
    <p>Les dahirs fixent le cadre juridique supérieur en matière d’urbanisme et d’aménagement du territoire.</p>
    <div class="cta-strip">
      <p>Catalogue consultable sur cette page — demandes de copies ou d’extraits auprès du service juridique.</p>
      <a class="btn-primary" href="#catalogue-dahirs">Voir le catalogue</a>
    </div>
    <h2 id="catalogue-dahirs">Catalogue indicatif — dahirs</h2>
    <p>Les textes consolidés et pièces officielles peuvent être communiqués sur demande écrite ou au guichet.</p>
    <div class="doc-grid">
      <article class="doc-card doc-card-static"><span class="doc-card-title">Dahir n°&nbsp;1-93-51</span><span class="doc-card-meta">Institution des agences urbaines — référence nationale</span></article>
      <article class="doc-card doc-card-static"><span class="doc-card-title">Textes fonciers et domaniaux</span><span class="doc-card-meta">Extraits sur demande au service juridique</span></article>
      <a class="doc-card" href="mailto:agencedakhla@gmail.com?subject=Demande%20dahir%20%2F%20extrait"><span class="doc-card-title">Demande de document</span><span class="doc-card-meta">agencedakhla@gmail.com</span></a>
      <a class="doc-card" href="service-bod.html"><span class="doc-card-title">Bureau d’ordre</span><span class="doc-card-meta">Dépôt d’une demande papier ou numérique</span></a>
    </div>
    <h2 id="telecharger-pdf">Télécharger — fichiers PDF</h2>
    <p class="hint">Documents au format PDF. Vous pouvez remplacer ces fichiers par les versions officielles dans le dossier <code>assets/reglementation/</code> (voir <code>LISEZ-MOI.txt</code>).</p>
    <div class="doc-grid">
      <a class="doc-card doc-card-pdf" href="../assets/reglementation/dahir-1-93-51-agences-urbaines.pdf" download="dahir-1-93-51-agences-urbaines.pdf"><span class="doc-card-badge">PDF</span><span class="doc-card-title">Dahir n°&nbsp;1-93-51 — agences urbaines</span><span class="doc-card-meta">Cliquer pour télécharger</span></a>
    </div>
    <h2 id="envoyer-pdf">Téléverser un PDF</h2>
    <p class="hint">Sélectionnez un PDF sur votre ordinateur, puis validez : la messagerie s’ouvre avec un texte prérempli. <strong>Joignez manuellement le fichier</strong> à l’e-mail avant envoi (les pages statiques ne peuvent pas attacher le fichier automatiquement).</p>
    <form class="reg-upload-form service-form" data-reg-type="Dahirs" novalidate>
      <div class="field"><label for="reg-pdf-dahirs">Fichier PDF <span class="req">*</span></label><input id="reg-pdf-dahirs" class="reg-pdf-input" type="file" accept="application/pdf,.pdf" required /></div>
      <div class="field"><label for="reg-msg-dahirs">Message (optionnel)</label><textarea id="reg-msg-dahirs" class="reg-pdf-msg" rows="3" placeholder="Références, objet du dépôt…"></textarea></div>
      <button type="submit" class="btn-primary">Ouvrir la messagerie</button>
    </form>`,
  },
  'reg-decrets.html': {
    title: 'Décrets · AUDOE',
    tag: 'Réglementation',
    heading: 'Décrets',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Réglementation'],
      ['Décrets'],
    ],
    body: `<nav class="reg-tabs" aria-label="Réglementation">
      <a href="reg-dahirs.html">Dahirs</a>
      <a href="reg-decrets.html" class="is-current">Décrets</a>
      <a href="reg-circulaires.html">Circulaires</a>
      <a href="reg-arretes.html">Arrêtés</a>
    </nav>
    <p>Les décrets d’application précisent les modalités d’exécution des textes relatifs à l’urbanisme, à l’habitat et aux autorisations de construire.</p>
    <div class="cta-strip">
      <p>Catalogue sur cette page — copies certifiées ou extraits sur demande.</p>
      <a class="btn-primary" href="#catalogue-decrets">Voir le catalogue</a>
    </div>
    <h2 id="catalogue-decrets">Catalogue indicatif — décrets</h2>
    <div class="doc-grid">
      <article class="doc-card doc-card-static"><span class="doc-card-title">Décret n°&nbsp;2-03-221</span><span class="doc-card-meta">Création de l’AUDOE — BO n°&nbsp;5214 (2004)</span></article>
      <article class="doc-card doc-card-static"><span class="doc-card-title">Décrets d’homologation des P.A.</span><span class="doc-card-meta">Liste tenue par le service juridique</span></article>
      <a class="doc-card" href="mailto:agencedakhla@gmail.com?subject=Demande%20d%C3%A9cret%20%2F%20extrait"><span class="doc-card-title">Demande de document</span><span class="doc-card-meta">agencedakhla@gmail.com</span></a>
      <a class="doc-card" href="service-bod.html"><span class="doc-card-title">Bureau d’ordre</span><span class="doc-card-meta">Dépôt d’une demande</span></a>
    </div>
    <h2 id="telecharger-pdf">Télécharger — fichiers PDF</h2>
    <p class="hint">Remplacez ces modèles par les extraits du Bulletin officiel si nécessaire (<code>assets/reglementation/</code>).</p>
    <div class="doc-grid">
      <a class="doc-card doc-card-pdf" href="../assets/reglementation/decret-2-03-221-creation-audoe.pdf" download="decret-2-03-221-creation-audoe.pdf"><span class="doc-card-badge">PDF</span><span class="doc-card-title">Décret n°&nbsp;2-03-221 — création AUDOE</span><span class="doc-card-meta">Cliquer pour télécharger</span></a>
    </div>
    <h2 id="envoyer-pdf">Téléverser un PDF</h2>
    <p class="hint">Sélectionnez un PDF, puis joignez-le manuellement dans l’e-mail qui s’ouvre.</p>
    <form class="reg-upload-form service-form" data-reg-type="Décrets" novalidate>
      <div class="field"><label for="reg-pdf-decrets">Fichier PDF <span class="req">*</span></label><input id="reg-pdf-decrets" class="reg-pdf-input" type="file" accept="application/pdf,.pdf" required /></div>
      <div class="field"><label for="reg-msg-decrets">Message (optionnel)</label><textarea id="reg-msg-decrets" class="reg-pdf-msg" rows="3" placeholder="Références…"></textarea></div>
      <button type="submit" class="btn-primary">Ouvrir la messagerie</button>
    </form>`,
  },
  'reg-circulaires.html': {
    title: 'Circulaires · AUDOE',
    tag: 'Réglementation',
    heading: 'Circulaires',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Réglementation'],
      ['Circulaires'],
    ],
    body: `<nav class="reg-tabs" aria-label="Réglementation">
      <a href="reg-dahirs.html">Dahirs</a>
      <a href="reg-decrets.html">Décrets</a>
      <a href="reg-circulaires.html" class="is-current">Circulaires</a>
      <a href="reg-arretes.html">Arrêtés</a>
    </nav>
    <p>Les circulaires ministérielles orientent l’application des textes par les agences urbaines et les services de l’État.</p>
    <div class="cta-strip">
      <p>Référentiel consultable ici — transmission de circulaires sur demande.</p>
      <a class="btn-primary" href="#catalogue-circulaires">Voir le catalogue</a>
    </div>
    <h2 id="catalogue-circulaires">Catalogue indicatif — circulaires</h2>
    <div class="doc-grid">
      <article class="doc-card doc-card-static"><span class="doc-card-title">Circulaire n°&nbsp;2259-1257</span><span class="doc-card-meta">Contrôle et sanctions — urbanisme</span></article>
      <article class="doc-card doc-card-static"><span class="doc-card-title">Circulaire conjointe n°&nbsp;2911</span><span class="doc-card-meta">Contrôle d’urbanisme et de la construction</span></article>
      <a class="doc-card" href="mailto:agencedakhla@gmail.com?subject=Demande%20circulaire"><span class="doc-card-title">Demande de document</span><span class="doc-card-meta">agencedakhla@gmail.com</span></a>
      <a class="doc-card" href="service-bod.html"><span class="doc-card-title">Bureau d’ordre</span><span class="doc-card-meta">Dépôt d’une demande</span></a>
    </div>
    <h2 id="telecharger-pdf">Télécharger — fichiers PDF</h2>
    <p class="hint">Modèles PDF — à substituer par les circulaires officielles scannées si besoin.</p>
    <div class="doc-grid">
      <a class="doc-card doc-card-pdf" href="../assets/reglementation/circulaire-2259-1257-controle-urbanisme.pdf" download="circulaire-2259-1257-controle-urbanisme.pdf"><span class="doc-card-badge">PDF</span><span class="doc-card-title">Circulaire 2259-1257</span><span class="doc-card-meta">Téléchargement</span></a>
      <a class="doc-card doc-card-pdf" href="../assets/reglementation/circulaire-2911-controle-construction.pdf" download="circulaire-2911-controle-construction.pdf"><span class="doc-card-badge">PDF</span><span class="doc-card-title">Circulaire conjointe 2911</span><span class="doc-card-meta">Téléchargement</span></a>
    </div>
    <h2 id="envoyer-pdf">Téléverser un PDF</h2>
    <p class="hint">Envoi via votre messagerie — pensez à joindre le fichier PDF.</p>
    <form class="reg-upload-form service-form" data-reg-type="Circulaires" novalidate>
      <div class="field"><label for="reg-pdf-circ">Fichier PDF <span class="req">*</span></label><input id="reg-pdf-circ" class="reg-pdf-input" type="file" accept="application/pdf,.pdf" required /></div>
      <div class="field"><label for="reg-msg-circ">Message (optionnel)</label><textarea id="reg-msg-circ" class="reg-pdf-msg" rows="3"></textarea></div>
      <button type="submit" class="btn-primary">Ouvrir la messagerie</button>
    </form>`,
  },
  'reg-arretes.html': {
    title: 'Arrêtés · AUDOE',
    tag: 'Réglementation',
    heading: 'Arrêtés',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Réglementation'],
      ['Arrêtés'],
    ],
    body: `<nav class="reg-tabs" aria-label="Réglementation">
      <a href="reg-dahirs.html">Dahirs</a>
      <a href="reg-decrets.html">Décrets</a>
      <a href="reg-circulaires.html">Circulaires</a>
      <a href="reg-arretes.html" class="is-current">Arrêtés</a>
    </nav>
    <p>Les arrêtés précisent les mesures applicables dans le cadre des compétences de l’Agence sur le ressort territorial.</p>
    <div class="cta-strip">
      <p>Liste indicative — arrêtés nominatifs communiqués sur demande.</p>
      <a class="btn-primary" href="#catalogue-arretes">Voir le catalogue</a>
    </div>
    <h2 id="catalogue-arretes">Catalogue indicatif — arrêtés</h2>
    <div class="doc-grid">
      <article class="doc-card doc-card-static"><span class="doc-card-title">Arrêtés d’urbanisme locaux</span><span class="doc-card-meta">Conservation au service de la réglementation</span></article>
      <article class="doc-card doc-card-static"><span class="doc-card-title">Arrêtés de servitude / prescriptions</span><span class="doc-card-meta">Consultation sur place ou copie sur demande</span></article>
      <a class="doc-card" href="mailto:agencedakhla@gmail.com?subject=Demande%20arr%C3%AAt%C3%A9"><span class="doc-card-title">Demande de document</span><span class="doc-card-meta">agencedakhla@gmail.com</span></a>
      <a class="doc-card" href="service-bod.html"><span class="doc-card-title">Bureau d’ordre</span><span class="doc-card-meta">Dépôt d’une demande</span></a>
    </div>
    <h2 id="telecharger-pdf">Télécharger — fichiers PDF</h2>
    <p class="hint">Modèle d’arrêté-type — remplacez par les arrêtés réels au format PDF dans <code>assets/reglementation/</code>.</p>
    <div class="doc-grid">
      <a class="doc-card doc-card-pdf" href="../assets/reglementation/arrete-modele-urbanisme-audoe.pdf" download="arrete-modele-urbanisme-audoe.pdf"><span class="doc-card-badge">PDF</span><span class="doc-card-title">Arrêté-type — urbanisme</span><span class="doc-card-meta">Téléchargement</span></a>
    </div>
    <h2 id="envoyer-pdf">Téléverser un PDF</h2>
    <p class="hint">Transmettre un arrêté ou une pièce (PDF) : ouverture de la messagerie — joindre le fichier manuellement.</p>
    <form class="reg-upload-form service-form" data-reg-type="Arrêtés" novalidate>
      <div class="field"><label for="reg-pdf-arr">Fichier PDF <span class="req">*</span></label><input id="reg-pdf-arr" class="reg-pdf-input" type="file" accept="application/pdf,.pdf" required /></div>
      <div class="field"><label for="reg-msg-arr">Message (optionnel)</label><textarea id="reg-msg-arr" class="reg-pdf-msg" rows="3"></textarea></div>
      <button type="submit" class="btn-primary">Ouvrir la messagerie</button>
    </form>`,
  },
  'actualites.html': {
    title: 'Actualités · AUDOE',
    tag: 'Actualités',
    heading: 'Actualités',
    wide: true,
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Actualités'],
    ],
    body: `<div class="news-list">
<article>
<div class="meta">Octobre 2025</div>
<h2><a href="actu-mois-urbain.html">L’AUDOE célèbre le Mois urbain et la Journée mondiale des villes</a></h2>
<p>Retour sur les événements organisés en région.</p>
</article>
<article>
<div class="meta">2025</div>
<h2><a href="actu-bir-gandouz.html">Enquête publique — Plan d’aménagement sectoriel Bir Gandouz</a></h2>
<p>Informations sur la participation du public.</p>
</article>
<article>
<div class="meta">2024</div>
<h2><a href="actu-roi-dakhla.html">Programmes de développement des régions Sud</a></h2>
<p>Cérémonie de lancement à Dakhla.</p>
</article>
</div>`,
  },
  'actu-mois-urbain.html': {
    title: 'Mois urbain 2025 · AUDOE',
    tag: 'Actualités',
    heading: 'Mois urbain d’octobre 2025',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Actualités', 'actualites.html'],
      ['Mois urbain'],
    ],
    body: `<p>L’Agence urbaine de Dakhla – Oued Eddahab a organisé une série d’animations à l’occasion du Mois urbain et de la Journée mondiale des villes.</p>
<p>Des rencontres, conférences et visites de terrain ont été proposées aux partenaires et au grand public pour promouvoir une ville durable et inclusive.</p>
<p><a href="actualites.html">← Retour aux actualités</a></p>`,
  },
  'actu-bir-gandouz.html': {
    title: 'Enquête publique Bir Gandouz · AUDOE',
    tag: 'Actualités',
    heading: 'Enquête publique — Bir Gandouz',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Actualités', 'actualites.html'],
      ['Bir Gandouz'],
    ],
    body: `<p>Une enquête publique relative au projet de plan d’aménagement sectoriel de la zone des grands équipements et services de Bir Gandouz permet aux citoyens de consulter les documents et de formuler des observations.</p>
<p>Les modalités de participation (dépôt des observations, calendrier) sont affichées en préfecture et sur les supports d’information de l’Agence.</p>
<p><a href="actualites.html">← Retour aux actualités</a></p>`,
  },
  'actu-roi-dakhla.html': {
    title: 'Programmes régions Sud · AUDOE',
    tag: 'Actualités',
    heading: 'Lancement des programmes de développement',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Actualités', 'actualites.html'],
      ['Programmes Sud'],
    ],
    body: `<p>La cérémonie de lancement des programmes de développement des régions Dakhla-Oued Eddahab et Guelmim-Oued Noun a mis en avant les projets structurants et les contrats-programmes associés.</p>
<p>L’AUDOE accompagne la mise en œuvre des composantes urbaines et d’aménagement de ces programmes.</p>
<p><a href="actualites.html">← Retour aux actualités</a></p>`,
  },
  'avis-annonces.html': {
    title: 'Avis et annonces · AUDOE',
    tag: 'Marchés publics',
    heading: 'Avis d’appel d’offres et annonces',
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Avis & annonces'],
    ],
    body: `<p>Les avis d’appel d’offres ouverts et les consultations publiées par l’Agence sont listés ci-dessous (modèle).</p>
<div class="doc-grid">
<a class="doc-card" href="#">AVIS D’APPEL D’OFFRES OUVERT — …</a>
<a class="doc-card" href="#">Avis de recrutement — …</a>
</div>
<p>Pour les avis officiels en cours, reportez-vous également aux publications sur le portail institutionnel.</p>`,
  },
  'galerie.html': {
    title: 'Galerie multimédia · AUDOE',
    tag: 'Médias',
    heading: 'Galerie multimédia',
    wide: true,
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Galerie'],
    ],
    body: `<p>Sélections visuelles des événements, visites de terrain et projets urbains (illustrations de démonstration).</p>
<div class="gallery-grid">
<div class="gallery-cell"></div><div class="gallery-cell"></div><div class="gallery-cell"></div>
<div class="gallery-cell"></div><div class="gallery-cell"></div><div class="gallery-cell"></div>
</div>`,
  },
  'plan-site.html': {
    title: 'Plan du site · AUDOE',
    tag: 'Navigation',
    heading: 'Plan du site',
    wide: true,
    breadcrumb: [
      ['Accueil', '../index.html'],
      ['Plan du site'],
    ],
    body: `<div class="plan-list">
<div class="plan-list-section"><h3>Présentation</h3><ul>
<li><a href="presentation-creation.html">Création</a></li>
<li><a href="presentation-missions.html">Missions et attributions</a></li>
<li><a href="presentation-champs.html">Champs d’action territoriale</a></li>
<li><a href="presentation-organisation.html">Organisation structurelle</a></li>
<li><a href="presentation-responsables.html">Responsables</a></li>
</ul></div>
<div class="plan-list-section"><h3>Gestion urbaine</h3><ul>
<li><a href="gestion-procedures.html">Procédures d’autorisation</a></li>
<li><a href="gestion-assistance.html">Assistance technique</a></li>
<li><a href="gestion-controle.html">Contrôle de chantier</a></li>
</ul></div>
<div class="plan-list-section"><h3>Planification</h3><ul>
<li><a href="planif-documents.html">Documents d’urbanisme</a></li>
<li><a href="planif-etudes.html">Études urbanistiques</a></li>
</ul></div>
<div class="plan-list-section"><h3>Services en ligne</h3><ul>
<li><a href="service-preinstruction.html">Pré-instruction</a></li>
<li><a href="service-enote.html">E-Note</a></li>
<li><a href="service-reclamation.html">Réclamation</a></li>
<li><a href="service-demande-info.html">Demande d’informations</a></li>
<li><a href="service-taamir.html">Taamir</a></li>
<li><a href="service-bod.html">Bureau d’ordre digital</a></li>
</ul></div>
<div class="plan-list-section"><h3>Réglementation</h3><ul>
<li><a href="reg-dahirs.html">Dahirs</a></li>
<li><a href="reg-decrets.html">Décrets</a></li>
<li><a href="reg-circulaires.html">Circulaires</a></li>
<li><a href="reg-arretes.html">Arrêtés</a></li>
</ul></div>
<div class="plan-list-section"><h3>Autres</h3><ul>
<li><a href="actualites.html">Actualités</a></li>
<li><a href="avis-annonces.html">Avis & annonces</a></li>
<li><a href="galerie.html">Galerie</a></li>
<li><a href="version-arabe.html">النسخة العربية</a></li>
</ul></div>
</div>`,
  },
  'version-arabe.html': {
    title: 'الوكالة الحضرية · الداخلة',
    tag: 'العربية',
    heading: 'النسخة العربية',
    breadcrumb: [
      ['الرئيسية', '../index.html'],
      ['العربية'],
    ],
    body: `<p dir="rtl" style="font-size:18px;line-height:1.9">مرحبا بكم في موقع الوكالة الحضرية للداخلة–وادي الذهب. هذه صفحة تجريبية بنفس النمط البصري للموقع الفرنسي.</p>
<p dir="rtl"><a href="../index.html">← العودة إلى النسخة الفرنسية</a></p>`,
  },
};

for (const [fn, patch] of Object.entries(AUD_PAGE_UPDATES)) {
  if (P[fn]) Object.assign(P[fn], patch);
}

function navHtml(assetPrefix) {
  const h = assetPrefix + 'index.html';
  const p = (f) => (assetPrefix === '../' ? '' : 'pages/') + f;
  return `<header id="header">
  <div class="header-inner">
    <a href="${h}" class="logo">
      <div class="logo-icon"><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></div>
      <div class="logo-text"><span>AUDOE</span><span>Dakhla · Oued Eddahab</span></div>
    </a>
    <nav>
      <div class="nav-item">
        <span class="nav-link">Présentation <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        <div class="dropdown">
          <a href="${p('presentation-creation.html')}">Création</a>
          <a href="${p('presentation-missions.html')}">Missions et Attributions</a>
          <a href="${p('presentation-champs.html')}">Champs d'action territoriale</a>
          <a href="${p('presentation-organisation.html')}">Organisation structurelle</a>
          <a href="${p('presentation-responsables.html')}">Responsables de l'AUDOE</a>
        </div>
      </div>
      <div class="nav-item">
        <span class="nav-link">Gestion Urbaine <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        <div class="dropdown">
          <a href="${p('gestion-procedures.html')}">Procédures d'autorisation</a>
          <a href="${p('gestion-assistance.html')}">Assistance technique et architecturale</a>
          <a href="${p('gestion-controle.html')}">Contrôle de chantier</a>
        </div>
      </div>
      <div class="nav-item">
        <span class="nav-link">Planification <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        <div class="dropdown">
          <a href="${p('planif-documents.html')}">Documents d'urbanisme</a>
          <a href="${p('planif-etudes.html')}">Études urbanistiques et architecturales</a>
        </div>
      </div>
      <div class="nav-item">
        <span class="nav-link">Services en ligne <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        <div class="dropdown">
          <a href="${p('service-preinstruction.html')}">Pré-instruction en ligne</a>
          <a href="${p('service-enote.html')}">E-Note</a>
          <a href="${p('service-reclamation.html')}">Réclamation en ligne</a>
          <a href="${p('service-demande-info.html')}">Demande d'informations</a>
          <a href="${p('service-taamir.html')}">Documents d'urbanisme en ligne (Taamir)</a>
          <a href="${p('service-bod.html')}">Bureau d'Ordre Digital</a>
        </div>
      </div>
      <div class="nav-item">
        <span class="nav-link">Réglementation <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        <div class="dropdown">
          <a href="${p('reg-dahirs.html')}">Dahirs</a>
          <a href="${p('reg-decrets.html')}">Décrets</a>
          <a href="${p('reg-circulaires.html')}">Circulaires</a>
          <a href="${p('reg-arretes.html')}">Arrêtés</a>
        </div>
      </div>
      <a href="${p('service-preinstruction.html')}" class="nav-link header-cta">Pré-instruction en ligne</a>
      <a href="${p('version-arabe.html')}" class="lang-btn">🇲🇦 العربية</a>
    </nav>
    <div class="burger" onclick="toggleMenu()"><span></span><span></span><span></span></div>
  </div>
</header>`;
}

function mobileHtml(assetPrefix) {
  const h = assetPrefix + 'index.html';
  const p = (f) => (assetPrefix === '../' ? '' : 'pages/') + f;
  return `<div class="mobile-menu" id="mobileMenu">
  <button type="button" class="mobile-close" onclick="toggleMenu()">✕</button>
  <a href="${h}">Accueil</a>
  <a href="${p('presentation-creation.html')}">Présentation</a>
  <a href="${p('gestion-procedures.html')}">Gestion Urbaine</a>
  <a href="${p('planif-documents.html')}">Planification Urbaine</a>
  <a href="${p('service-preinstruction.html')}">Services en Ligne</a>
  <a href="${p('reg-dahirs.html')}">Réglementation</a>
  <a href="${p('service-preinstruction.html')}" style="color:var(--gold-light);font-weight:600">Pré-instruction en ligne →</a>
</div>`;
}

function footerHtml(assetPrefix) {
  const h = assetPrefix + 'index.html';
  const p = (f) => (assetPrefix === '../' ? '' : 'pages/') + f;
  return `<footer id="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="${h}" class="logo" style="display:inline-flex">
        <div class="logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></div>
        <div class="logo-text"><span style="color:#fff!important">AUDOE</span><span style="color:rgba(255,255,255,.5)!important">Dakhla · Oued Eddahab</span></div>
      </a>
      <p>Agence Urbaine de Dakhla – Oued Eddahab. Établissement public au service du développement urbain durable de la région.</p>
      <div class="footer-socials">
        <a class="social-btn" href="https://www.facebook.com/agencedakhla/" target="_blank" rel="noopener noreferrer" title="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
        <a class="social-btn" href="${p('galerie.html')}" title="Galerie"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
        <a class="social-btn" href="${p('actualites.html')}" title="Actualités"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Navigation</h4>
      <ul class="footer-links">
        <li><a href="${p('presentation-creation.html')}">Présentation</a></li>
        <li><a href="${p('gestion-procedures.html')}">Gestion Urbaine</a></li>
        <li><a href="${p('planif-documents.html')}">Planification</a></li>
        <li><a href="${p('service-preinstruction.html')}">Services en ligne</a></li>
        <li><a href="${p('reg-dahirs.html')}">Réglementation</a></li>
        <li><a href="${p('avis-annonces.html')}">Avis & Annonces</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul class="footer-links">
        <li><a href="${p('service-preinstruction.html')}">Pré-instruction</a></li>
        <li><a href="${p('service-enote.html')}">E-Note</a></li>
        <li><a href="${p('service-bod.html')}">Bureau d'Ordre Digital</a></li>
        <li><a href="${p('service-reclamation.html')}">Réclamation en ligne</a></li>
        <li><a href="${p('service-taamir.html')}">Documents d'urbanisme (Taamir)</a></li>
        <li><a href="${p('service-demande-info.html')}">Demande d'informations</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <div class="footer-contact">
        <div class="contact-item">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Avenue Mohammed VI, Dakhla – Oued Eddahab, Maroc</span>
        </div>
        <div class="contact-item">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <span>0528-89-78-01</span>
        </div>
        <div class="contact-item">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:agencedakhla@gmail.com" style="color:inherit;text-decoration:underline">agencedakhla@gmail.com</a>
        </div>
      </div>
      <div style="margin-top:20px">
        <p style="font-size:12px;color:rgba(255,255,255,.4);margin-bottom:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase">Newsletter</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Votre email" />
          <button type="button">S'abonner</button>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Agence Urbaine de Dakhla – Oued Eddahab. Tous droits réservés.</p>
    <div class="footer-bottom-links">
      <a href="${p('plan-site.html')}">Plan du site</a>
      <a href="${h}">Politique de confidentialité</a>
      <a href="${h}">Accessibilité</a>
    </div>
  </div>
</footer>`;
}

function breadcrumbHtml(items) {
  const parts = items.map(([label, href]) => {
    if (href) return `<a href="${href}">${label}</a>`;
    return `<span>${label}</span>`;
  });
  return `<nav class="breadcrumb" aria-label="Fil d'Ariane">${parts.join('<span class="sep">/</span>')}</nav>`;
}

function renderPage(filename, data, assetPrefix) {
  const mainClass = data.wide ? 'page-main section' : 'page-main section section-alt';
  const containerClass = data.wide ? 'container content-prose' : 'container narrow content-prose';
  return `<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${data.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="${assetPrefix}assets/css/styles.css"/>
</head>
<body class="page-inner">
${navHtml(assetPrefix)}
${mobileHtml(assetPrefix)}
<section class="page-hero">
  <div class="hero-bg"></div>
  <div class="hero-pattern"></div>
  <div class="container page-hero-inner">
    ${breadcrumbHtml(data.breadcrumb)}
    <div class="section-tag">${data.tag}</div>
    <h1 class="page-title">${data.heading}</h1>
  </div>
</section>
<main class="${mainClass}">
  <div class="${containerClass}">
    ${data.body}
  </div>
</main>
${footerHtml(assetPrefix)}
<script src="${assetPrefix}assets/js/main.js"></script>
<script src="${assetPrefix}assets/js/forms-local.js"></script>
</body>
</html>`;
}

function renderArabic(assetPrefix) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>الوكالة الحضرية · الداخلة</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="${assetPrefix}assets/css/styles.css"/>
</head>
<body class="page-inner">
${navHtml(assetPrefix)}
${mobileHtml(assetPrefix)}
<section class="page-hero">
  <div class="hero-bg"></div>
  <div class="hero-pattern"></div>
  <div class="container page-hero-inner">
    ${breadcrumbHtml(P['version-arabe.html'].breadcrumb)}
    <div class="section-tag">${P['version-arabe.html'].tag}</div>
    <h1 class="page-title">${P['version-arabe.html'].heading}</h1>
  </div>
</section>
<main class="page-main section section-alt">
  <div class="container narrow content-prose">
    ${P['version-arabe.html'].body}
  </div>
</main>
${footerHtml(assetPrefix)}
<script src="${assetPrefix}assets/js/main.js"></script>
<script src="${assetPrefix}assets/js/forms-local.js"></script>
</body>
</html>`;
}

for (const [filename, data] of Object.entries(P)) {
  if (filename === 'version-arabe.html') {
    fs.writeFileSync(path.join(root, 'pages', filename), renderArabic('../'), 'utf8');
  } else {
    fs.writeFileSync(path.join(root, 'pages', filename), renderPage(filename, data, '../'), 'utf8');
  }
}

console.log('Generated', Object.keys(P).length, 'pages in pages/');
