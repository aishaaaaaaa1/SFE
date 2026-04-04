/**
 * Contenus institutionnels AUDOE (Dakhla – Oued Eddahab), hébergés en local sur ce site.
 */

const PLANIF_DOCS_CATALOG = `<section class="doc-catalog" aria-labelledby="doc-catalog-heading">
<h2 id="doc-catalog-heading" class="doc-catalog-heading">Documents d’urbanisme — recherche</h2>
<p class="doc-catalog-intro">Filtrez par commune ou par type de document. Les notices détaillées se trouvent dans la suite de cette page.</p>
<div class="doc-catalog-bar">
  <div class="doc-catalog-field">
    <label for="doc-catalog-search">Rechercher une commune</label>
    <div class="doc-catalog-input-wrap">
      <svg class="doc-catalog-search-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="search" id="doc-catalog-search" placeholder="Ex : Dakhla, El Argoub, Bir Anzarane…" autocomplete="off" />
    </div>
  </div>
  <div class="doc-catalog-field doc-catalog-field--type">
    <label for="doc-catalog-type">Type de document</label>
    <select id="doc-catalog-type">
      <option value="all">Tous</option>
      <option value="sdau">Schéma directeur (SDAU)</option>
      <option value="pa">Plan d’aménagement</option>
      <option value="pdar">P.D.A.R / plan de développement</option>
      <option value="autre">Autre</option>
    </select>
  </div>
  <button type="button" class="btn-primary doc-catalog-btn" id="doc-catalog-submit">Rechercher</button>
</div>
<p class="doc-catalog-count" id="doc-catalog-count" aria-live="polite"></p>
<div class="doc-catalog-grid" id="doc-catalog-grid"></div>
<p class="doc-catalog-empty" id="doc-catalog-empty" hidden>Aucun document ne correspond à votre recherche.</p>
<p class="hint doc-catalog-hint">Pour publier des PDF : placez les fichiers dans <code>assets/docs-urbanisme/</code> puis renseignez le champ <code>pdf</code> dans <code>assets/js/docs-urbanisme-catalog.js</code>. En attendant, le lien « Télécharger » ouvre une demande par e-mail.</p>
</section>`;

