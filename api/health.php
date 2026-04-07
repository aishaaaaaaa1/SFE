<?php

declare(strict_types=1);

/**
 * Diagnostic rapide : JSON { ok, db, news_count, error? }
 * Ouvrir dans le navigateur : …/api/health.php
 */
require __DIR__ . '/includes/bootstrap.php';

try {
    $pdo = audoe_pdo($config['db']);
    $pdo->query('SELECT 1');
    $news = (int) $pdo->query('SELECT COUNT(*) FROM news_articles WHERE published = 1')->fetchColumn();
    audoe_json_ok([
        'db' => true,
        'news_published_count' => $news,
        'hint' => $news === 0 ? 'Aucune actualité publiée : vérifiez la table news_articles ou importez database/audoe_schema.sql' : null,
    ]);
} catch (Throwable $e) {
    audoe_json_err(500, !empty($config['debug']) ? $e->getMessage() : 'Connexion MySQL impossible — démarrez MySQL et vérifiez api/config.local.php');
}
