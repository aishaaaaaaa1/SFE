<?php
/**
 * Copier ce fichier en config.local.php et renseigner les accès MySQL.
 * cp config.sample.php config.local.php
 */
return [
    'db' => [
        'host' => '127.0.0.1',
        'port' => 3306,
        'name' => 'audoe_forms',
        'user' => 'audoe_user',
        'pass' => 'CHANGEZ_CE_MOT_DE_PASSE',
        'charset' => 'utf8mb4',
    ],
    'max_upload_mb' => 10,
    /** Jeton pour POST api/admin/news-upsert.php (header X-AUDOE-ADMIN-TOKEN). Vide = admin désactivé */
    'admin_news_token' => '',
    /** true = détail des erreurs SQL dans les réponses JSON (déconseillé en production) */
    'debug' => false,
    /** Admin web (/admin/) — laisser hash vide pour désactiver la connexion */
    'admin_username' => 'admin',
    'admin_password_hash' => '',
];
