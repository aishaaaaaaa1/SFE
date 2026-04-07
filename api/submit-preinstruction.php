<?php

declare(strict_types=1);

require __DIR__ . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    audoe_json_err(405, 'Méthode non autorisée');
}

$in = audoe_json_input();
$nom = audoe_str($in['nom'] ?? '', 190);
$email = audoe_str($in['email'] ?? '', 190);
$objet = audoe_str($in['objet'] ?? '', 500);
$description = audoe_str($in['description'] ?? $in['desc'] ?? '', 50000);
$pieces = audoe_str($in['pieces_prevues'] ?? $in['pieces'] ?? '', 2000);

if ($nom === '' || $email === '' || $description === '') {
    audoe_json_err(400, 'Champs obligatoires manquants.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    audoe_json_err(400, 'Adresse e-mail invalide.');
}

try {
    $pdo = audoe_pdo($config['db']);
    $stmt = $pdo->prepare(
        'INSERT INTO preinstruction_submissions (nom, email, objet, description, pieces_prevues, ip_address)
         VALUES (:nom, :email, :objet, :description, :pieces, :ip)'
    );
    $stmt->execute([
        'nom' => $nom,
        'email' => $email,
        'objet' => $objet !== '' ? $objet : null,
        'description' => $description,
        'pieces' => $pieces !== '' ? $pieces : null,
        'ip' => audoe_client_ip(),
    ]);
    audoe_json_ok(['id' => (int) $pdo->lastInsertId(), 'message' => 'Demande enregistrée.']);
} catch (Throwable $e) {
    audoe_json_server_error($e);
}
