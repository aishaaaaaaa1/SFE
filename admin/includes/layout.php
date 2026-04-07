<?php

declare(strict_types=1);

function admin_header(string $title, string $active = ''): void
{
    $nav = [
        'dash' => ['dashboard.php', 'Tableau de bord'],
        'contacts' => ['contacts.php', 'Messages'],
        'pre' => ['preinstructions.php', 'Pré-instruction'],
        'enote' => ['enotes.php', 'E-Note'],
        'reg' => ['regulations.php', 'PDF réglementation'],
        'news' => ['news.php', 'Actualités'],
    ];
    ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title><?= admin_h($title) ?> · Admin AUDOE</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="assets/admin.css"/>
</head>
<body class="admin-body">
<div class="admin-shell">
    <aside class="admin-sidebar" aria-label="Navigation">
        <a href="dashboard.php" class="admin-brand">
            <span class="admin-brand-mark">AUDOE</span>
            <span class="admin-brand-sub">Administration</span>
        </a>
        <nav class="admin-nav">
            <?php foreach ($nav as $key => $item) : ?>
                <a href="<?= admin_h($item[0]) ?>" class="admin-nav-item <?= $active === $key ? 'is-active' : '' ?>">
                    <?= admin_h($item[1]) ?>
                </a>
            <?php endforeach; ?>
        </nav>
        <a href="logout.php" class="admin-sidebar-logout">Déconnexion</a>
    </aside>
    <div class="admin-workspace">
        <header class="admin-page-head">
            <h1 class="admin-page-title"><?= admin_h($title) ?></h1>
        </header>
        <div class="admin-scroll">
    <?php
}

function admin_footer(): void
{
    ?>
        </div>
    </div>
</div>
</body>
</html>
    <?php
}
