<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';
require __DIR__ . '/includes/layout.php';

admin_require_login();

$pdo = admin_pdo();
$counts = [
    'contacts' => (int) $pdo->query('SELECT COUNT(*) FROM contact_submissions')->fetchColumn(),
    'pre' => (int) $pdo->query('SELECT COUNT(*) FROM preinstruction_submissions')->fetchColumn(),
    'enote' => (int) $pdo->query('SELECT COUNT(*) FROM enote_submissions')->fetchColumn(),
    'reg' => (int) $pdo->query('SELECT COUNT(*) FROM regulation_pdf_uploads')->fetchColumn(),
    'news' => (int) $pdo->query('SELECT COUNT(*) FROM news_articles')->fetchColumn(),
];

admin_header('Tableau de bord', 'dash');

if (!empty($_SESSION['admin_flash'])) {
    echo '<div class="admin-msg ok">' . admin_h($_SESSION['admin_flash']) . '</div>';
    unset($_SESSION['admin_flash']);
}
?>
<div class="admin-stats">
    <a href="contacts.php" class="admin-stat"><div class="num"><?= $counts['contacts'] ?></div><div class="lbl">Messages contact</div></a>
    <a href="preinstructions.php" class="admin-stat"><div class="num"><?= $counts['pre'] ?></div><div class="lbl">Pré-instructions</div></a>
    <a href="enotes.php" class="admin-stat"><div class="num"><?= $counts['enote'] ?></div><div class="lbl">E-Notes</div></a>
    <a href="regulations.php" class="admin-stat"><div class="num"><?= $counts['reg'] ?></div><div class="lbl">PDF reçus</div></a>
    <a href="news.php" class="admin-stat"><div class="num"><?= $counts['news'] ?></div><div class="lbl">Actualités</div></a>
</div>
<p class="admin-dash-hint">Vue d’ensemble des activités : cliquez sur une carte pour ouvrir la liste correspondante. Les formulaires du site public enregistrent ici les demandes.</p>
<?php
admin_footer();
