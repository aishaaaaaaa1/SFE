<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';

if (!empty($_SESSION['audoe_admin'])) {
    header('Location: dashboard.php', true, 302);
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = audoe_str($_POST['user'] ?? '', 120);
    $pass = (string) ($_POST['pass'] ?? '');
    if (admin_try_login($user, $pass)) {
        $_SESSION['audoe_admin'] = true;
        session_regenerate_id(true);
        header('Location: dashboard.php', true, 302);
        exit;
    }
    $hash = (string) ($config['admin_password_hash'] ?? '');
    if ($hash === '') {
        $error = 'Admin désactivé : renseignez admin_password_hash dans api/config.local.php';
    } else {
        $error = 'Identifiant ou mot de passe incorrect.';
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Connexion · Admin AUDOE</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="assets/admin.css"/>
</head>
<body class="admin-body admin-login-page">
<div class="admin-login-box">
    <h1>Administration AUDOE</h1>
    <p class="hint">Accès réservé. Compte par défaut (local) : <strong>admin</strong> / <strong>admin123</strong> — changez le mot de passe dans <code>api/config.local.php</code>.</p>
    <?php if ($error !== '') : ?>
        <div class="admin-msg err"><?= admin_h($error) ?></div>
    <?php endif; ?>
    <form method="post" class="admin-form" autocomplete="off">
        <div class="field">
            <label for="user">Identifiant</label>
            <input type="text" id="user" name="user" required autofocus/>
        </div>
        <div class="field">
            <label for="pass">Mot de passe</label>
            <input type="password" id="pass" name="pass" required/>
        </div>
        <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
</div>
</body>
</html>