const PLANIF_DOCUMENTS_BODY = `${PLANIF_DOCS_CATALOG}
<p class="doc-page-source">Contenu conforme à la rubrique «&nbsp;Documents d’urbanisme&nbsp;» du site de l’Agence (<a href="https://audakhla.ma/index.php/planification-urbaine/documents-d-urbanisme" target="_blank" rel="noopener noreferrer">audakhla.ma</a>). Ancres utiles&nbsp;: <a href="#doc-pa-zone-touristique">zone touristique PK26–PK36</a>, <a href="#doc-pdar-imoutlane-labouirda">Imoutlane et Labouirda</a> (équivalents locaux aux liens profonds du site historique).</p>

<h2>Les S.D.A.U</h2>
<h3 id="doc-sdau-baie">Le Schéma Directeur d’Aménagement Urbain de la Baie d’Oued Eddahab</h3>
<p>Le Schéma Directeur d’Aménagement Urbain de la Baie d’Oued Eddahab fixe les orientations stratégiques de développement et d’aménagement urbain à l’horizon 2030 sur le territoire couvrant le périmètre urbain de la ville de Dakhla, l’ensemble de la péninsule et les rivages de la baie, intégrant également le centre d’El Argoub (soit une superficie totale d’environ 400&nbsp;km²).</p>
<p>La mise en œuvre du S.D.A.U se traduit par la recherche d’un équilibre entre plusieurs impératifs, à savoir :</p>
<ul>
<li>Ouvrir à l’urbanisation de nouveaux secteurs pour répondre aux besoins de la croissance, dans les domaines du logement, des équipements, des activités et des loisirs ;</li>
<li>Faciliter et orienter l’investissement dans les secteurs productifs, notamment la pêche, le tourisme et l’agriculture, pour la création d’emplois et de richesse ;</li>
<li>Préserver l’environnement de la Baie d’Oued&nbsp;–&nbsp;Eddahab.</li>
</ul>
<p>L’année 2015 a été marquée par l’homologation du SDAU de la Baie d’Oued Eddahab, publiée au BO n°&nbsp;6409 du 02/11/2015, par le décret n°&nbsp;2.15.230 du 16 octobre 2015.</p>
<figure class="doc-urban-figure">
<img src="../assets/img/doc-sdau-baie-oued-eddahab.png" alt="Carte du SDAU de la baie d’Oued Eddahab, horizon 2030 : péninsule de Dakhla, baie, zonage coloré, routes RN1 et RP1100, légende et tableau des affectations." width="1600" height="1000" loading="lazy" decoding="async" />
<figcaption>Document graphique — SDAU de la baie d’Oued Eddahab (horizon&nbsp;2030).</figcaption>
</figure>

<h2>Les plans d’aménagements</h2>
<h3 id="doc-pa-dakhla">Le Plan d’Aménagement de la ville de Dakhla</h3>
<p>Le Plan d’Aménagement de la ville de Dakhla : l’Agence Urbaine Oued Eddahab Aousserd a lancé la mise à jour et le suivi du plan d’aménagement en privilégiant une vision globale et durable qui consiste à :</p>
<ul>
<li>Augmenter l’attractivité de la ville ;</li>
<li>Doter la ville de plusieurs centralités au sein de la ville ;</li>
<li>Créer l’homogénéité entre les différentes composantes esthétiques du tissu urbain ;</li>
<li>Renforcer les articulations sociales ;</li>
<li>Allier densité architecturale et perspectives de l’aménagement urbain ;</li>
<li>Participer à l’harmonisation du paysage urbain ;</li>
<li>Instaurer un urbanisme identitaire respectueux de l’environnement.</li>
</ul>
<p>Sur la base de la photo aérienne et de la restitution de la ville de Dakhla mises à jour, le plan d’aménagement a été élaboré à l’échelle 1/2000<sup>e</sup> et a été instruit par une commission technique au siège de l’Agence Urbaine d’Oued Eddahab&nbsp;–&nbsp;Aousserd le 26/06/2014.</p>
<figure class="doc-urban-figure">
<img src="../assets/img/doc-pa-dakhla-2014.png" alt="Plan d’aménagement de la ville de Dakhla, mai 2014 : carte de la péninsule, zones d’habitat, équipements, tourisme, aéroport et ports, légende existant et projeté." width="1100" height="1500" loading="lazy" decoding="async" />
<figcaption>Planche graphique — Plan d’aménagement de la ville de Dakhla (mai&nbsp;2014).</figcaption>
</figure>

<h3 id="doc-pa-zone-touristique">Le Plan d’Aménagement de la Zone touristique située entre le PK26 et le PK36</h3>
<p>La zone d’étude se trouve sur la Baie d’Oued Eddahab entre le PK26 et le PK36 sur le territoire de la Commune Rurale d’Al Argoub, Province d’Oued Eddahab, d’une superficie approximative de 6&nbsp;322&nbsp;ha. Selon le S.D.A.U de la Baie d’Oued Eddahab, cette zone est dédiée au tourisme sportif et balnéaire.</p>
<p>Le but du Plan d’Aménagement de ce site veillera à :</p>
<ul>
<li>La mise en œuvre et la concrétisation des options et orientations du S.D.A.U ;</li>
<li>L’affectation des différentes zones suivant leurs usages principaux et la définition des zones dans lesquelles toute construction est interdite (zone à risque, zones inondables, etc.) ;</li>
<li>La maîtrise du processus d’urbanisation au niveau de la zone ;</li>
<li>La mise en place d’une plateforme référentielle en matière d’orientation et de gestion des investissements touristiques sur le site ;</li>
<li>La définition d’un programme des équipements nécessaires de base pour accompagner le développement souhaité ;</li>
<li>L’harmonisation du paysage urbain en préservant et en valorisant les atouts environnementaux de la zone et en garantissant l’équilibre écologique ;</li>
<li>La définition d’une plateforme référentielle juridique permettant de réglementer les interventions actuelles et maîtriser les actions futures des différents opérateurs pour faciliter ainsi la gestion de l’espace ;</li>
<li>La définition des règles d’utilisation du sol et les aménagements à prévoir sur cette zone.</li>
</ul>
<p>Les deux variantes d’aménagement à l’échelle 1/5000<sup>e</sup> ont été examinées lors d’une réunion présidée par Monsieur le Wali de la Région d’Oued Eddahab-Lagouira le 30&nbsp;déc.&nbsp;2014. Le BET a été invité à passer à l’élaboration du PA à l’échelle 1/2000<sup>e</sup> en prenant en considération les orientations et les remarques soulevées à ce sujet.</p>

<h3 id="doc-pa-aousserd">Le Plan d’Aménagement du Centre d’Aousserd</h3>
<p>L’actualisation du plan d’aménagement du centre d’Aousserd, homologué en 2001, a pour but de valoriser les potentialités et les ressources de ce centre en prenant en considération ses spécificités locales, naturelles, historiques et culturelles.</p>
<p>Les contraintes naturelles telles que les inondations, les tempêtes de sable et la pénurie de l’eau seront maîtrisées à travers des propositions et perspectives accompagnées d’un ensemble de programmes opérationnels sur le court, moyen et long terme.</p>
<p>Pour l’élaboration de ce nouveau plan d’aménagement, l’A.U.O.E.A se basera sur les résultats des différentes concertations avec ses partenaires locaux pour relever les dysfonctionnements liés à la gestion urbaine de la commune d’Aousserd durant la dernière décennie, ainsi que sur les études menées sur ce territoire, notamment l’étude relative à la protection du centre d’Aousserd contre les inondations et le Plan Communal de Développement de cette commune.</p>

<h3 id="doc-pa-rive-est-argoub">Le plan d’aménagement de la rive Est de la Baie d’Oued Eddahab et l’actualisation du plan d’aménagement du centre d’Al Argoub</h3>
<p>Dans le cadre de la poursuite de la mise en œuvre de la convention de partenariat signée entre l’Agence Urbaine et ses partenaires locaux, lors de la 4<sup>e</sup> édition de son conseil d’administration tenu le 25&nbsp;mai 2012, qui vise la couverture de la Baie d’Oued&nbsp;–&nbsp;Eddahab par une nouvelle génération de documents d’urbanisme, l’Agence Urbaine d’Oued Eddahab Aousserd a lancé en 2014 une étude d’élaboration du plan d’aménagement de la Rive Est qui couvre une superficie de 5&nbsp;500&nbsp;ha et l’actualisation du plan d’aménagement d’Al Argoub homologué en 2003 et qui couvre une superficie de 530&nbsp;ha.</p>
<p>Les principaux objectifs visés par cette étude peuvent être résumés comme suit :</p>
<ul>
<li>Poursuivre la mise en œuvre des orientations majeures du SDAU ;</li>
<li>Concevoir un nouveau plan d’aménagement du centre d’Al Argoub en se basant sur des nouveaux concepts qui tiennent compte de l’enjeu du développement durable ;</li>
<li>Asseoir une plateforme référentielle en matière d’orientation et de gestion des investissements touristiques le long de la Rive Est de la baie ;</li>
<li>Maîtriser le processus d’urbanisation en gestation le long de la baie (côté Est) ;</li>
<li>Conforter les potentialités touristiques et paysagères de la côte de la baie ;</li>
<li>Préserver les qualités environnementales et paysagères de la baie.</li>
</ul>

<h3 id="doc-pa-bir-guandouz">Plan d’aménagement du centre de Bir Guandouz</h3>
<ul>
<li>La situation géographique du centre de Bir Guandouz représente le principal atout qui a incité l’Agence Urbaine à engager la couverture dudit centre par un plan d’aménagement.</li>
<li>En effet, sa localisation sur la route nationale n°&nbsp;1, à 13&nbsp;km de la façade maritime et du village de pêche Lamhiriz, ainsi que sa proximité des frontières avec la Mauritanie, présentent des potentialités indéniables pour son développement.</li>
<li>Ledit instrument a pour objet de définir les conditions d’utilisation du sol en prévoyant la destination des différents espaces (zone d’habitat, industrielle, commerciale, touristique, etc.), en définissant les règles de construction et en imposant les servitudes nécessaires pour assurer la qualité du paysage urbain.</li>
<li>Il est à préciser que ce document est homologué par décret n°&nbsp;2.10.377 du 6 septembre 2010.</li>
<li>Parallèlement, la délimitation dudit centre afin de l’ériger en centre délimité, en application des dispositions législatives et réglementaires en vigueur, est en phase des visas des départements ministériels concernés.</li>
</ul>

<h3 id="doc-pa-tawarta">Le Plan d’Aménagement du Centre de Tawarta</h3>
<p>Le Plan d’aménagement du centre périphérique de Tawarta est le fruit des efforts entrepris par l’Agence Urbaine en collaboration avec l’ensemble de ses partenaires locaux pour asseoir un cadre juridique pour l’encadrement du développement urbanistique de ce noyau urbain et l’encouragement de l’investissement afin de répondre à l’attente de la population locale.</p>
<p>Le plan d’aménagement de Tawarta a été élaboré en se basant sur les éléments suivants :</p>
<ul>
<li>Les orientations du S.D.A.U qui préconisent un plan d’aménagement sectoriel au niveau de Tawarta ;</li>
<li>L’étude de développement et d’aménagement d’un noyau urbain à proximité de la ville de Dakhla sur le site de Tawarta, qui a démontré l’importance des potentialités naturelles agricoles et touristiques du site ;</li>
<li>La création d’un noyau urbain qui peut à la fois diminuer la pression sur la ville de Dakhla et constituer un espace de repos et de détente pour la population riveraine.</li>
</ul>
<p>Le Plan d’aménagement du centre périphérique de Tawarta a été homologué et publié au bulletin officiel n°&nbsp;2663 du 20 rejeb 1435 (20 mai 2014).</p>

<h2>Les P.D.A.R</h2>
<h3 id="doc-pdar-bir-anzarane">Le P.D.A.R du centre de Bir Anzarane</h3>
<p>Le plan de développement du centre de Bir Anzarane, en cours d’homologation, s’inscrit dans le cadre de la généralisation en documents d’urbanisme des centres chefs-lieux des communes. Ce document qui couvre une superficie d’environ 250&nbsp;ha définit le droit d’utilisation des sols et vise notamment à :</p>
<ul>
<li>Développer les capacités du centre pour attirer à la fois la population et les investisseurs ;</li>
<li>Doter la région d’une assiette foncière favorisant les investissements publics ;</li>
<li>Disposer d’une base de programmation des équipements publics ;</li>
<li>Créer une complémentarité fonctionnelle entre le centre chef-lieu de la commune de Bir Anzarane et le village de pêche d’Imoutlane situé à proximité dudit centre ;</li>
<li>Ériger le centre en un véritable pôle de développement socio-économique ;</li>
<li>Encourager la fixation des marins-pêcheurs par la création de structures d’accueil et de centres de service.</li>
</ul>
<p>Et pour atteindre ces objectifs, le plan de développement réserve :</p>
<ul>
<li>72&nbsp;ha pour les habitations ;</li>
<li>9&nbsp;ha pour les équipements ;</li>
<li>8&nbsp;ha pour les activités.</li>
</ul>
<p>En outre, d’importantes surfaces ont été réservées à la détente, à l’attraction et aux espaces verts.</p>
<p>Le Plan d’Aménagement de Bir Anzarane a été homologué et publié au BO n°&nbsp;6347 du 30 mars 2015.</p>

<h3 id="doc-pdar-imlili">Le P.D.A.R du centre d’Imlili</h3>
<p>L’établissement du Plan de Développement du centre d’Imlili vient de l’intérêt qu’accorde l’AUOEA à la généralisation de la couverture des centres chefs-lieux des communes par des documents d’urbanisme, en vue de rétablir un équilibre homogène entre les différentes composantes urbaines au niveau de son ressort territorial. Ce document qui couvre une superficie d’environ 145&nbsp;ha définit le droit d’utilisation des sols et vise notamment à :</p>
<ul>
<li>Établir un équilibre entre le centre et le village de pêcheurs Labouirda dans une vision de développement intégré ;</li>
<li>Renforcer la fonction centrale du centre à l’échelle communale ;</li>
<li>Donner au centre les moyens susceptibles d’élever son attractivité et son niveau de compétitivité en vue de le qualifier pour jouer un rôle plus dynamique au sein de l’espace communal voire provincial et régional ;</li>
<li>Orienter et maîtriser l’extension urbaine du centre ;</li>
<li>Augmenter la capacité d’accueil du centre pour faire face aux flux migratoires.</li>
</ul>
<p>Le Plan de Développement du centre d’Imlili a été homologué et publié au BO n°&nbsp;6347 du 30 mars 2015.</p>

<h3 id="doc-pdar-villages-peche">Les P.D.A.R des villages de pêche de N’Tireft, d’Ain Bida et de Lamhiriz</h3>
<p>Dans le cadre de la mise en œuvre de l’étude relative à l’identification et le développement des centres émergents de la Région d’Oued Eddahab-Lagouira, qui a mis en valeur les potentialités halieutiques et touristiques des villages de pêche le long du littoral atlantique et qui doivent être mises à profit pour le développement des communes rurales avoisinantes situées sur la RN1, l’A.U.O.E.A a initié l’élaboration de trois PDAR des villages de pêche de N’Tireft, Ain Bida et Lamhiriz. L’objectif est d’assurer un développement équitable et harmonieux de ces villages de pêche en symbiose avec les centres avoisinants pour faire de ces sites des micro-pôles de développement local et régional intégrés, capables de participer de manière plus significative au développement socio-économique de toute la Région d’Oued Eddahab&nbsp;–&nbsp;Lagouira.</p>
<ul>
<li><strong>Pour le PDAR de N’Tireft :</strong> une variante a été choisie entre deux variantes proposées par le BET adjudicataire de cette étude lors d’une réunion présidée par Monsieur le Wali de la région d’Oued Eddahab-Lagouira le 30&nbsp;déc.&nbsp;2014. La commission a insisté sur l’importance de l’orientation du développement urbain vers le sud, en raison de l’implantation du futur port atlantique prévu au sud dudit village.</li>
<li><strong>Pour le PDAR d’Ain Bida :</strong> cette étude reste en sa première phase relative à l’élaboration du rapport diagnostic et le projet du plan de développement à l’échelle 1/5000<sup>e</sup>.</li>
<li><strong>Pour le PDAR de Lamhiriz :</strong> le contrat a été résilié avec le BET adjudicataire de ce marché vu le non-respect des clauses du CPS par le bureau d’études, et vu la qualité du livrable.</li>
</ul>

<h3 id="doc-pdar-imoutlane-labouirda">Plan de développement des villages de pêche d’Imoutlane et Labouirda</h3>
<p>L’AUOEA a lancé, en 2014, une étude pour l’élaboration des plans de développement des deux villages de pêche Imoutlane et Labouirda situés respectivement sur le territoire des communes rurales de Bir Anzarane et Imlili. Le but est la poursuite de la couverture des centres émergents identifiés au niveau régional pour orienter et accompagner le développement au niveau de ces centres, qui peuvent constituer des noyaux urbains attractifs pour la population afin de dépasser le déséquilibre que connaît la région et aussi pour diminuer la pression exercée sur la ville de Dakhla.</p>
<p>Il est à signaler que le BET adjudicataire du marché a été désigné en décembre 2014 suite à l’appel d’offres lancé par l’AUOEA à ce sujet.</p>
<div class="doc-urban-figures-grid" aria-label="Illustrations des plans de développement — Imoutlane et Labouirda">
<figure class="doc-urban-figure">
<img src="../assets/img/doc-pdar-imoutlane-labouirda-plan-1.png" alt="Plan de masse du périmètre d’aménagement entre océan Atlantique et baie d’Oued Eddahab : zones ZA, EV, habitat, port central, limite du périmètre." width="1200" height="900" loading="lazy" decoding="async" />
<figcaption>Schéma d’aménagement — implantation côtière et périmètre (Imoutlane&nbsp;/&nbsp;Labouirda).</figcaption>
</figure>
<figure class="doc-urban-figure">
<img src="../assets/img/doc-pdar-imoutlane-labouirda-plan-2.png" alt="Plan d’urbanisme détaillé : voirie, îlots bâtis, espaces verts, zones colorées par affectation." width="1200" height="900" loading="lazy" decoding="async" />
<figcaption>Plan de développement — trame viaire et zonage (extrait graphique).</figcaption>
</figure>
<figure class="doc-urban-figure">
<img src="../assets/img/doc-pdar-imoutlane-labouirda-plan-3.png" alt="Plan sur fond topographique : demi-cercle urbain en tête de plan, grille d’îlots, voies et indications techniques." width="1200" height="900" loading="lazy" decoding="async" />
<figcaption>Plan de développement — organisation des îlots et voirie (extrait graphique).</figcaption>
</figure>
</div>

<div class="cta-strip"><p>Consulter la cartographie et les documents en ligne</p><a class="btn-primary" href="service-taamir.html">Portail Taamir (Karazal)</a></div>`;

