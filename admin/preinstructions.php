<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';
require __DIR__ . '/includes/layout.php';

admin_require_login();

$pdo = admin_pdo();
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

if ($id > 0) {
    $stmt = $pdo->prepare('SELECT * FROM preinstruction_submissions WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    admin_header('Pré-instruction #' . $id, 'pre');
    if (!$row) {
        echo '<p class="text-muted">Introuvable.</p>';
    } else {
        echo '<p><a href="preinstructions.php" class="btn btn-secondary">← Liste</a></p>';
        echo '<div class="admin-table-wrap"><table class="admin-table">';
        foreach ($row as $k => $v) {
            echo '<tr><th>' . admin_h((string) $k) . '</th><td>';
            if ($k === 'description') {
                echo '<pre class="admin-preview">' . admin_h((string) $v) . '</pre>';
            } else {
                echo admin_h((string) $v);
            }
            echo '</td></tr>';
        }
        echo '</table></div>';
    }
    admin_footer();
    exit;
}

$page = max(1, (int) ($_GET['page'] ?? 1));
$per = 25;
$off = ($page - 1) * $per;
$total = (int) $pdo->query('SELECT COUNT(*) FROM preinstruction_submissions')->fetchColumn();
$pages = max(1, (int) ceil($total / $per));

$stmt = $pdo->prepare(
    'SELECT id, nom, email, objet, created_at FROM preinstruction_submissions ORDER BY id DESC LIMIT :lim OFFSET :off'
);
$stmt->bindValue(':lim', $per, PDO::PARAM_INT);
$stmt->bindValue(':off', $off, PDO::PARAM_INT);
$stmt->execute();
$rows = $stmt->fetchAll();

admin_header('Pré-instructions en ligne', 'pre');
?>
<div class="admin-table-wrap">
<table class="admin-table">
<thead><tr><th>ID</th><th>Date</th><th>Nom</th><th>E-mail</th><th>Objet</th><th></th></tr></thead>
<tbody>
<?php foreach ($rows as $r) : ?>
<tr>
<td><?= (int) $r['id'] ?></td>
<td><?= admin_h($r['created_at']) ?></td>
<td><?= admin_h($r['nom']) ?></td>
<td><?= admin_h($r['email']) ?></td>
<td><?= admin_h(admin_shorten((string) $r['objet'], 50)) ?></td>
<td><a href="preinstructions.php?id=<?= (int) $r['id'] ?>">Voir</a></td>
</tr>
<?php endforeach; ?>
<?php if (count($rows) === 0) : ?>
<tr><td colspan="6" class="text-muted">Aucune demande.</td></tr>
<?php endif; ?>
</tbody>
</table>
</div>
<?php if ($pages > 1) : ?>
<p class="pagination">Page <?= $page ?> / <?= $pages ?>
<?php if ($page > 1) : ?><a href="preinstructions.php?page=<?= $page - 1 ?>">Précédent</a><?php endif; ?>
<?php if ($page < $pages) : ?><a href="preinstructions.php?page=<?= $page + 1 ?>">Suivant</a><?php endif; ?>
</p>
<?php endif; ?>
<?php
admin_footer();
