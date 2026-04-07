<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';

admin_require_login();

$id = (int) ($_GET['id'] ?? 0);
if ($id < 1) {
    http_response_code(404);
    echo 'Introuvable';
    exit;
}

$pdo = admin_pdo();
$stmt = $pdo->prepare('SELECT stored_filename, original_filename, mime_type FROM regulation_pdf_uploads WHERE id = ?');
$stmt->execute([$id]);
$row = $stmt->fetch();
if (!$row || $row['stored_filename'] === '' || $row['stored_filename'] === '_pending') {
    http_response_code(404);
    echo 'Fichier introuvable';
    exit;
}

$dir = audoe_upload_dir();
$path = $dir . '/' . basename($row['stored_filename']);
if (!is_readable($path)) {
    http_response_code(404);
    echo 'Fichier absent du disque';
    exit;
}

$mime = $row['mime_type'] ?: 'application/pdf';
$fname = $row['original_filename'] ?: 'document.pdf';

header('Content-Type: ' . $mime);
header('Content-Disposition: attachment; filename="' . str_replace('"', '', $fname) . '"');
header('Content-Length: ' . (string) filesize($path));
readfile($path);
exit;
