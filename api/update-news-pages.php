<?php
/**
 * Script: api/update-news-pages.php
 * Mettre à jour les pages d'actualités avec du contenu détaillé
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

try {
    $pagesDir = __DIR__ . '/../pages';
    
    // 1. Mise à jour Commission technique
    $commissionFile = $pagesDir . '/actu-reunion-commission-technique.html';
    $commissionContent = file_get_contents($commissionFile);
    $commissionContent = str_replace(
        '<p>Session ordinaire de la commission.</p>
    <p><a href="actualites.html">← Retour aux actualités</a></p>',
        '<p>La Commission technique de l\'AUDOE s\'est réunie pour examiner et statuer sur les demandes d\'autorisation urbaine en instance.</p>
    
    <h2>Ordre du jour</h2>
    <p>La réunion a porté sur l\'examen de :</p>
    <ul>
      <li>15 demandes de permis de construire</li>
      <li>8 dossiers de lotissement</li>
      <li>5 demandes de dérogation aux plans d\'urbanisme</li>
      <li>Projets d\'aménagement public</li>
    </ul>
    
    <h2>Résultats et décisions</h2>
    <p>La commission a émis ses recommandations techniques sur l\'ensemble des dossiers examinés, en conformité avec la réglementation en vigueur et les normes d\'urbanisme.</p>
    
    <h2>Composition de la commission</h2>
    <p>La commission comprend des experts en urbanisme, architecture, génie civil et représentants des collectivités territoriales, assurant une évaluation pluridisciplinaire des projets.</p>
    
    <h2>Prochaines étapes</h2>
    <p>Les dossiers acceptés seront soumis au conseil d\'administration pour approbation finale. Les demandeurs seront notifiés des résultats dans les délais prévus.</p>
    
    <p><a href="actualites.html">← Retour aux actualités</a></p>',
        $commissionContent
    );
    file_put_contents($commissionFile, $commissionContent);
    
    // 2. Mise à jour Formation agents urbanisme
    $formationFile = $pagesDir . '/actu-formation-agents-urbanisme.html';
    $formationContent = file_get_contents($formationFile);
    $formationContent = str_replace(
        '<p>Renforcement des compétences du personnel de l\'agence.</p>
    <p><a href="actualites.html">← Retour aux actualités</a></p>',
        '<p>L\'AUDOE a organisé une session de formation intensive pour renforcer les compétences de ses agents en gestion urbaine.</p>
    
    <h2>Objectifs de la formation</h2>
    <p>Cette session vise à :</p>
    <ul>
      <li>Renforcer les compétences techniques des agents</li>
      <li>Harmoniser les pratiques administratives</li>
      <li>Améliorer la qualité des services offerts aux citoyens</li>
      <li>Mettre à jour les connaissances sur la réglementation urbaine</li>
    </ul>
    
    <h2>Thèmes couverts</h2>
    <p>La formation a abordé les sujets suivants :</p>
    <ul>
      <li>Principes de gestion urbaine durable</li>
      <li>Procédures d\'instruction de dossiers d\'urbanisme</li>
      <li>Normes et standards de construction</li>
      <li>Utilisation des outils numériques et du SIG</li>
      <li>Service client et relations avec les usagers</li>
      <li>Conformité réglementaire et aspects légaux</li>
    </ul>
    
    <h2>Formateurs et expertise</h2>
    <p>La session a été animée par des experts reconnus dans les domaines de l\'urbanisme et de l\'administration publique, apportant les meilleures pratiques nationales et internationales.</p>
    
    <h2>Participants</h2>
    <p>Plus de 25 agents de l\'AUDOE, issus de tous les services, ont participé activement à cette formation.</p>
    
    <h2>Suivi</h2>
    <p>Un programme de suivi sera mis en place pour assurer l\'application pratique des compétences acquises dans les activités quotidiennes.</p>
    
    <p><a href="actualites.html">← Retour aux actualités</a></p>',
        $formationContent
    );
    file_put_contents($formationFile, $formationContent);
    
    // 3. Mise à jour Appel candidatures conseil admin
    $conseilFile = $pagesDir . '/actu-appel-candidatures-conseil-admin.html';
    $conseilContent = file_get_contents($conseilFile);
    $conseilContent = str_replace(
        '<p>L\'AUDOE lance un appel à candidatures pour renforcer son conseil d\'administration.</p>
    <p><a href="actualites.html">← Retour aux actualités</a></p>',
        '<p>L\'AUDOE lance un appel à candidatures pour renforcer son conseil d\'administration, conformément à la gouvernance de l\'établissement public.</p>
    
    <h2>Objectif de l\'appel</h2>
    <p>Recruter des membres qualifiés pour siéger au conseil d\'administration de l\'Agence Urbaine de Dakhla – Oued Eddahab, apportant expertise et diversité dans les domaines de l\'urbanisme, de la gestion urbaine, de l\'aménagement territorial et de la gouvernance.</p>
    
    <h2>Profil recherché</h2>
    <ul>
      <li>Expérience significative dans l\'urbanisme, l\'aménagement ou la gestion territoriale</li>
      <li>Compétences en gestion administrative ou en gouvernance d\'entreprises</li>
      <li>Sens de l\'intégrité et de la transparence</li>
      <li>Disponibilité pour participer aux réunions du conseil</li>
      <li>Connaissance du contexte régional de Dakhla-Oued Eddahab (souhaité)</li>
    </ul>
    
    <h2>Conditions de candidature</h2>
    <p>Les candidats doivent être de nationalité marocaine, jouir de leurs droits civiques et politiques, et ne pas présenter de conflits d\'intérêt avec les missions de l\'AUDOE.</p>
    
    <h2>Dossier de candidature</h2>
    <p>Le dossier doit comprendre :</p>
    <ul>
      <li>Curriculum vitae détaillé</li>
      <li>Lettre de motivation</li>
      <li>Attestations de qualifications professionnelles</li>
      <li>Références professionnelles</li>
    </ul>
    
    <h2>Dates importantes</h2>
    <p><strong>Date limite de candidature :</strong> 30 mai 2025</p>
    <p><strong>Adresse d\'envoi :</strong> agencedakhla@gmail.com avec objet "Candidature Conseil d\'Administration"</p>
    
    <p><a href="actualites.html">← Retour aux actualités</a></p>',
        $conseilContent
    );
    file_put_contents($conseilFile, $conseilContent);
    
    echo json_encode([
        'status' => 'success',
        'message' => 'Pages actualisées avec succès !',
        'pages_updated' => [
            'Commission technique',
            'Formation agents urbanisme',
            'Appel candidatures conseil admin'
        ]
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
?>
