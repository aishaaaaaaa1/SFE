<?php

declare(strict_types=1);

if (!defined('AUDOE_ADMIN_HTML')) {
    header('Content-Type: application/json; charset=utf-8');
}

$configPath = dirname(__DIR__) . '/config.local.php';
if (!is_readable($configPath)) {
    $configPath = dirname(__DIR__) . '/config.sample.php';
}
$config = require $configPath;

function audoe_json_server_error(Throwable $e): void
{
    global $config;
    $msg = 'Erreur serveur. Réessayez plus tard.';
    if (!empty($config['debug'])) {
        $msg = 'Erreur technique : ' . $e->getMessage();
    }
    audoe_json_err(500, $msg);
}

function audoe_client_ip(): ?string
{
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $parts = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($parts[0]) ?: null;
    }
    return $_SERVER['REMOTE_ADDR'] ?? null;
}

function audoe_json_input(): array
{
    $raw = file_get_contents('php://input') ?: '';
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function audoe_json_ok(array $data, int $code = 200): void
{
    http_response_code($code);
    echo json_encode(['ok' => true] + $data, JSON_UNESCAPED_UNICODE);
    exit;
}

function audoe_json_err(int $code, string $msg): void
{
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

function audoe_pdo(array $db): PDO
{
    $dsn = sprintf(
        'mysql:host=%s;port=%d;dbname=%s;charset=%s',
        $db['host'],
        (int) ($db['port'] ?? 3306),
        $db['name'],
        $db['charset'] ?? 'utf8mb4'
    );
    $pdo = new PDO($dsn, $db['user'], $db['pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    return $pdo;
}

function audoe_upload_dir(): string
{
    $dir = dirname(__DIR__, 2) . '/uploads/regulation';
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
    return $dir;
}

function audoe_str(?string $s, int $max): string
{
    $s = trim((string) $s);
    if (strlen($s) > $max) {
        $s = substr($s, 0, $max);
    }
    return $s;
}
