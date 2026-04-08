<?php
/**
 * Script: api/import-news.php
 * Ajouter des actualités à la base de données
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

try {
    // Charger la configuration
    $config = require __DIR__ . '/config.local.php';
    
    // Connexion à la base de données
    $host = $config['db']['host'];
    $user = $config['db']['user'];
    $pass = $config['db']['pass'];
    $db = $config['db']['name'];
    
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    // Actualités à ajouter
    $actualites = [
        [
            'slug' => 'mois-urbain-2025',
            'emoji' => '🏙️',
            'date_label_fr' => 'Octobre 2025',
            'date_label_ar' => 'أكتوبر 2025',
            'category_fr' => 'Événement',
            'category_ar' => 'حدث',
            'title_fr' => 'L\'AUDOE célèbre le Mois urbain d\'octobre 2025 et la Journée mondiale des villes',
            'title_ar' => 'الوكالة تخلد شهر أكتوبر الحضري 2025 واليوم العالمي للمدن',
            'excerpt_fr' => 'Retour sur les événements organisés en région.',
            'excerpt_ar' => 'تسليط الضوء على التظاهرات المنظمة بالجهة.',
            'fr_path' => 'pages/actu-mois-urbain.html',
            'ar_path' => 'pages/ar/actu-mois-urbain.html',
            'sort_order' => 10,
            'published_at' => '2025-10-01'
        ],
        [
            'slug' => 'bir-gandouz-enquete',
            'emoji' => '🏗️',
            'date_label_fr' => '2025',
            'date_label_ar' => '2025',
            'category_fr' => 'Aménagement',
            'category_ar' => 'تهيئة',
            'title_fr' => 'Lancement de l\'enquête publique relative au projet de plan d\'aménagement sectoriel de la zone des grands équipements et services Bir Gandouz',
            'title_ar' => 'إطلاق البحث العمومي المتعلق بمشروع تصميم التهيئة القطاعي لمنطقة التجهيزات الكبرى ببير كندوز',
            'excerpt_fr' => 'Informations sur la participation du public.',
            'excerpt_ar' => 'معلومات حول مشاركة العموم.',
            'fr_path' => 'pages/actu-bir-gandouz.html',
            'ar_path' => 'pages/ar/actu-bir-gandouz.html',
            'sort_order' => 20,
            'published_at' => '2025-06-01'
        ],
        [
            'slug' => 'programmes-sud-2024',
            'emoji' => '👑',
            'date_label_fr' => '2024',
            'date_label_ar' => '2024',
            'category_fr' => 'Royal',
            'category_ar' => 'ملكي',
            'title_fr' => 'SM le Roi préside à Dakhla la cérémonie de lancement des programmes de développement des régions Dakhla-Oued Eddahab et Guelmim-Oued Noun',
            'title_ar' => 'جلالة الملك يترأس بالداخلة حفل إطلاق برامج التنمية بجهتي الداخلة - وادي الذهب وكلميم - واد نون',
            'excerpt_fr' => 'Cérémonie de lancement à Dakhla.',
            'excerpt_ar' => 'حفل إطلاق بالداخلة.',
            'fr_path' => 'pages/actu-roi-dakhla.html',
            'ar_path' => 'pages/ar/actu-roi-dakhla.html',
            'sort_order' => 30,
            'published_at' => '2024-11-01'
        ],
        [
            'slug' => 'appel-candidatures-conseil-admin',
            'emoji' => '📢',
            'date_label_fr' => 'Mars 2025',
            'date_label_ar' => 'مارس 2025',
            'category_fr' => 'Appel d\'offres',
            'category_ar' => 'دعوة عروض',
            'title_fr' => 'Appel à candidatures pour le Conseil d\'administration',
            'title_ar' => 'دعوة للمشاركة في الترشح لعضوية مجلس الإدارة',
            'excerpt_fr' => 'L\'AUDOE lance un appel à candidatures pour renforcer son conseil d\'administration.',
            'excerpt_ar' => 'تطلق الوكالة دعوة للترشح لعضوية مجلس إدارتها.',
            'fr_path' => 'pages/actu-conseil.html',
            'ar_path' => 'pages/ar/actu-conseil.html',
            'sort_order' => 5,
            'published_at' => '2025-03-15'
        ],
        [
            'slug' => 'projet-voirie-urbaine',
            'emoji' => '🛣️',
            'date_label_fr' => 'Février 2025',
            'date_label_ar' => 'فبراير 2025',
            'category_fr' => 'Projet',
            'category_ar' => 'مشروع',
            'title_fr' => 'Lancement des travaux d\'aménagement des voiries urbaines',
            'title_ar' => 'انطلاق أشغال تهيئة الطرق الحضرية',
            'excerpt_fr' => 'Grands travaux d\'infrastructure dans la région.',
            'excerpt_ar' => 'مشاريع بنية تحتية كبرى بالجهة.',
            'fr_path' => 'pages/actu-voirie.html',
            'ar_path' => 'pages/ar/actu-voirie.html',
            'sort_order' => 8,
            'published_at' => '2025-02-10'
        ],
        [
            'slug' => 'reunion-commission-technique',
            'emoji' => '👥',
            'date_label_fr' => 'Janvier 2025',
            'date_label_ar' => 'يناير 2025',
            'category_fr' => 'Réunion',
            'category_ar' => 'اجتماع',
            'title_fr' => 'Réunion de la Commission technique pour l\'examen des dossiers',
            'title_ar' => 'اجتماع اللجنة التقنية لدراسة الملفات',
            'excerpt_fr' => 'Session ordinaire de la commission.',
            'excerpt_ar' => 'دورة عادية للجنة.',
            'fr_path' => 'pages/actu-commission.html',
            'ar_path' => 'pages/ar/actu-commission.html',
            'sort_order' => 12,
            'published_at' => '2025-01-20'
        ]
    ];

    // Insérer les actualités
    $stmt = $pdo->prepare("
        INSERT INTO news_articles 
        (slug, emoji, date_label_fr, date_label_ar, category_fr, category_ar, 
         title_fr, title_ar, excerpt_fr, excerpt_ar, fr_path, ar_path, sort_order, published, published_at)
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
        ON DUPLICATE KEY UPDATE slug = slug
    ");

    $inserted = 0;
    foreach ($actualites as $news) {
        $stmt->execute([
            $news['slug'],
            $news['emoji'],
            $news['date_label_fr'],
            $news['date_label_ar'],
            $news['category_fr'],
            $news['category_ar'],
            $news['title_fr'],
            $news['title_ar'],
            $news['excerpt_fr'],
            $news['excerpt_ar'],
            $news['fr_path'],
            $news['ar_path'],
            $news['sort_order'],
            $news['published_at']
        ]);
        $inserted++;
    }

    echo json_encode([
        'status' => 'success',
        'message' => 'Actualités importées avec succès !',
        'imported' => $inserted,
        'total' => count($actualites)
    ], JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
?>
