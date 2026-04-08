<?php
/**
 * Fichier: api/test-connection.php
 * Test de connexion à la base de données
 */

require_once __DIR__ . '/Database.php';

header('Content-Type: application/json');

try {
    $db = Database::getInstance();
    
    // Test 1 : Connexion
    $response = [
        'status' => 'success',
        'message' => 'Connexion à la base de données réussie !',
        'database' => 'audoe_forms',
        'timestamp' => date('Y-m-d H:i:s')
    ];
    
    // Test 2 : Vérifier les tables
    $tables = $db->fetchAll("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'audoe_forms'");
    $response['tables_count'] = count($tables);
    $response['tables'] = array_map(fn($t) => $t['TABLE_NAME'], $tables);
    
    echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_PRETTY_PRINT);
}
?>
