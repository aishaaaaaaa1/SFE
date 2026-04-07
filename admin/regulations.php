<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';
require __DIR__ . '/includes/layout.php';

admin_require_login();

$pdo = admin_pdo();
$page = max(1, (int) ($_GET['page'] ?? 1));
$per = 25;
$off = ($page - 1) * $per;
$total = (int) $pdo->query('SELECT COUNT(*) FROM regulation_pdf_uploads')->fetchColumn();
$pages = max(1, (int) ceil($total / $per));

$stmt = $pdo->prepare(
    'SELECT id, category, original_filename, file_size, created_at, stored_filename
     FROM regulation_pdf_uploads ORDER BY id DESC LIMIT :lim OFFSET :off'
);
$stmt->bindValue(':lim', $per, PDO::PARAM_INT);
$stmt->bindValue(':off', $off, PDO::PARAM_INT);
$stmt->execute();
$rows = $stmt->fetchAll();

admin_header('PDF réglementation (téléversements)', 'reg');
?>
<div class="admin-table-wrap">
<table class="admin-table">
<thead><tr><th>ID</th><th>Date</th><th>Catégorie</th><th>Fichier</th><th>Taille</th><th></th></tr></thead>
<tbody>
<?php foreach ($rows as $r) : ?>
<tr>
<td><?= (int) $r['id'] ?></td>
<td><?= admin_h($r['created_at']) ?></td>
<td><?= admin_h($r['category']) ?></td>
<td><?= admin_h($r['original_filename']) ?></td>
<td><?= (int) $r['file_size'] ?> o</td>
<td><a href="download-reg.php?id=<?= (int) $r['id'] ?>">Télécharger</a></td>
</tr>
<?php endforeach; ?>
<?php if (count($rows) === 0) : ?>
<tr><td colspan="6" class="text-muted">Aucun fichier.</td></tr>
<?php endif; ?>
</tbody>
</table>
</div>
<?php if ($pages > 1) : ?>
<p class="pagination">Page <?= $page ?> / <?= $pages ?>
<?php if ($page > 1) : ?><a href="regulations.php?page=<?= $page - 1 ?>">Précédent</a><?php endif; ?>
<?php if ($page < $pages) : ?><a href="regulations.php?page=<?= $page + 1 ?>">Suivant</a><?php endif; ?>
</p>
<?php endif; ?>
<?php
admin_footer();
