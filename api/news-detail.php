<?php
// api/news-detail.php
// Returns details for a single news article by slug, including image_path

require __DIR__ . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    audoe_json_err(405, 'Méthode non autorisée');
}

$slug = isset($_GET['slug']) ? preg_replace('/[^a-z0-9\-_]/i', '', $_GET['slug']) : '';
$file = isset($_GET['file']) ? $_GET['file'] : '';

if (!$slug && !$file) {
    audoe_json_err(400, 'Paramètres manquants');
}

try {
    $pdo = audoe_pdo($config['db']);
    
    if ($file !== '') {
        $likeFile = '%/' . $file;
        $stmt = $pdo->prepare('SELECT slug, image_path, title_fr, title_ar, excerpt_fr, excerpt_ar FROM news_articles WHERE (slug = ? OR fr_path LIKE ? OR ar_path LIKE ?) AND published = 1 LIMIT 1');
        $stmt->execute([$slug, $likeFile, $likeFile]);
    } else {
        $stmt = $pdo->prepare('SELECT slug, image_path, title_fr, title_ar, excerpt_fr, excerpt_ar FROM news_articles WHERE slug = ? AND published = 1 LIMIT 1');
        $stmt->execute([$slug]);
    }
    
    $row = $stmt->fetch();
    if (!$row) {
        audoe_json_err(404, 'Actualité non trouvée');
    }
    audoe_json_ok($row);
} catch (Throwable $e) {
    audoe_json_server_error($e);
}
