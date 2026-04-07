<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';
require __DIR__ . '/includes/layout.php';

admin_require_login();

$pdo = admin_pdo();

if (!empty($_SESSION['admin_flash'])) {
    $flash = $_SESSION['admin_flash'];
    unset($_SESSION['admin_flash']);
} else {
    $flash = '';
}

$stmt = $pdo->query('SELECT id, slug, title_fr, published, sort_order, published_at FROM news_articles ORDER BY sort_order ASC, id DESC');
$rows = $stmt->fetchAll();

admin_header('Actualités (site public)', 'news');

if ($flash !== '') {
    $flashClass = (strpos($flash, 'Erreur') === 0) ? 'err' : 'ok';
    echo '<div class="admin-msg ' . $flashClass . '">' . admin_h($flash) . '</div>';
}
?>
<div class="admin-toolbar">
    <a href="news-edit.php" class="btn btn-primary">Nouvelle actualité</a>
</div>
<div class="admin-table-wrap">
<table class="admin-table">
<thead><tr><th>ID</th><th>Ordre</th><th>Slug</th><th>Titre (FR)</th><th>Publié</th><th>Date pub.</th><th></th></tr></thead>
<tbody>
<?php foreach ($rows as $r) : ?>
<tr>
<td><?= (int) $r['id'] ?></td>
<td><?= (int) $r['sort_order'] ?></td>
<td><code><?= admin_h($r['slug']) ?></code></td>
<td><?= admin_h(admin_shorten((string) $r['title_fr'], 70)) ?></td>
<td><?= ((int) $r['published']) ? 'oui' : 'non' ?></td>
<td><?= admin_h((string) $r['published_at']) ?></td>
<td>
<a href="news-edit.php?id=<?= (int) $r['id'] ?>">Modifier</a>
<form method="post" action="news-save.php" style="display:inline;margin-left:8px" onsubmit="return confirm('Supprimer cette actualité ?');">
<input type="hidden" name="csrf" value="<?= admin_h(admin_csrf_token()) ?>"/>
<input type="hidden" name="action" value="delete"/>
<input type="hidden" name="id" value="<?= (int) $r['id'] ?>"/>
<button type="submit" class="btn btn-danger" style="padding:4px 10px;font-size:12px">Supprimer</button>
</form>
</td>
</tr>
<?php endforeach; ?>
<?php if (count($rows) === 0) : ?>
<tr><td colspan="7" class="text-muted">Aucune actualité — créez-en une ou importez la base SQL.</td></tr>
<?php endif; ?>
</tbody>
</table>
</div>
<?php
admin_footer();
