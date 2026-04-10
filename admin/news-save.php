<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';

admin_require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: news.php', true, 302);
    exit;
}

if (!admin_csrf_verify($_POST['csrf'] ?? null)) {
    $_SESSION['admin_flash'] = 'Session expirée : réessayez.';
    header('Location: news.php', true, 302);
    exit;
}

$action = $_POST['action'] ?? '';
$pdo = admin_pdo();

try {
    if ($action === 'delete') {
        $id = (int) ($_POST['id'] ?? 0);
        if ($id < 1) {
            throw new RuntimeException('ID invalide.');
        }
        $stmt = $pdo->prepare('DELETE FROM news_articles WHERE id = ?');
        $stmt->execute([$id]);
        $_SESSION['admin_flash'] = 'Actualité supprimée.';
        header('Location: news.php', true, 302);
        exit;
    }

    if ($action !== 'save') {
        throw new RuntimeException('Action inconnue.');
    }

    $id = (int) ($_POST['id'] ?? 0);
    $slug = audoe_str($_POST['slug'] ?? '', 120);
    if ($slug === '') {
        throw new RuntimeException('Slug obligatoire.');
    }


    $fields = [
        'emoji' => audoe_str($_POST['emoji'] ?? '', 20),
        'date_label_fr' => audoe_str($_POST['date_label_fr'] ?? '', 120),
        'date_label_ar' => audoe_str($_POST['date_label_ar'] ?? '', 120),
        'category_fr' => audoe_str($_POST['category_fr'] ?? '', 100),
        'category_ar' => audoe_str($_POST['category_ar'] ?? '', 100),
        'title_fr' => audoe_str($_POST['title_fr'] ?? '', 500),
        'title_ar' => audoe_str($_POST['title_ar'] ?? '', 500),
        'excerpt_fr' => audoe_str($_POST['excerpt_fr'] ?? '', 2000),
        'excerpt_ar' => audoe_str($_POST['excerpt_ar'] ?? '', 2000),
        'fr_path' => audoe_str($_POST['fr_path'] ?? '', 500),
        'ar_path' => audoe_str($_POST['ar_path'] ?? '', 500),
        'sort_order' => (int) ($_POST['sort_order'] ?? 0),
        'published' => isset($_POST['published']) ? 1 : 0,
        'image_path' => null,
    ];

    // Gestion de l'upload d'image (PTO)
    if (!empty($_FILES['image']['name']) && is_uploaded_file($_FILES['image']['tmp_name'])) {
        $allowedTypes = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
        $f = $_FILES['image'];
        $mime = mime_content_type($f['tmp_name']);
        if (!isset($allowedTypes[$mime])) {
            throw new RuntimeException('Format d\'image non supporté. Formats acceptés : jpg, png, webp.');
        }
        $ext = $allowedTypes[$mime];
        $uploadDir = dirname(__DIR__) . '/uploads/news';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        $baseName = $slug . '_' . date('YmdHis') . '_' . bin2hex(random_bytes(3)) . '.' . $ext;
        $dest = $uploadDir . '/' . $baseName;
        if (!move_uploaded_file($f['tmp_name'], $dest)) {
            throw new RuntimeException('Erreur lors de l\'enregistrement de l\'image.');
        }
        $fields['image_path'] = 'uploads/news/' . $baseName;
    } else if ($id > 0) {
        // En modification, garder l'image existante si aucune nouvelle image n'est uploadée
        $stmtImg = $pdo->prepare('SELECT image_path FROM news_articles WHERE id = ?');
        $stmtImg->execute([$id]);
        $fields['image_path'] = $stmtImg->fetchColumn() ?: null;
    }

    $pub = audoe_str($_POST['published_at'] ?? '', 10);
    $publishedAt = $pub !== '' ? $pub : null;

    foreach (['date_label_fr', 'date_label_ar', 'category_fr', 'category_ar', 'title_fr', 'title_ar', 'excerpt_fr', 'excerpt_ar', 'fr_path', 'ar_path'] as $req) {
        if ($fields[$req] === '') {
            throw new RuntimeException('Champ requis : ' . $req);
        }
    }

    if ($id > 0) {
        $chk = $pdo->prepare('SELECT id FROM news_articles WHERE slug = ? AND id != ?');
        $chk->execute([$slug, $id]);
        if ($chk->fetch()) {
            throw new RuntimeException('Ce slug est déjà utilisé par une autre actualité.');
        }
        $sql = 'UPDATE news_articles SET slug=:slug, emoji=:emoji, date_label_fr=:date_label_fr, date_label_ar=:date_label_ar,
            category_fr=:category_fr, category_ar=:category_ar, title_fr=:title_fr, title_ar=:title_ar,
            excerpt_fr=:excerpt_fr, excerpt_ar=:excerpt_ar, fr_path=:fr_path, ar_path=:ar_path, image_path=:image_path,
            sort_order=:sort_order, published=:published, published_at=:published_at WHERE id=:id';
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
            'image_path' => $fields['image_path'],
            'sort_order' => $fields['sort_order'],
            'published' => $fields['published'],
            'published_at' => $publishedAt,
            'id' => $id,
        ]);
        $_SESSION['admin_flash'] = 'Actualité mise à jour.';
    } else {
        $chk = $pdo->prepare('SELECT id FROM news_articles WHERE slug = ?');
        $chk->execute([$slug]);
        if ($chk->fetch()) {
            throw new RuntimeException('Ce slug existe déjà.');
        }
        $stmt = $pdo->prepare(
            'INSERT INTO news_articles (slug, emoji, date_label_fr, date_label_ar, category_fr, category_ar, title_fr, title_ar, excerpt_fr, excerpt_ar, fr_path, ar_path, image_path, sort_order, published, published_at)
             VALUES (:slug, :emoji, :date_label_fr, :date_label_ar, :category_fr, :category_ar, :title_fr, :title_ar, :excerpt_fr, :excerpt_ar, :fr_path, :ar_path, :image_path, :sort_order, :published, :published_at)'
        );
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
            'image_path' => $fields['image_path'],
            'sort_order' => $fields['sort_order'],
            'published' => $fields['published'],
            'published_at' => $publishedAt,
        ]);
        $_SESSION['admin_flash'] = 'Actualité créée.';
    }
} catch (Throwable $e) {
    $_SESSION['admin_flash'] = 'Erreur : ' . $e->getMessage();
}

header('Location: news.php', true, 302);
exit;
