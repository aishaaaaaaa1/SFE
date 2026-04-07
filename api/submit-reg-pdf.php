<?php

declare(strict_types=1);

require __DIR__ . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    audoe_json_err(405, 'Méthode non autorisée');
}

$allowedCategories = ['Dahirs', 'Décrets', 'Circulaires', 'Arrêtés'];
$category = audoe_str($_POST['category'] ?? '', 80);
if (!in_array($category, $allowedCategories, true)) {
    audoe_json_err(400, 'Catégorie non reconnue.');
}

if (empty($_FILES['pdf']) || !is_uploaded_file($_FILES['pdf']['tmp_name'])) {
    audoe_json_err(400, 'Fichier PDF manquant.');
}

$f = $_FILES['pdf'];
if ($f['error'] !== UPLOAD_ERR_OK) {
    audoe_json_err(400, 'Échec du téléversement.');
}

$maxBytes = (int) (($config['max_upload_mb'] ?? 10) * 1024 * 1024);
if ($f['size'] > $maxBytes) {
    audoe_json_err(400, 'Fichier trop volumineux.');
}

$origName = audoe_str(basename($f['name']), 255);
$lower = strtolower($origName);
if (substr($lower, -4) !== '.pdf') {
    audoe_json_err(400, 'Seuls les fichiers PDF sont acceptés.');
}

$fh = @fopen($f['tmp_name'], 'rb');
if ($fh === false) {
    audoe_json_err(400, 'Lecture du fichier impossible.');
}
$head = fread($fh, 5);
fclose($fh);
if ($head !== '%PDF-') {
    audoe_json_err(400, 'Le fichier n’est pas un PDF valide.');
}

$message = audoe_str($_POST['message'] ?? '', 5000);

try {
    $pdo = audoe_pdo($config['db']);
    $pdo->beginTransaction();

    $stmt = $pdo->prepare(
        'INSERT INTO regulation_pdf_uploads (category, message, stored_filename, original_filename, file_size, mime_type, ip_address)
         VALUES (:category, :message, :stored_filename, :original_filename, :file_size, :mime, :ip)'
    );
    $stmt->execute([
        'category' => $category,
        'message' => $message !== '' ? $message : null,
        'stored_filename' => '_pending',
        'original_filename' => $origName,
        'file_size' => (int) $f['size'],
        'mime' => audoe_str($f['type'] ?: 'application/pdf', 120),
        'ip' => audoe_client_ip(),
    ]);
    $id = (int) $pdo->lastInsertId();

    $safeStore = $id . '_' . preg_replace('/[^a-zA-Z0-9._-]+/', '_', $origName);
    if ($safeStore === (string) $id . '_') {
        $safeStore = $id . '_document.pdf';
    }
    $dest = audoe_upload_dir() . '/' . $safeStore;
    if (!move_uploaded_file($f['tmp_name'], $dest)) {
        $pdo->rollBack();
        audoe_json_err(500, 'Enregistrement du fichier impossible.');
    }

    $upd = $pdo->prepare('UPDATE regulation_pdf_uploads SET stored_filename = :fn WHERE id = :id');
    $upd->execute(['fn' => $safeStore, 'id' => $id]);
    $pdo->commit();

    audoe_json_ok(['id' => $id, 'message' => 'PDF enregistré sur le serveur.']);
} catch (Throwable $e) {
    if (isset($pdo) && $pdo->inTransaction()) {
        $pdo->rollBack();
    }
    audoe_json_server_error($e);
}
