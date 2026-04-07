<?php

declare(strict_types=1);

require __DIR__ . '/includes/bootstrap.php';
require __DIR__ . '/includes/news_href.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    audoe_json_err(405, 'Méthode non autorisée');
}

$locale = isset($_GET['locale']) && $_GET['locale'] === 'ar' ? 'ar' : 'fr';
$from = preg_replace('/[^a-z_]/', '', $_GET['from'] ?? 'pages_fr');
$allowedFrom = ['root_fr', 'root_ar', 'pages_fr', 'pages_ar'];
if (!in_array($from, $allowedFrom, true)) {
    $from = 'pages_fr';
}

$limit = isset($_GET['limit']) ? (int) $_GET['limit'] : 50;
if ($limit < 1) {
    $limit = 1;
}
if ($limit > 50) {
    $limit = 50;
}

try {
    $pdo = audoe_pdo($config['db']);
    $stmt = $pdo->prepare(
        'SELECT slug, emoji, date_label_fr, date_label_ar, category_fr, category_ar,
                title_fr, title_ar, excerpt_fr, excerpt_ar, fr_path, ar_path
         FROM news_articles
         WHERE published = 1
         ORDER BY sort_order ASC, published_at DESC, id DESC
         LIMIT :lim'
    );
    $stmt->bindValue(':lim', $limit, PDO::PARAM_INT);
    $stmt->execute();
    $rows = $stmt->fetchAll();

    $items = [];
    foreach ($rows as $row) {
        $isAr = $locale === 'ar';
        $href = audoe_news_href($row['fr_path'], $row['ar_path'], $from);
        $items[] = [
            'slug' => $row['slug'],
            'href' => $href,
            'emoji' => $row['emoji'],
            'date_label' => $isAr ? $row['date_label_ar'] : $row['date_label_fr'],
            'category' => $isAr ? $row['category_ar'] : $row['category_fr'],
            'title' => $isAr ? $row['title_ar'] : $row['title_fr'],
            'excerpt' => $isAr ? $row['excerpt_ar'] : $row['excerpt_fr'],
        ];
    }

    audoe_json_ok(['items' => $items, 'locale' => $locale, 'from' => $from]);
} catch (Throwable $e) {
    audoe_json_server_error($e);
}