const PLANIF_ETUDES_BODY = `<h3>Intervention sur les quartiers menaçant ruine à Dakhla — vision de renouvellement urbain</h3>
<p>Les quartiers centraux (Hay Al Matar, Labbouichate, Ksikissate, Moulay Rachid, noyau central, carrefour des avenues Al Walae et Hassan II), en dégradation avancée, sont stratégiques. Le projet de renouvellement urbain renforce la revalorisation de ces quartiers et de la ville. Il préfigure une agglomération dynamique avec qualité urbaine et fonctionnement du territoire. Scénario : renouvellement différencié, action volontariste et évolution tendancielle, centralités par quartier et dynamiques spontanées sous interventions ponctuelles. Composantes : recomposition urbaine, voirie, équipements, habitat, commerce et services, paysage urbain.</p>
<p><em>Localisation des projets phares</em> et <em>illustrations</em> : disponibles au service des études de l’AUDOE sur demande.</p>
<h3>Règlement de voirie de la ville de Dakhla</h3>
<p>Fondé sur une maîtrise du développement urbain cohérente avec la gestion urbaine et les documents d’urbanisme, pour préserver le cadre bâti, les valeurs architecturales et esthétiques et anticiper le développement harmonieux. Il a pour objet de :</p>
<ol>
<li>Mieux maîtriser les fonctions de la gestion urbaine ;</li>
<li>Faciliter la tâche de l’administration ;</li>
<li>Mettre en place une plateforme référentielle juridique pour l’instruction des demandes d’autorisation de construire ;</li>
<li>Éviter les ambiguïtés d’interprétation entre les parties ;</li>
<li>Permettre une bonne assimilation des données techniques et juridiques ;</li>
<li>Rationaliser la gestion urbaine ;</li>
<li>Améliorer la qualité architecturale, urbanistique et paysagère ;</li>
<li>Assurer commodité, hygiène et sécurité du cadre bâti et de l’espace public.</li>
</ol>
<p>Validé par l’A.U.O.E.A et ses partenaires ; référentiel appliqué par la commission de voirie.</p>
<h3>Étude d’aménagement urbanistique — zone touristique au nord de Dakhla</h3>
<p>Étude pour l’U.A.T projetée par le S.D.A.U au nord de Dakhla ; référence entre documents d’urbanisme et futur plan de lotissement. Le livrable permet de définir le programme de l’U.A.T, les affectations et prescriptions (hauteur, COS, CUS, reculs…), les orientations architecturales et environnementales, et de servir de base à l’instruction des autorisations de lotir et des permis de construire.</p>
<h3>Plan de déplacements urbains (PDU) de Dakhla</h3>
<p>Étude stratégique à l’horizon 2023, lancée parallèlement au nouveau PA. Diagnostic partagé : pas de dysfonctionnements majeurs actuels ; plan d’actions pour l’avenir (croissance, trafic, infrastructures, piétons, parkings). Court terme : poids lourds (itinéraires, stationnements), partage de la voirie. Moyen–long terme : multimodalité et modes doux. Validé en réunion présidée par le Wali avec le président de la commune et les services concernés.</p>
<h3>Autres études (aperçu)</h3>
<p>Les études complémentaires (zone industrielle « Essalam », sites touristiques, schéma de zoning du littoral ouest, projet urbain et corniche, etc.) sont documentées dans les rapports remis au service des études ; les schémas et annexes peuvent être consultés sur place ou demandés via le <a href="service-bod.html">bureau d’ordre</a>.</p>`;

