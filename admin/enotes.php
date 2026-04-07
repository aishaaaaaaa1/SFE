<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';
require __DIR__ . '/includes/layout.php';

admin_require_login();

$pdo = admin_pdo();
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

if ($id > 0) {
    $stmt = $pdo->prepare('SELECT * FROM enote_submissions WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    admin_header('E-Note #' . $id, 'enote');
    if (!$row) {
        echo '<p class="text-muted">Introuvable.</p>';
    } else {
        echo '<p><a href="enotes.php" class="btn btn-secondary">← Liste</a></p>';
        echo '<div class="admin-table-wrap"><table class="admin-table">';
        foreach ($row as $k => $v) {
            echo '<tr><th>' . admin_h((string) $k) . '</th><td>' . admin_h((string) $v) . '</td></tr>';
        }
        echo '</table></div>';
    }
    admin_footer();
    exit;
}

$page = max(1, (int) ($_GET['page'] ?? 1));
$per = 25;
$off = ($page - 1) * $per;
$total = (int) $pdo->query('SELECT COUNT(*) FROM enote_submissions')->fetchColumn();
$pages = max(1, (int) ceil($total / $per));

$stmt = $pdo->prepare(
    'SELECT id, nom, email, commune, nature_projet, created_at FROM enote_submissions ORDER BY id DESC LIMIT :lim OFFSET :off'
);
$stmt->bindValue(':lim', $per, PDO::PARAM_INT);
$stmt->bindValue(':off', $off, PDO::PARAM_INT);
$stmt->execute();
$rows = $stmt->fetchAll();

admin_header('E-Notes de renseignements', 'enote');
?>
<div class="admin-table-wrap">
<table class="admin-table">
<thead><tr><th>ID</th><th>Date</th><th>Nom</th><th>E-mail</th><th>Commune</th><th>Projet</th><th></th></tr></thead>
<tbody>
<?php foreach ($rows as $r) : ?>
<tr>
<td><?= (int) $r['id'] ?></td>
<td><?= admin_h($r['created_at']) ?></td>
<td><?= admin_h($r['nom']) ?></td>
<td><?= admin_h($r['email']) ?></td>
<td><?= admin_h($r['commune']) ?></td>
<td><?= admin_h(admin_shorten((string) $r['nature_projet'], 40)) ?></td>
<td><a href="enotes.php?id=<?= (int) $r['id'] ?>">Voir</a></td>
</tr>
<?php endforeach; ?>
<?php if (count($rows) === 0) : ?>
<tr><td colspan="7" class="text-muted">Aucune E-Note.</td></tr>
<?php endif; ?>
</tbody>
</table>
</div>
<?php if ($pages > 1) : ?>
<p class="pagination">Page <?= $page ?> / <?= $pages ?>
<?php if ($page > 1) : ?><a href="enotes.php?page=<?= $page - 1 ?>">Précédent</a><?php endif; ?>
<?php if ($page < $pages) : ?><a href="enotes.php?page=<?= $page + 1 ?>">Suivant</a><?php endif; ?>
</p>
<?php endif; ?>
<?php
admin_footer();
