<?php

declare(strict_types=1);

require __DIR__ . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    audoe_json_err(405, 'Méthode non autorisée');
}

$in = audoe_json_input();

$fields = [
    'civilite' => audoe_str($in['civilite'] ?? '', 50),
    'nom' => audoe_str($in['nom'] ?? '', 190),
    'cin_statut' => audoe_str($in['cin_statut'] ?? $in['cin'] ?? '', 190),
    'adresse_demandeur' => audoe_str($in['adresse_demandeur'] ?? $in['adrdem'] ?? '', 500),
    'telephone' => audoe_str($in['telephone'] ?? $in['tel'] ?? '', 80),
    'email' => audoe_str($in['email'] ?? '', 190),
    'qualite' => audoe_str($in['qualite'] ?? '', 190),
    'statut_foncier' => audoe_str($in['statut_foncier'] ?? $in['statut'] ?? '', 80),
    'reference_fonciere' => audoe_str($in['reference_fonciere'] ?? $in['refcad'] ?? '', 190),
    'adresse_terrain' => audoe_str($in['adresse_terrain'] ?? $in['adrterrain'] ?? '', 500),
    'prefecture' => audoe_str($in['prefecture'] ?? $in['pref'] ?? '', 190),
    'commune' => audoe_str($in['commune'] ?? '', 190),
    'nature_projet' => audoe_str($in['nature_projet'] ?? $in['natureprojet'] ?? '', 190),
    'nature_terrain' => audoe_str($in['nature_terrain'] ?? $in['natureterrain'] ?? '', 80),
];

if ($fields['nom'] === '' || $fields['cin_statut'] === '' || $fields['email'] === ''
    || $fields['qualite'] === '' || $fields['statut_foncier'] === ''
    || $fields['prefecture'] === '' || $fields['commune'] === ''
    || $fields['nature_projet'] === '' || $fields['nature_terrain'] === '') {
    audoe_json_err(400, 'Champs obligatoires manquants.');
}
if (!filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    audoe_json_err(400, 'Adresse e-mail invalide.');
}

try {
    $pdo = audoe_pdo($config['db']);
    $stmt = $pdo->prepare(
        'INSERT INTO enote_submissions (
            civilite, nom, cin_statut, adresse_demandeur, telephone, email, qualite,
            statut_foncier, reference_fonciere, adresse_terrain, prefecture, commune,
            nature_projet, nature_terrain, ip_address
        ) VALUES (
            :civilite, :nom, :cin_statut, :adresse_demandeur, :telephone, :email, :qualite,
            :statut_foncier, :reference_fonciere, :adresse_terrain, :prefecture, :commune,
            :nature_projet, :nature_terrain, :ip
        )'
    );
    $stmt->execute([
        'civilite' => $fields['civilite'] !== '' ? $fields['civilite'] : null,
        'nom' => $fields['nom'],
        'cin_statut' => $fields['cin_statut'],
        'adresse_demandeur' => $fields['adresse_demandeur'] !== '' ? $fields['adresse_demandeur'] : null,
        'telephone' => $fields['telephone'] !== '' ? $fields['telephone'] : null,
        'email' => $fields['email'],
        'qualite' => $fields['qualite'],
        'statut_foncier' => $fields['statut_foncier'],
        'reference_fonciere' => $fields['reference_fonciere'] !== '' ? $fields['reference_fonciere'] : null,
        'adresse_terrain' => $fields['adresse_terrain'] !== '' ? $fields['adresse_terrain'] : null,
        'prefecture' => $fields['prefecture'],
        'commune' => $fields['commune'],
        'nature_projet' => $fields['nature_projet'],
        'nature_terrain' => $fields['nature_terrain'],
        'ip' => audoe_client_ip(),
    ]);
    audoe_json_ok(['id' => (int) $pdo->lastInsertId(), 'message' => 'E-Note enregistrée.']);
} catch (Throwable $e) {
    audoe_json_server_error($e);
}