const CREATION_PAGE_BODY = `<div class="creation-intro-grid reveal visible">
  <figure class="creation-photo">
    <img src="../assets/img/siege-audoe.png" alt="Siège de l’Agence urbaine d’Oued Eddahab–Aousserd à Dakhla" width="720" height="480" loading="lazy" />
    <figcaption class="creation-photo-cap">Siège de l’AUDOE — Dakhla</figcaption>
    <div class="creation-socials" aria-label="Liens utiles">
      <a class="creation-social creation-social--fb" href="https://www.facebook.com/agencedakhla/" target="_blank" rel="noopener noreferrer" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
      <a class="creation-social creation-social--mail" href="mailto:agencedakhla@gmail.com" title="Écrire à l’AUDOE"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
      <a class="creation-social creation-social--info" href="service-demande-info.html" title="Demande d’informations"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></a>
    </div>
  </figure>
  <div class="creation-legal-text">
    <p>En application des dispositions de l’article premier du <strong>dahir portant loi n°&nbsp;1-93-51</strong> du 22 rebia I 1414 (10 septembre 1993) instituant les agences urbaines, l’<strong>Agence Urbaine d’Oued Eddahab–Aousserd</strong> a été créée par le <strong>décret n°&nbsp;2-03-221</strong> du 14 rabii I 1425 (4 mai 2004), paru au <em>BO</em> n°&nbsp;5214 du 20 mai 2004.</p>
    <p>Établissement public doté de la personnalité morale et de l’autonomie financière, l’Agence Urbaine d’Oued Ed-Dahab–Aousserd, dont le siège est fixé à <strong>Ed-Dakhla</strong>, est placée sous la tutelle du Ministère de l’Urbanisme et de l’Aménagement du Territoire.</p>
    <h2>Périmètre et missions</h2>
    <p>L’AUDOE regroupe la planification, l’instruction des autorisations et le contrôle sur le périmètre de la région Dakhla-Oued Eddahab et Aousserd : élaboration des documents d’urbanisme, suivi des opérations d’aménagement et coordination avec les collectivités et partenaires institutionnels.</p>
  </div>
</div>

<section class="carto-feature reveal visible" aria-labelledby="carto-feature-title">
  <h2 id="carto-feature-title" class="carto-feature-heading">Cartographie interactive</h2>
  <p class="carto-feature-lead">Consultez les documents d’urbanisme, les plans d’aménagement et les données territoriales de la région Dakhla–Oued Eddahab sur les portails nationaux et outils de visualisation.</p>
  <div class="carto-feature-stage">
    <div class="carto-feature-pattern" aria-hidden="true"></div>
    <div class="carto-glass-card">
      <div class="carto-glass-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
      <h3 class="carto-glass-title">Accéder au Géoportail</h3>
      <p class="carto-glass-desc">Explorez le territoire, consultez les zonages et accédez aux documents d’urbanisme en ligne (Taamir / Karazal).</p>
      <a class="btn-primary carto-glass-btn" href="service-taamir.html">Ouvrir Taamir</a>
    </div>
  </div>
</section>

<section class="creation-map-section reveal visible" aria-labelledby="creation-map-title">
  <h2 id="creation-map-title" class="block-section-title">Nous situer</h2>
  <p class="block-section-desc">Agence urbaine d’Oued Eddahab–Aousserd — Avenue Mohammed VI, Dakhla.</p>
  <div class="map-embed-shell">
    <iframe class="map-embed-frame" title="Carte — AUDOE Dakhla" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=-15.975%2C23.698%2C-15.918%2C23.728&amp;layer=mapnik&amp;marker=23.713%2C-15.9465"></iframe>
    <p class="map-embed-foot"><a href="https://www.openstreetmap.org/?mlat=23.713&amp;mlon=-15.9465#map=15/23.713/-15.9465" target="_blank" rel="noopener noreferrer">Agrandir la carte</a> (OpenStreetMap)</p>
  </div>
</section>

<section class="creation-contact-section reveal visible" aria-labelledby="creation-contact-title">
  <h2 id="creation-contact-title" class="visually-hidden">Contact</h2>
  <div class="contact-dual-grid">
    <div class="contact-info-panel">
      <h3 class="contact-panel-title">Coordonnées</h3>
      <ul class="contact-info-list">
        <li class="contact-info-row">
          <span class="contact-info-ic contact-info-ic--loc" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <div><strong>Adresse</strong><span class="contact-info-txt">Avenue Mohammed VI, Dakhla – Oued Eddahab, Maroc</span></div>
        </li>
        <li class="contact-info-row">
          <span class="contact-info-ic contact-info-ic--tel" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
          <div><strong>Téléphone</strong><span class="contact-info-txt"><a href="tel:+212528897801">0528-89-78-01</a></span></div>
        </li>
        <li class="contact-info-row">
          <span class="contact-info-ic contact-info-ic--mail" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
          <div><strong>E-mail</strong><span class="contact-info-txt"><a href="mailto:agencedakhla@gmail.com">agencedakhla@gmail.com</a></span></div>
        </li>
      </ul>
    </div>
    <div class="contact-form-panel">
      <h3 class="contact-panel-title">Envoyez-nous un message</h3>
      <form id="form-creation-contact" class="creation-contact-form service-form service-form-wide" novalidate>
        <div class="creation-form-row">
          <div class="field"><label for="cc-nom">Nom complet <span class="req">*</span></label><input id="cc-nom" name="nom" type="text" autocomplete="name" required placeholder="Votre nom" /></div>
          <div class="field"><label for="cc-email">E-mail <span class="req">*</span></label><input id="cc-email" name="email" type="email" autocomplete="email" required placeholder="vous@email.com" /></div>
        </div>
        <div class="creation-form-row">
          <div class="field"><label for="cc-tel">Téléphone</label><input id="cc-tel" name="tel" type="tel" autocomplete="tel" placeholder="+212 6…" /></div>
          <div class="field"><label for="cc-sujet">Sujet <span class="req">*</span></label>
            <select id="cc-sujet" name="sujet" required>
              <option value="">— Choisir —</option>
              <option>Demande d’information</option>
              <option>Réclamation</option>
              <option>Partenariat</option>
              <option>Autre</option>
            </select>
          </div>
        </div>
        <div class="field"><label for="cc-msg">Message <span class="req">*</span></label><textarea id="cc-msg" name="message" rows="5" required placeholder="Comment pouvons-nous vous aider ?"></textarea></div>
        <div class="field field-inline"><label for="cc-captcha">Anti-robot : combien font 3&nbsp;+&nbsp;4&nbsp;? <span class="req">*</span></label><input id="cc-captcha" name="captcha" type="text" inputmode="numeric" autocomplete="off" required /></div>
        <button type="submit" class="btn-primary creation-contact-submit">Envoyer le message</button>
      </form>
      <div id="creation-contact-success" class="form-success" hidden>
        <h2>Message prêt</h2>
        <p>Ouvrez votre messagerie pour envoyer le brouillon à l’AUDOE.</p>
        <p><a class="btn-primary js-mailto-creation" href="#">Ouvrir l’e-mail</a> · <a class="btn-secondary" href="service-bod.html">Bureau d’ordre</a></p>
      </div>
    </div>
  </div>
</section>`;

/** Page contact autonome : coordonnées et formulaire (sans carte embarquée ni photo du siège sur cette page). */
const CONTACT_STANDALONE_PAGE_BODY = `<p class="contact-standalone-lead">Pour toute question relative à l’urbanisme, aux autorisations ou aux documents d’urbanisme, vous pouvez nous écrire depuis cette page, nous appeler ou vous rendre à l’adresse ci-dessous. Les horaires d’accueil au guichet peuvent varier : renseignez-vous par téléphone avant de vous déplacer.</p>

<section class="creation-contact-section contact-standalone-form-wrap reveal visible" aria-labelledby="contact-form-heading">
  <h2 id="contact-form-heading" class="block-section-title">Écrire à l’Agence</h2>
  <div class="contact-dual-grid">
    <div class="contact-info-panel">
      <h3 class="contact-panel-title">Coordonnées</h3>
      <ul class="contact-info-list">
        <li class="contact-info-row">
          <span class="contact-info-ic contact-info-ic--loc" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <div><strong>Adresse</strong><span class="contact-info-txt">Avenue Mohammed VI, Dakhla – Oued Eddahab, Maroc</span></div>
        </li>
        <li class="contact-info-row">
          <span class="contact-info-ic contact-info-ic--tel" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
          <div><strong>Téléphone</strong><span class="contact-info-txt"><a href="tel:+212528897801">0528-89-78-01</a></span></div>
        </li>
        <li class="contact-info-row">
          <span class="contact-info-ic contact-info-ic--mail" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
          <div><strong>E-mail</strong><span class="contact-info-txt"><a href="mailto:agencedakhla@gmail.com">agencedakhla@gmail.com</a></span></div>
        </li>
      </ul>
    </div>
    <div class="contact-form-panel">
      <h3 class="contact-panel-title">Envoyez-nous un message</h3>
      <form id="form-contact-standalone" class="creation-contact-form service-form service-form-wide" novalidate>
        <div class="creation-form-row">
          <div class="field"><label for="cs-nom">Nom complet <span class="req">*</span></label><input id="cs-nom" name="nom" type="text" autocomplete="name" required placeholder="Votre nom" /></div>
          <div class="field"><label for="cs-email">E-mail <span class="req">*</span></label><input id="cs-email" name="email" type="email" autocomplete="email" required placeholder="vous@email.com" /></div>
        </div>
        <div class="creation-form-row">
          <div class="field"><label for="cs-tel">Téléphone</label><input id="cs-tel" name="tel" type="tel" autocomplete="tel" placeholder="+212 6…" /></div>
          <div class="field"><label for="cs-sujet">Sujet <span class="req">*</span></label>
            <select id="cs-sujet" name="sujet" required>
              <option value="">— Choisir —</option>
              <option>Demande d’information</option>
              <option>Réclamation</option>
              <option>Partenariat</option>
              <option>Autre</option>
            </select>
          </div>
        </div>
        <div class="field"><label for="cs-msg">Message <span class="req">*</span></label><textarea id="cs-msg" name="message" rows="5" required placeholder="Votre message"></textarea></div>
        <div class="field field-inline"><label for="cs-captcha">Anti-robot : combien font 5&nbsp;+&nbsp;2&nbsp;? <span class="req">*</span></label><input id="cs-captcha" name="captcha" type="text" inputmode="numeric" autocomplete="off" required /></div>
        <button type="submit" class="btn-primary creation-contact-submit">Envoyer le message</button>
      </form>
      <div id="contact-standalone-success" class="form-success" hidden>
        <h2>Message prêt</h2>
        <p>Utilisez le bouton ci-dessous pour ouvrir votre messagerie avec le texte prérempli, puis envoyez l’e-mail.</p>
        <p><a class="btn-primary js-mailto-contact-standalone" href="#">Ouvrir l’e-mail</a></p>
        <p class="hint" style="margin-top:16px">Adresse directe : <a href="mailto:agencedakhla@gmail.com">agencedakhla@gmail.com</a></p>
      </div>
    </div>
  </div>
</section>`;

