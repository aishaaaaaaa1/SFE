<?php

declare(strict_types=1);

if (!defined('AUDOE_ADMIN_HTML')) {
    define('AUDOE_ADMIN_HTML', true);
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once dirname(__DIR__) . '/api/includes/bootstrap.php';

function admin_h(?string $s): string
{
    return htmlspecialchars((string) $s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function admin_pdo(): PDO
{
    global $config;

    return audoe_pdo($config['db']);
}

function admin_require_login(): void
{
    if (!empty($_SESSION['audoe_admin'])) {
        return;
    }
    header('Location: login.php', true, 302);
    exit;
}

function admin_try_login(string $user, string $pass): bool
{
    global $config;
    $hash = (string) ($config['admin_password_hash'] ?? '');
    if ($hash === '') {
        return false;
    }
    $expectedUser = (string) ($config['admin_username'] ?? 'admin');

    return hash_equals($expectedUser, $user) && password_verify($pass, $hash);
}

function admin_csrf_token(): string
{
    if (empty($_SESSION['audoe_csrf'])) {
        $_SESSION['audoe_csrf'] = bin2hex(random_bytes(16));
    }

    return $_SESSION['audoe_csrf'];
}

function admin_csrf_verify(?string $token): bool
{
    return isset($_SESSION['audoe_csrf'], $token)
        && hash_equals($_SESSION['audoe_csrf'], (string) $token);
}

function admin_shorten(string $s, int $max): string
{
    if (function_exists('mb_strlen') && function_exists('mb_substr')) {
        if (mb_strlen($s, 'UTF-8') <= $max) {
            return $s;
        }

        return mb_substr($s, 0, max(1, $max - 1), 'UTF-8') . '…';
    }
    return strlen($s) <= $max ? $s : substr($s, 0, max(1, $max - 3)) . '...';
}
