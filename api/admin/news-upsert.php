<?php

declare(strict_types=1);

require dirname(__DIR__) . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    audoe_json_err(405, 'Méthode non autorisée');
}

$tokenConfig = $config['admin_news_token'] ?? '';
if ($tokenConfig === '') {
    audoe_json_err(503, 'Publication actualités désactivée (token non configuré).');
}

$hdr = $_SERVER['HTTP_X_AUDOE_ADMIN_TOKEN'] ?? '';
if ($hdr === '' || !hash_equals((string) $tokenConfig, $hdr)) {
    audoe_json_err(403, 'Non autorisé.');
}

$in = audoe_json_input();
$action = $in['action'] ?? 'upsert';

try {
    $pdo = audoe_pdo($config['db']);

    if ($action === 'delete') {
        $slug = audoe_str($in['slug'] ?? '', 120);
        if ($slug === '') {
            audoe_json_err(400, 'Slug manquant.');
        }
        $del = $pdo->prepare('DELETE FROM news_articles WHERE slug = :s');
        $del->execute(['s' => $slug]);
        audoe_json_ok(['deleted' => $del->rowCount()]);
    }

    if ($action !== 'upsert') {
        audoe_json_err(400, 'Action inconnue.');
    }

    $slug = audoe_str($in['slug'] ?? '', 120);
    if ($slug === '') {
        audoe_json_err(400, 'Slug obligatoire.');
    }

    $fields = [
        'emoji' => audoe_str($in['emoji'] ?? '', 20),
        'date_label_fr' => audoe_str($in['date_label_fr'] ?? '', 120),
        'date_label_ar' => audoe_str($in['date_label_ar'] ?? '', 120),
        'category_fr' => audoe_str($in['category_fr'] ?? '', 100),
        'category_ar' => audoe_str($in['category_ar'] ?? '', 100),
        'title_fr' => audoe_str($in['title_fr'] ?? '', 500),
        'title_ar' => audoe_str($in['title_ar'] ?? '', 500),
        'excerpt_fr' => audoe_str($in['excerpt_fr'] ?? '', 2000),
        'excerpt_ar' => audoe_str($in['excerpt_ar'] ?? '', 2000),
        'fr_path' => audoe_str($in['fr_path'] ?? '', 500),
        'ar_path' => audoe_str($in['ar_path'] ?? '', 500),
        'sort_order' => (int) ($in['sort_order'] ?? 0),
        'published' => isset($in['published']) && !$in['published'] ? 0 : 1,
        'published_at' => audoe_str($in['published_at'] ?? '', 10),
    ];

    foreach (['date_label_fr', 'date_label_ar', 'category_fr', 'category_ar', 'title_fr', 'title_ar', 'excerpt_fr', 'excerpt_ar', 'fr_path', 'ar_path'] as $req) {
        if ($fields[$req] === '') {
            audoe_json_err(400, 'Champ requis manquant : ' . $req);
        }
    }

    $pubDate = $fields['published_at'] !== '' ? $fields['published_at'] : null;

    $sql = 'INSERT INTO news_articles (slug, emoji, date_label_fr, date_label_ar, category_fr, category_ar, title_fr, title_ar, excerpt_fr, excerpt_ar, fr_path, ar_path, sort_order, published, published_at)
            VALUES (:slug, :emoji, :date_label_fr, :date_label_ar, :category_fr, :category_ar, :title_fr, :title_ar, :excerpt_fr, :excerpt_ar, :fr_path, :ar_path, :sort_order, :published, :published_at)
            ON DUPLICATE KEY UPDATE
              emoji = VALUES(emoji), date_label_fr = VALUES(date_label_fr), date_label_ar = VALUES(date_label_ar),
              category_fr = VALUES(category_fr), category_ar = VALUES(category_ar), title_fr = VALUES(title_fr), title_ar = VALUES(title_ar),
              excerpt_fr = VALUES(excerpt_fr), excerpt_ar = VALUES(excerpt_ar), fr_path = VALUES(fr_path), ar_path = VALUES(ar_path),
              sort_order = VALUES(sort_order), published = VALUES(published), published_at = VALUES(published_at)';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'slug' => $slug,
        'emoji' => $fields['emoji'] !== '' ? $fields['emoji'] : null,
        'date_label_fr' => $fields['date_label_fr'],
        'date_label_ar' => $fields['date_label_ar'],
        'category_fr' => $fields['category_fr'],
        'category_ar' => $fields['category_ar'],
        'title_fr' => $fields['title_fr'],
        'title_ar' => $fields['title_ar'],
        'excerpt_fr' => $fields['excerpt_fr'],
        'excerpt_ar' => $fields['excerpt_ar'],
        'fr_path' => $fields['fr_path'],
        'ar_path' => $fields['ar_path'],
        'sort_order' => $fields['sort_order'],
        'published' => $fields['published'],
        'published_at' => $pubDate,
    ]);

    $sel = $pdo->prepare('SELECT id FROM news_articles WHERE slug = :s');
    $sel->execute(['s' => $slug]);
    $id = (int) $sel->fetchColumn();
    audoe_json_ok(['id' => $id, 'slug' => $slug]);
} catch (Throwable $e) {
    audoe_json_server_error($e);
}
