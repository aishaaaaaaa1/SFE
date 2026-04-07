<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap_admin.php';

if (!empty($_SESSION['audoe_admin'])) {
    header('Location: dashboard.php', true, 302);
} else {
    header('Location: login.php', true, 302);
}
exit;