export const AUD_PAGE_UPDATES = {
  'contact.html': {
    wide: true,
    body: CONTACT_STANDALONE_PAGE_BODY,
  },
  'presentation-creation.html': {
    wide: true,
    body: CREATION_PAGE_BODY,
  },
  'presentation-missions.html': {
    body: `<p>Dans les limites de son ressort territorial, l’Agence Urbaine d’Oued Eddahab–Aousserd est chargée notamment de :</p>
<p>Programmer les projets d’aménagement inhérents à la réalisation des objectifs des schémas directeurs ;</p>
<ol>
<li>Réaliser les études nécessaires à l’établissement des schémas directeurs d’aménagement urbain et suivre l’exécution des orientations qui y sont définies ;</li>
<li>Préparer les projets de documents d’urbanisme réglementaire, notamment les plans de zonage, les plans d’aménagement et les plans de développement ;</li>
<li>Donner un avis conforme dans un délai maximum d’un mois sur tous les projets de lotissements, groupes d’habitations, morcellements et constructions, qui doivent lui être transmis, à cet effet, par les autorités compétentes ;</li>
<li>Contrôler la conformité des lotissements, morcellements, groupes d’habitations et constructions en cours de réalisation avec les dispositions législatives et réglementaires en vigueur et avec les autorisations de lotir, de morceler, de créer des groupes d’habitations ou de construire accordées ;</li>
<li>Réaliser les études de projets d’aménagement de secteurs particuliers et exécuter tous projets de travaux édilitaires ou d’aménagement pour le compte de l’État, des collectivités locales ou pour toute autre personne publique ou privée qui en ferait la demande lorsque le projet est d’utilité publique ;</li>
<li>Promouvoir et réaliser des opérations de réhabilitation urbaine, de rénovation immobilière et de restructuration de quartiers dépourvus d’équipements d’infrastructure et, à cette fin, réaliser les études et acquérir les immeubles nécessaires à ces opérations ;</li>
<li>Prendre des participations dans toute entreprise dont l’activité correspond aux objectifs et aux missions qui lui sont assignés ;</li>
<li>Promouvoir, avec l’assistance des corps élus concernés, la constitution et le développement des groupements de propriétaires en mettant à leur disposition les cadres nécessaires en vue de faciliter la mise en œuvre des documents d’urbanisme et notamment susciter la création d’associations syndicales en application de la législation en vigueur en la matière et veiller au suivi des opérations menées par lesdites associations en coordination avec les conseils communaux précités ;</li>
<li>Fournir son assistance technique aux collectivités locales en matière d’urbanisme et d’aménagement ainsi qu’aux opérateurs publics et privés qui en feraient la demande, dans leurs actions d’aménagement ;</li>
<li>Collecter et diffuser toutes informations relatives au développement urbanistique des préfectures et/ou provinces situées dans le ressort territorial de l’agence.</li>
</ol>`,
  },
  'presentation-champs.html': {
    wide: true,
    body: `<p>En vertu des dispositions de l’article 2 du décret n°2-03-221 du 14 rabii I 1425 (4 mai 2004), le ressort territorial de l’Agence Urbaine d’Oued Eddahab–Aousserd comprend les provinces d’Oued Ed-Dahab et Aousserd, qui constituent l’ensemble de la région de Dakhla–Oued Ed-Dahab. Ladite région est située à l’extrême sud-ouest du territoire national. Elle couvre une superficie de 142&nbsp;865 km², soit 20&nbsp;% de la superficie totale du Royaume. Elle est délimitée au nord par la région de Laâyoune–Sakia El Hamra, à l’ouest par l’océan Atlantique, au sud et à l’est par la République islamique de Mauritanie. La région de Dakhla–Oued Eddahab est constituée de deux provinces comprenant 13 communes dont 2 urbaines. La province d’Oued Eddahab couvre une superficie de 76&nbsp;948 km². Celle d’Aousserd couvre une superficie de 65&nbsp;917 km².</p>
<figure class="champs-territory-map reveal visible">
  <img src="../assets/img/carte-provinces-oued-aousserd.png" alt="Carte des provinces d’Oued Eddahab et d’Aousserd : principales communes, océan Atlantique, frontière avec la Mauritanie, routes nationales et provinciales, villages de pêche et légende (centres de commune, limites communales)." width="1100" height="700" loading="lazy" />
  <figcaption>Vue d’ensemble du ressort : province d’Oued Eddahab (Dakhla, Bir Anzarane, El Argoub, Imlili, etc.) et province d’Aousserd (Aousserd, Bir Gandouz, Lagouira, etc.). Légende indicative — points noirs : centres de commune ; points verts : villages de pêche ; traits rouges : routes nationales et provinciales.</figcaption>
</figure>`,
  },
  'presentation-organisation.html': {
    wide: true,
    body: `<p>L’Agence Urbaine d’Oued Eddahab–Aousserd est dotée d’une structure qui se compose de deux départements — l’un de la gestion urbaine et de la réglementation, l’autre des études et de la topographie — ainsi qu’une division des affaires administratives et financières et un service de l’informatique. L’Agence Urbaine d’Oued Eddahab–Aousserd a été interpellée à prendre le positionnement adéquat vis-à-vis de la nouvelle donne urbanistique de son ressort territorial à portée multiple : sociale, économique et urbanistique. Les efforts consentis par l’établissement afin de contribuer à la concrétisation de cette opération d’envergure ont alors été considérables malgré son jeune âge.</p>
<figure class="org-chart-figure reveal visible">
  <img src="../assets/img/organigramme-audoe.png" alt="Organigramme de l’AUDOE : Directeur ; chargé de mission ; division des affaires administratives et financières (personnel, budget) ; service informatique ; département des études et de la topographie (divisions études, études foncières et topographie, avec services) ; département de la planification urbaine et des affaires foncières (divisions gestion urbaine et affaires juridiques, avec services)." width="1000" height="700" loading="lazy" />
  <figcaption>Organigramme structurel — direction, départements, divisions et services.</figcaption>
</figure>`,
  },
  'presentation-responsables.html': {
    wide: true,
    body: `<p>Standard : <strong>0528-89-78-01</strong>. Pour joindre un service par é-mail : <a href="mailto:agencedakhla@gmail.com">agencedakhla@gmail.com</a> ou prise de contact via le <a href="service-bod.html">bureau d’ordre</a>.</p>
<table class="content-table" aria-label="Responsables de l’AUDOE">
<thead><tr><th>Fonction</th><th>Responsable</th><th>Téléphone</th></tr></thead>
<tbody>
<tr><td>Directeur de l’Agence Urbaine de Dakhla – Oued Eddahab</td><td>M. AMOR Abdelhay</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de la division des études foncières et de la topographie</td><td>M. NASRI Mbarek</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de la division des affaires juridiques et de la réglementation</td><td>M. REMITI Ali</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de la division de la gestion urbaine</td><td>M. KARIMI Rachid</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de la division des études</td><td>M. NAJEM Mounir</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service du budget, des marchés et de l’équipement</td><td>M. EL ARROUSSI Mustapha</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service du contrôle</td><td>M. AZOUAOUI Hammou</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service de la réglementation et de l’orientation</td><td>Mme ECHARGAOUI Rabia</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service des études foncières</td><td>Mme HAMDI Rhizlane</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service de la topographie</td><td>M. CHOUKRI Faycal</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service du personnel, de la formation et de la documentation</td><td>M. SARGHINI LAKLILI Nawfal</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service de l’urbanisme et de l’architecture</td><td>M. EL KOUDRI EL Hassan</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service de l’informatique</td><td>M. ARHARBI Jalal</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service des affaires juridiques</td><td>M. AHL ABDELKADER Mohamed</td><td>0528-89-78-01</td></tr>
<tr><td>Chef de service des études générales</td><td>M. EL FETOUAKI Morad</td><td>0528-89-78-01</td></tr>
</tbody>
</table>`,
  },
  'gestion-procedures.html': {
    wide: true,
    extraScripts: ['assets/js/procedure-tabs.js'],
    body: `<p>Les autorisations d’urbanisme (permis de construire, lotir, morceler, démolir, etc.) suivent les procédures nationales en vigueur. Choisissez le parcours correspondant à la population de la commune concernée :</p>
<div class="procedure-switch" data-procedure-tabs>
  <div class="procedure-switch__toolbar" role="tablist" aria-label="Régime communal selon la population">
    <button type="button" class="procedure-switch__tab" role="tab" id="procedure-tab-moins" aria-selected="true" aria-controls="procedure-panel-moins" tabindex="0">
      <span class="procedure-switch__tab-label">Moins de 50&nbsp;000 habitants</span>
      <span class="procedure-switch__tab-hint">Dépôt en mairie, filière locale</span>
    </button>
    <button type="button" class="procedure-switch__tab" role="tab" id="procedure-tab-plus" aria-selected="false" aria-controls="procedure-panel-plus" tabindex="-1">
      <span class="procedure-switch__tab-label">Plus de 50&nbsp;000 habitants</span>
      <span class="procedure-switch__tab-hint">Guichet unique, commissions dédiées</span>
    </button>
  </div>
  <div class="procedure-switch__panels">
    <div class="procedure-switch__panel" id="procedure-panel-moins" role="tabpanel" aria-labelledby="procedure-tab-moins">
      <h2 class="procedure-switch__panel-title">Communes de moins de 50&nbsp;000 habitants</h2>
      <figure class="procedure-flowchart-figure reveal visible">
        <img src="../assets/img/procedure-autorisation-moins-50k.png" alt="Organigramme de procédure pour les petites communes : pétitionnaire et maître d’œuvre, dépôt au bureau d’ordre de la commune, commission préfectorale d’urbanisme, filières petits et grands projets, avis, président du conseil communal, octroi ou refus. Délais indicatifs sur les côtés." width="900" height="700" loading="lazy" />
        <figcaption>Schéma de procédure — communes de moins de 50&nbsp;000 habitants (dépôt en mairie, consultations, petits / grands projets, délais indicatifs).</figcaption>
      </figure>
      <ul>
        <li>Constituer le dossier (formulaires, plans, notice, titre foncier ou attestation, études techniques si requis) ;</li>
        <li>Déposer la demande auprès de l’autorité compétente (commune ou service désigné) dans le ressort ;</li>
        <li>L’AUDOE est saisie pour avis conforme ou contrôle selon les cas ;</li>
        <li>Suivre l’instruction ; compléter le dossier si demande de pièces complémentaires ;</li>
        <li>Retrait de l’autorisation ou du titre d’occupation selon la procédure applicable.</li>
      </ul>
    </div>
    <div class="procedure-switch__panel" id="procedure-panel-plus" role="tabpanel" aria-labelledby="procedure-tab-plus" hidden>
      <h2 class="procedure-switch__panel-title">Communes de plus de 50&nbsp;000 habitants</h2>
      <figure class="procedure-flowchart-figure reveal visible">
        <img src="../assets/img/procedure-autorisation-plus-50k.png" alt="Organigramme de procédure pour les communes avec guichet unique : dépôt au bureau d’ordre du guichet unique, commission du guichet unique, commission préfectorale d’urbanisme, filières petits et grands projets, avis recueillis, décision du président du conseil communal, octroi ou refus." width="900" height="700" loading="lazy" />
        <figcaption>Schéma de procédure — communes de plus de 50&nbsp;000 habitants (guichet unique, commissions, petits / grands projets, délais indicatifs).</figcaption>
      </figure>
      <ul>
        <li>Dépôt du dossier auprès des services d’urbanisme de la commune concernée (guichet unique ou service instructeur désigné) ;</li>
        <li>Instruction selon les délais légaux et circulaires d’application ;</li>
        <li>Contrôle de conformité et visites de chantier par l’AUDOE sur le territoire régional ;</li>
        <li>Pour les opérations complexes : concertation préalable, enquête publique ou procédures spécifiques peuvent s’ajouter.</li>
      </ul>
    </div>
  </div>
</div>
<p>Pour une première relecture de votre dossier avant dépôt officiel, utilisez le service local suivant (sans quitter ce site) :</p>
<div class="cta-strip"><p>Pré-instruction en ligne (formulaire local)</p><a class="btn-primary" href="service-preinstruction.html">Accéder à la pré-instruction</a></div>`,
  },
  'gestion-assistance.html': {
    wide: true,
    extraScripts: ['assets/js/assistance-showcase.js'],
    body: `<p>L’Agence Urbaine d’Oued Eddahab–Aousserd joue un rôle primordial dans l’amélioration du paysage urbain et architectural de la région, à travers les services fournis à ses différents partenaires locaux, dans le cadre de l’accompagnement technique et architectural.</p>
<p>À ce sujet, et suite à la demande de Monsieur le Wali de la région de Dakhla–Oued Eddahab, l’Agence urbaine a proposé plusieurs aménagements visant l’amélioration du paysage urbain de la ville de Dakhla.</p>

<section class="assistance-proposal" id="assistance-place-hassan-ii" aria-labelledby="assist-t1">
<h2 id="assist-t1" class="assistance-proposal__title">1 — Proposition de l’aménagement paysager de la place Hassan-II</h2>
<p>Adjacente aux deux axes structurants de la ville (avenue Hassan II et avenue Al Walae) et des grands lieux emblématiques de Dakhla (l’église catholique, la wilaya d’Oued Eddahab–Lagouira et le grand hôtel Sahara Regency), la place Hassan II joue le rôle de la place centrale de la ville. Non seulement elle accueille régulièrement les événements marquants de la ville et de la région, mais elle est aussi le lieu de rencontres et de passage principal. C’est aussi l’unique place qui comporte un repère sous forme de statue.</p>
<p>C’est ce qui justifie amplement la proposition d’un réaménagement de cette place pour contribuer à l’amélioration du paysage urbain de la ville.</p>
<div class="assistance-showcase" data-assistance-showcase tabindex="0" aria-roledescription="carrousel" aria-label="Visuels — proposition place Hassan II">
  <p class="assistance-showcase__hint"><span class="assistance-showcase__kbd">←</span><span class="assistance-showcase__kbd">→</span> ou glisser · choisir le visuel ci-dessous · <strong>Agrandir</strong> pour plein écran</p>
  <div class="assistance-showcase__shell">
    <button type="button" class="assistance-showcase__nav assistance-showcase__nav--prev" aria-label="Visuel précédent"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button>
    <figure class="assistance-showcase__stage">
      <div class="assistance-showcase__img-wrap">
        <img class="assistance-showcase__hero" src="../assets/img/assistance-hassan2-vue1.png" alt="Visualisation 3D de la proposition pour la place Hassan II à Dakhla : place piétonne, fontaines, monument central, palmiers et mobilier urbain." width="1200" height="675" loading="eager" decoding="async" />
        <button type="button" class="assistance-showcase__expand"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg><span>Agrandir</span></button>
      </div>
      <figcaption class="assistance-showcase__cap" aria-live="polite">Place Hassan II — vue d’ensemble (perspective 1).</figcaption>
    </figure>
    <button type="button" class="assistance-showcase__nav assistance-showcase__nav--next" aria-label="Visuel suivant"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>
  </div>
  <div class="assistance-showcase__track" role="tablist" aria-label="Choisir un visuel">
    <button type="button" class="assistance-showcase__chip is-active" role="tab" aria-selected="true"
      data-src="../assets/img/assistance-hassan2-vue1.png"
      data-alt="Visualisation 3D de la proposition pour la place Hassan II à Dakhla : place piétonne, fontaines, monument central, palmiers et mobilier urbain."
      data-caption="Place Hassan II — vue d’ensemble (perspective 1).">
      <span class="assistance-showcase__chip-text">Perspective 1</span>
    </button>
    <button type="button" class="assistance-showcase__chip" role="tab" aria-selected="false"
      data-src="../assets/img/assistance-hassan2-vue2.png"
      data-alt="Autre perspective de la proposition d’aménagement de la place Hassan II : dallage, jets d’eau circulaires et sculpture centrale."
      data-caption="Place Hassan II — vue d’ensemble (perspective 2).">
      <span class="assistance-showcase__chip-text">Perspective 2</span>
    </button>
    <button type="button" class="assistance-showcase__chip" role="tab" aria-selected="false"
      data-src="../assets/img/assistance-hassan2-masse.png"
      data-alt="Plan de masse de la place Hassan II : esplanade, zone centrale avec fontaine, plantations et bancs en périphérie."
      data-caption="Proposition d’aménagement de la place Hassan II — plan de masse.">
      <span class="assistance-showcase__chip-text">Plan de masse</span>
    </button>
  </div>
</div>
</section>

<section class="assistance-proposal" id="assistance-jardin-regency" aria-labelledby="assist-t2">
<h2 id="assist-t2" class="assistance-proposal__title">2 — Proposition de l’aménagement paysager du jardin devant l’hôtel Sahara Regency</h2>
<p>De même, la place de l’hôtel Sahara Regency a fait l’objet d’une proposition d’aménagement paysager par l’Agence urbaine pour assurer la continuité de la mise en valeur de l’aménagement précité de la place Hassan II. Par ailleurs, la conception d’aménagement s’est basée sur la création d’un nouvel espace de loisirs et de détente pour accompagner la relance urbanistique que connaît la ville de Dakhla ces dernières années.</p>
<div class="assistance-showcase assistance-showcase--single" data-assistance-showcase tabindex="0" aria-label="Visuel — jardin Sahara Regency">
  <div class="assistance-showcase__shell">
    <figure class="assistance-showcase__stage">
      <div class="assistance-showcase__img-wrap">
        <img class="assistance-showcase__hero" src="../assets/img/assistance-regency-jardin.png" alt="Schéma d’aménagement paysager du jardin devant l’hôtel Sahara Regency : allées, espaces verts, fontaine et mobilier." width="1100" height="700" loading="lazy" decoding="async" />
        <button type="button" class="assistance-showcase__expand"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg><span>Agrandir</span></button>
      </div>
      <figcaption class="assistance-showcase__cap">Proposition d’aménagement paysager du jardin devant l’hôtel Sahara Regency.</figcaption>
    </figure>
  </div>
</div>
</section>

<section class="assistance-proposal" id="assistance-mur-aeroport" aria-labelledby="assist-t3">
<h2 id="assist-t3" class="assistance-proposal__title">3 — Proposition de requalification et de traitement du mur de l’aéroport longeant l’avenue Hassan II</h2>
<p>Le but de cette proposition est d’intégrer le mur de clôture de l’aéroport dans le paysage urbain de la ville, tout en ajoutant une touche esthétique aux axes principaux de la ville en s’inspirant de l’architecture andalouse marquant encore les quartiers centraux de la ville de Dakhla faisant face à ce mur.</p>
<p>Au-delà de l’aspect esthétique de cet aménagement, l’implantation de la végétation et des lampadaires le long du mur créera un espace de flânerie pour les quartiers riverains.</p>
<div class="assistance-showcase assistance-showcase--single" data-assistance-showcase tabindex="0" aria-label="Visuel — mur aéroport">
  <div class="assistance-showcase__shell">
    <figure class="assistance-showcase__stage">
      <div class="assistance-showcase__img-wrap">
        <img class="assistance-showcase__hero" src="../assets/img/assistance-aeroport-mur.png" alt="Perspective du mur de clôture de l’aéroport réaménagé le long de l’avenue Hassan II : niches en pierre, arcades, plantations et éclairage." width="1200" height="520" loading="lazy" decoding="async" />
        <button type="button" class="assistance-showcase__expand"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg><span>Agrandir</span></button>
      </div>
      <figcaption class="assistance-showcase__cap">Proposition de requalification et de traitement du mur de l’aéroport longeant l’avenue Hassan II.</figcaption>
    </figure>
  </div>
</div>
</section>

<section class="assistance-proposal" id="assistance-residence-wali" aria-labelledby="assist-t4">
<h2 id="assist-t4" class="assistance-proposal__title">4 — Proposition de l’aménagement paysager de l’entrée principale de la résidence de Monsieur le Wali de la région de Dakhla–Oued Eddahab</h2>
<p>Étant un emblème à la fois administratif et esthétique, la résidence de Monsieur le Wali a fait l’objet d’une proposition visant la requalification de son entrée principale.</p>
<p>Cette entrée a aussi une grande importance vu sa position stratégique le long du grand axe Al Walae, et sa proximité de l’aéroport international de Dakhla.</p>
<div class="assistance-showcase" data-assistance-showcase tabindex="0" aria-roledescription="carrousel" aria-label="Visuels — entrée résidence du Wali">
  <p class="assistance-showcase__hint"><span class="assistance-showcase__kbd">←</span><span class="assistance-showcase__kbd">→</span> ou glisser · choisir le visuel ci-dessous · <strong>Agrandir</strong></p>
  <div class="assistance-showcase__shell">
    <button type="button" class="assistance-showcase__nav assistance-showcase__nav--prev" aria-label="Visuel précédent"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button>
    <figure class="assistance-showcase__stage">
      <div class="assistance-showcase__img-wrap">
        <img class="assistance-showcase__hero" src="../assets/img/assistance-wali-vue1.png" alt="Visualisation de l’entrée principale de la résidence du Wali : allées paysagères, portail monument et espaces verts." width="1200" height="675" loading="lazy" decoding="async" />
        <button type="button" class="assistance-showcase__expand"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg><span>Agrandir</span></button>
      </div>
      <figcaption class="assistance-showcase__cap" aria-live="polite">Entrée principale de la résidence du Wali — vue 1.</figcaption>
    </figure>
    <button type="button" class="assistance-showcase__nav assistance-showcase__nav--next" aria-label="Visuel suivant"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>
  </div>
  <div class="assistance-showcase__track" role="tablist" aria-label="Choisir un visuel">
    <button type="button" class="assistance-showcase__chip is-active" role="tab" aria-selected="true"
      data-src="../assets/img/assistance-wali-vue1.png"
      data-alt="Visualisation de l’entrée principale de la résidence du Wali : allées paysagères, portail monument et espaces verts."
      data-caption="Entrée principale de la résidence du Wali — vue 1.">
      <span class="assistance-showcase__chip-text">Vue 1</span>
    </button>
    <button type="button" class="assistance-showcase__chip" role="tab" aria-selected="false"
      data-src="../assets/img/assistance-wali-vue2.png"
      data-alt="Seconde perspective de l’aménagement paysager de l’entrée de la résidence du Wali à Dakhla."
      data-caption="Entrée principale de la résidence du Wali — vue 2.">
      <span class="assistance-showcase__chip-text">Vue 2</span>
    </button>
    <button type="button" class="assistance-showcase__chip" role="tab" aria-selected="false"
      data-src="../assets/img/assistance-wali-plan.png"
      data-alt="Plan de masse de l’aménagement paysager de l’entrée de la résidence du Wali : circulations, espaces verts et stationnement."
      data-caption="Proposition d’aménagement paysager de l’entrée principale de la résidence de Monsieur le Wali — plan de masse.">
      <span class="assistance-showcase__chip-text">Plan de masse</span>
    </button>
  </div>
</div>
</section>`,
  },
  'gestion-controle.html': {
    wide: true,
    body: `<p>Le contrôle des chantiers de construction ouverts : l’Agence Urbaine d’Oued Eddahab–Aousserd, en collaboration avec ses partenaires locaux, joue un rôle important dans le contrôle des chantiers de construction ouverts dans son ressort territorial, conformément aux textes juridiques régissant ce domaine :</p>
<ul>
<li>La loi 12-90 relative à l’urbanisme ;</li>
<li>La loi 25-90 relative aux lotissements, groupes d’habitations et morcellements ;</li>
<li>La circulaire n°&nbsp;2259-1257 relative à la mise en œuvre des outils du contrôle et la sanction des infractions dans le domaine d’urbanisme ;</li>
<li>La circulaire conjointe n°&nbsp;2911 pour la mise en œuvre des dispositions juridiques relatives au contrôle d’urbanisme et de la construction.</li>
</ul>
<p>Les visites de contrôle des chantiers de construction ont soulevé <strong>408 infractions</strong> durant l’année <strong>2015</strong>.</p>
<table class="content-table" aria-label="Nombre d’infractions constatées par mois en 2015">
<thead><tr><th>Mois</th><th>Nombre d’infractions</th></tr></thead>
<tbody>
<tr><td>Janvier</td><td>63</td></tr>
<tr><td>Février</td><td>27</td></tr>
<tr><td>Mars</td><td>33</td></tr>
<tr><td>Avril</td><td>18</td></tr>
<tr><td>Mai</td><td>32</td></tr>
<tr><td>Juin</td><td>34</td></tr>
<tr><td>Juillet</td><td>25</td></tr>
<tr><td>Août</td><td>41</td></tr>
<tr><td>Septembre</td><td>43</td></tr>
<tr><td>Octobre</td><td>19</td></tr>
<tr><td>Novembre</td><td>43</td></tr>
<tr><td>Décembre</td><td>30</td></tr>
<tr><th>Total</th><th>408</th></tr>
</tbody>
</table>`,
  },
  'planif-documents.html': {
    wide: true,
    body: PLANIF_DOCUMENTS_BODY,
    extraScripts: ['assets/js/docs-urbanisme-catalog.js'],
  },
  'planif-etudes.html': {
    wide: true,
    body: PLANIF_ETUDES_BODY,
  },
  'service-preinstruction.html': {
    body: `<p>Déposez ici les informations relatives à votre projet pour une <strong>pré-instruction</strong> : elles sont traitées localement dans votre navigateur ; vous pourrez ensuite ouvrir un brouillon d’e-mail vers l’AUDOE ou imprimer le récapitulatif pour le <a href="service-bod.html">bureau d’ordre</a>. Les fichiers volumineux ne peuvent pas être joints via le client mail : déposez-les en physique ou via la plateforme Courrier.gouv depuis <a href="service-bod.html">Bureau d’ordre digital</a>.</p>
<p>Conformément à la loi n°&nbsp;09-08, vous disposez d’un droit d’accès, de rectification et d’opposition en écrivant à <a href="mailto:agencedakhla@gmail.com">agencedakhla@gmail.com</a>.</p>
<form id="form-preinstruction" class="service-form" novalidate>
<div class="field"><label for="pre-nom">Nom et prénom <span class="req">*</span></label><input id="pre-nom" name="nom" type="text" autocomplete="name" required /></div>
<div class="field"><label for="pre-email">E-mail <span class="req">*</span></label><input id="pre-email" name="email" type="email" autocomplete="email" required /></div>
<div class="field"><label for="pre-objet">Objet</label><input id="pre-objet" name="objet" type="text" /></div>
<div class="field"><label for="pre-desc">Description du projet / demande <span class="req">*</span></label><textarea id="pre-desc" name="description" rows="6" required></textarea></div>
<div class="field"><label for="pre-pieces">Pièces prévues (liste libre, ex.&nbsp;: plan, titre foncier…)</label><input id="pre-pieces" name="pieces" type="text" /></div>
<div class="field field-inline"><label for="pre-captcha">Anti-robot : combien font 7&nbsp;+&nbsp;2&nbsp;? <span class="req">*</span></label><input id="pre-captcha" name="captcha" type="text" inputmode="numeric" autocomplete="off" required /></div>
<div class="field field-check"><label><input id="pre-accept" type="checkbox" required /> J’ai lu et j’accepte les conditions relatives au traitement de mes données personnelles.</label></div>
<button type="submit" class="btn-primary">Valider et préparer l’envoi</button>
</form>
<div id="preinstruction-success" class="form-success" hidden>
<h2>Demande prête</h2>
<p>Résumé : <span class="js-pre-summary"></span></p>
<p>Choisissez une option :</p>
<p><a class="btn-primary js-mailto-pre" href="#">Ouvrir votre messagerie avec le texte prérempli</a></p>
<p><a class="btn-secondary" href="service-bod.html">Vers le bureau d’ordre</a> · <a class="btn-secondary" href="gestion-procedures.html">Procédures d’autorisation</a></p>
</div>`,
  },
  'service-enote.html': {
    wide: true,
    body: `<p><strong>E-Note de renseignements</strong> : formulaire en trois étapes, entièrement sur ce site. À l’envoi, un brouillon d’e-mail est proposé ; les pièces justificatives se transmettent au guichet ou par Courrier.gouv (<a href="service-bod.html">Bureau d’ordre digital</a>).</p>
<p>Loi n°&nbsp;09-08 : droits d’accès, rectification et opposition — <a href="mailto:agencedakhla@gmail.com">agencedakhla@gmail.com</a>.</p>
<form id="form-enote" class="service-form service-form-wide" novalidate>
<div class="enote-step" data-step="1">
<p class="step-label">Étape 1 — Demandeur</p>
<div class="field"><label for="enote-civilite">Civilité <span class="req">*</span></label><select id="enote-civilite"><option value="">—</option><option>Monsieur</option><option>Madame</option><option>Mademoiselle</option></select></div>
<div class="field"><label for="enote-nom">Nom et prénom <span class="req">*</span></label><input id="enote-nom" type="text" /></div>
<div class="field"><label for="enote-cin">C.I.N. / statut société <span class="req">*</span></label><input id="enote-cin" type="text" /></div>
<div class="field"><label for="enote-adrdem">Adresse</label><input id="enote-adrdem" type="text" /></div>
<div class="field"><label for="enote-tel">Téléphone</label><input id="enote-tel" type="tel" /></div>
<div class="field"><label for="enote-email">E-mail <span class="req">*</span></label><input id="enote-email" type="email" /></div>
<div class="field"><label for="enote-qualite">En qualité de <span class="req">*</span></label><select id="enote-qualite"><option value="">—</option><option>Propriétaire</option><option>Architecte, géomètre, topographe</option><option>Avocat, notaire</option><option>Mandataire</option></select></div>
<p class="form-nav"><button type="button" class="btn-primary" data-enote-next>Suivant</button></p>
</div>
<div class="enote-step" data-step="2" hidden>
<p class="step-label">Étape 2 — Terrain</p>
<div class="field"><label for="enote-statut">Statut foncier <span class="req">*</span></label><select id="enote-statut"><option value="">—</option><option>T (immatriculé)</option><option>R (en cours)</option><option>TNI (non immatriculé)</option></select></div>
<div class="field"><label for="enote-refcad">Référence foncière</label><input id="enote-refcad" type="text" /></div>
<div class="field"><label for="enote-adrterrain">Adresse du terrain</label><input id="enote-adrterrain" type="text" /></div>
<div class="field"><label for="enote-pref">Préfecture / province <span class="req">*</span></label><select id="enote-pref"><option value="">—</option><option>Oued Eddahab</option><option>Aousserd</option></select></div>
<div class="field"><label for="enote-commune">Commune <span class="req">*</span></label><input id="enote-commune" type="text" placeholder="Ex. Dakhla, Bir Gandouz…" /></div>
<div class="field"><label for="enote-natureprojet">Nature du projet <span class="req">*</span></label><select id="enote-natureprojet"><option value="">—</option><option>Acquisition</option><option>Cession</option><option>Construction</option><option>Lotissement</option><option>Morcellement</option></select></div>
<div class="field"><label for="enote-natureterrain">Nature du terrain <span class="req">*</span></label><select id="enote-natureterrain"><option value="">—</option><option>Terrain nu</option><option>Terrain construit</option></select></div>
<p class="form-nav"><button type="button" class="btn-secondary" data-enote-prev>Précédent</button> <button type="button" class="btn-primary" data-enote-next>Suivant</button></p>
</div>
<div class="enote-step" data-step="3" hidden>
<p class="step-label">Étape 3 — Pièces et validation</p>
<p class="hint">À fournir au guichet ou en pièces jointes mail : pièce d’identité, certificat de propriété (&lt;&nbsp;3&nbsp;mois), liste coordonnées Lambert visée cadastre, plan cadastral visé ; si mandataire : autorisation et pièce du propriétaire.</p>
<div class="field field-inline"><label for="enote-captcha">Anti-robot : combien font 5&nbsp;+&nbsp;3&nbsp;? <span class="req">*</span></label><input id="enote-captcha" type="text" inputmode="numeric" autocomplete="off" /></div>
<div class="field field-check"><label><input id="enote-accept" type="checkbox" /> J’accepte les conditions générales et la mention relative aux données personnelles.</label></div>
<p class="form-nav"><button type="button" class="btn-secondary" data-enote-prev>Précédent</button> <button type="submit" class="btn-primary">Envoyer</button></p>
</div>
</form>
<div id="enote-success" class="form-success" hidden>
<h2>Demande prête</h2>
<p><a class="btn-primary js-mailto-enote" href="#">Ouvrir votre messagerie avec le texte prérempli</a></p>
<p><a class="btn-secondary" href="service-bod.html">Bureau d’ordre</a></p>
</div>`,
  },
};