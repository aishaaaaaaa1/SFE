<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';
require __DIR__ . '/includes/layout.php';

admin_require_login();

$pdo = admin_pdo();
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
$row = null;
$titlePage = 'Nouvelle actualité';

if ($id > 0) {
    $stmt = $pdo->prepare('SELECT * FROM news_articles WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) {
        header('Location: news.php', true, 302);
        exit;
    }
    $titlePage = 'Modifier · ' . admin_shorten((string) $row['title_fr'], 40);
}

$csrf = admin_csrf_token();
$v = static function (string $key, $default = '') use ($row) {
    if ($row === null) {
        return $default;
    }

    return $row[$key] ?? $default;
};

admin_header($titlePage, 'news');
?>
<form method="post" action="news-save.php" class="admin-form" enctype="multipart/form-data">
<div class="field">
<label for="image">Image principale (PTO, optionnelle, jpg/png/webp)</label>
<input type="file" id="image" name="image" accept="image/*"/>
<?php if (!empty($v('image_path'))): ?>
    <div style="margin-top:8px">
        <img src="../<?= admin_h($v('image_path')) ?>" alt="Image actuelle" style="max-width:180px;max-height:120px;border:1px solid #ccc"/>
        <br/><small>Image actuelle</small>
    </div>
<?php endif; ?>
</div>
<input type="hidden" name="csrf" value="<?= admin_h($csrf) ?>"/>
<input type="hidden" name="action" value="save"/>
<input type="hidden" name="id" value="<?= $id ?>"/>

<div class="field">
<label for="slug">Slug (identifiant unique, sans espaces)</label>
<input type="text" id="slug" name="slug" required value="<?= admin_h((string) $v('slug')) ?>" placeholder="ex. mois-urbain-2025"/>
</div>

<div class="row2">
<div class="field">
<label for="date_label_fr">Libellé date (FR)</label>
<input type="text" id="date_label_fr" name="date_label_fr" required value="<?= admin_h((string) $v('date_label_fr')) ?>"/>
</div>
<div class="field">
<label for="date_label_ar">Libellé date (AR)</label>
<input type="text" id="date_label_ar" name="date_label_ar" required value="<?= admin_h((string) $v('date_label_ar')) ?>"/>
</div>
</div>

<div class="row2">
<div class="field">
<label for="category_fr">Catégorie (FR)</label>
<input type="text" id="category_fr" name="category_fr" required value="<?= admin_h((string) $v('category_fr')) ?>"/>
</div>
<div class="field">
<label for="category_ar">Catégorie (AR)</label>
<input type="text" id="category_ar" name="category_ar" required value="<?= admin_h((string) $v('category_ar')) ?>"/>
</div>
</div>

<div class="field">
<label for="emoji">Emoji (optionnel)</label>
<input type="text" id="emoji" name="emoji" value="<?= admin_h((string) $v('emoji')) ?>" maxlength="20"/>
</div>

<div class="field">
<label for="title_fr">Titre (FR)</label>
<textarea id="title_fr" name="title_fr" rows="2" required><?= admin_h((string) $v('title_fr')) ?></textarea>
</div>
<div class="field">
<label for="title_ar">Titre (AR)</label>
<textarea id="title_ar" name="title_ar" rows="2" required><?= admin_h((string) $v('title_ar')) ?></textarea>
</div>

<div class="field">
<label for="excerpt_fr">Chapô (FR)</label>
<textarea id="excerpt_fr" name="excerpt_fr" rows="3" required><?= admin_h((string) $v('excerpt_fr')) ?></textarea>
</div>
<div class="field">
<label for="excerpt_ar">Chapô (AR)</label>
<textarea id="excerpt_ar" name="excerpt_ar" rows="3" required><?= admin_h((string) $v('excerpt_ar')) ?></textarea>
</div>

<div class="row2">
<div class="field">
<label for="fr_path">Lien page détail FR (depuis racine site)</label>
<input type="text" id="fr_path" name="fr_path" required value="<?= admin_h((string) $v('fr_path', 'pages/actu-exemple.html')) ?>" placeholder="pages/actu-….html"/>
</div>
<div class="field">
<label for="ar_path">Lien page détail AR</label>
<input type="text" id="ar_path" name="ar_path" required value="<?= admin_h((string) $v('ar_path', 'pages/ar/actu-exemple.html')) ?>"/>
</div>
</div>

<div class="row2">
<div class="field">
<label for="sort_order">Ordre d’affichage (nombre bas = en premier)</label>
<input type="number" id="sort_order" name="sort_order" value="<?= admin_h((string) $v('sort_order', '0')) ?>"/>
</div>
<div class="field">
<label for="published_at">Date de publication (YYYY-MM-DD)</label>
<input type="date" id="published_at" name="published_at" value="<?= admin_h((string) ($row['published_at'] ?? '')) ?>"/>
</div>
</div>

<div class="field">
<label><input type="checkbox" name="published" value="1" <?= ((int) $v('published', 1)) ? 'checked' : '' ?>/> Publiée sur le site</label>
</div>

<p>
<button type="submit" class="btn btn-primary">Enregistrer</button>
<a href="news.php" class="btn btn-secondary">Annuler</a>
</p>
</form>
<?php
admin_footer();
