<?php
/**
 * Script de création de l'utilisateur MySQL
 * Fichier: api/setup-user.php
 */

header('Content-Type: application/json; charset=utf-8');

try {
    // Connexion en tant que root (sans base de données spécifiée)
    $dsn = "mysql:host=localhost;charset=utf8mb4";
    $pdo = new PDO($dsn, 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    // Créer l'utilisateur
    $pdo->exec("DROP USER IF EXISTS 'audoe_user'@'localhost'");
    $pdo->exec("CREATE USER 'audoe_user'@'localhost' IDENTIFIED BY 'CHANGEZ_CE_MOT_DE_PASSE'");
    
    // Donner les permissions
    $pdo->exec("GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP ON audoe_forms.* TO 'audoe_user'@'localhost'");
    
    // Appliquer
    $pdo->exec("FLUSH PRIVILEGES");

    echo json_encode([
        'status' => 'success',
        'message' => 'Utilisateur audoe_user créé avec succès !',
        'user' => 'audoe_user',
        'database' => 'audoe_forms',
        'password' => 'CHANGEZ_CE_MOT_DE_PASSE'
    ], JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage(),
        'help' => 'Assurez-vous que MySQL est lancé et que vous êtes connecté en tant que root'
    ], JSON_UNESCAPED_UNICODE);
}
?>
