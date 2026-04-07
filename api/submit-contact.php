<?php

declare(strict_types=1);

require __DIR__ . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    audoe_json_err(405, 'Méthode non autorisée');
}

$in = audoe_json_input();
$sourceRaw = $in['source'] ?? 'contact';
$source = $sourceRaw === 'creation' ? 'creation_page' : 'contact_page';

$nom = audoe_str($in['nom'] ?? '', 190);
$email = audoe_str($in['email'] ?? '', 190);
$tel = audoe_str($in['telephone'] ?? $in['tel'] ?? '', 80);
$sujet = audoe_str($in['sujet'] ?? '', 500);
$message = audoe_str($in['message'] ?? $in['msg'] ?? '', 20000);

if ($nom === '' || $email === '' || $sujet === '' || $message === '') {
    audoe_json_err(400, 'Champs obligatoires manquants.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    audoe_json_err(400, 'Adresse e-mail invalide.');
}

try {
    $pdo = audoe_pdo($config['db']);
    $stmt = $pdo->prepare(
        'INSERT INTO contact_submissions (source, nom, email, telephone, sujet, message, ip_address)
         VALUES (:source, :nom, :email, :telephone, :sujet, :message, :ip)'
    );
    $stmt->execute([
        'source' => $source,
        'nom' => $nom,
        'email' => $email,
        'telephone' => $tel !== '' ? $tel : null,
        'sujet' => $sujet,
        'message' => $message,
        'ip' => audoe_client_ip(),
    ]);
    $id = (int) $pdo->lastInsertId();
    audoe_json_ok(['id' => $id, 'message' => 'Message enregistré.']);
} catch (Throwable $e) {
    audoe_json_server_error($e);
}
