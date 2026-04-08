<?php
/**
 * Script: api/add-more-news.php
 * Ajouter 10 nouvelles actualités à la base de données
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

try {
    $config = require __DIR__ . '/config.local.php';
    
    $host = $config['db']['host'];
    $user = $config['db']['user'];
    $pass = $config['db']['pass'];
    $db = $config['db']['name'];
    
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    // 10 nouvelles actualités
    $actualites = [
        [
            'slug' => 'ouverture-extension-sede',
            'emoji' => '🏢',
            'date_label_fr' => 'Septembre 2025',
            'date_label_ar' => 'سبتمبر 2025',
            'category_fr' => 'Événement',
            'category_ar' => 'حدث',
            'title_fr' => 'Ouverture de l\'extension du siège de l\'AUDOE',
            'title_ar' => 'افتتاح توسع مقر الوكالة',
            'excerpt_fr' => 'L\'agence inaugure ses nouveaux locaux pour améliorer les services.',
            'excerpt_ar' => 'تفتتح الوكالة مكاتبها الجديدة لتحسين الخدمات.',
            'content_fr' => '<p>L\'Agence Urbaine de Dakhla – Oued Eddahab a le plaisir d\'annoncer l\'ouverture de l\'extension de son siège principal.</p><p>Ces nouveaux locaux permettront une meilleure organisation des services et un accueil amélioré des citoyens et professionnels.</p><p>La cérémonie d\'inauguration s\'est déroulée en présence des autorités locales et des partenaires de l\'agence.</p>',
            'content_ar' => '<p>يسر الوكالة الحضرية بالداخلة - واد الذهب أن تعلن عن افتتاح توسع مقرها الرئيسي.</p><p>ستسمح هذه المكاتب الجديدة بتنظيم أفضل للخدمات واستقبال محسّن للمواطنين والمهنيين.</p><p>جرت حفل الافتتاح بحضور السلطات المحلية وشركاء الوكالة.</p>',
            'fr_path' => 'pages/actu-ouverture-sede.html',
            'ar_path' => 'pages/ar/actu-ouverture-sede.html',
            'sort_order' => 15,
            'published_at' => '2025-09-15'
        ],
        [
            'slug' => 'formation-agents-urbanisme',
            'emoji' => '📚',
            'date_label_fr' => 'Août 2025',
            'date_label_ar' => 'أغسطس 2025',
            'category_fr' => 'Formation',
            'category_ar' => 'تدريب',
            'title_fr' => 'Session de formation des agents en gestion urbaine',
            'title_ar' => 'جلسة تدريبية للعاملين في إدارة التنمية الحضرية',
            'excerpt_fr' => 'Renforcement des compétences du personnel de l\'agence.',
            'excerpt_ar' => 'تعزيز مهارات موظفي الوكالة.',
            'content_fr' => '<p>Une session de formation intensive a été organisée pour les agents de l\'AUDOE.</p><p>Les thèmes abordés : gestion urbaine durable, procédures d\'instruction et normes de construction.</p><p>Cette formation vise à améliorer la qualité des services offerts aux usagers.</p>',
            'content_ar' => '<p>تم تنظيم جلسة تدريبية مكثفة لعاملي الوكالة.</p><p>المواضيع المطروحة: إدارة التنمية الحضرية المستدامة وإجراءات الفحص.</p><p>يهدف هذا التدريب إلى تحسين جودة الخدمات المقدمة للمستخدمين.</p>',
            'fr_path' => 'pages/actu-formation-agents.html',
            'ar_path' => 'pages/ar/actu-formation-agents.html',
            'sort_order' => 18,
            'published_at' => '2025-08-20'
        ],
        [
            'slug' => 'digitalisation-services',
            'emoji' => '💻',
            'date_label_fr' => 'Juillet 2025',
            'date_label_ar' => 'يوليو 2025',
            'category_fr' => 'Technologie',
            'category_ar' => 'تكنولوجيا',
            'title_fr' => 'Achèvement de la digitalisation des services de l\'AUDOE',
            'title_ar' => 'إتمام رقمنة خدمات الوكالة',
            'excerpt_fr' => 'Tous les services de l\'agence sont maintenant accessibles en ligne.',
            'excerpt_ar' => 'جميع خدمات الوكالة متاحة الآن عبر الإنترنت.',
            'content_fr' => '<p>L\'AUDOE a complété la transformation numérique de ses services.</p><p>Les citoyens peuvent désormais soumettre toutes leurs demandes en ligne via la plateforme officielle.</p><p>Cette initiative renforce l\'accessibilité et la transparence administrative.</p>',
            'content_ar' => '<p>أكملت الوكالة التحول الرقمي لخدماتها.</p><p>يمكن للمواطنين الآن تقديم جميع طلباتهم عبر الإنترنت من خلال المنصة الرسمية.</p><p>هذه المبادرة تعزز إمكانية الوصول والشفافية الإدارية.</p>',
            'fr_path' => 'pages/actu-digitalisation.html',
            'ar_path' => 'pages/ar/actu-digitalisation.html',
            'sort_order' => 22,
            'published_at' => '2025-07-10'
        ],
        [
            'slug' => 'partenariat-collectivite',
            'emoji' => '🤝',
            'date_label_fr' => 'Juin 2025',
            'date_label_ar' => 'يونيو 2025',
            'category_fr' => 'Partenariat',
            'category_ar' => 'شراكة',
            'title_fr' => 'Signature d\'un accord de partenariat avec la Collectivité territoriale',
            'title_ar' => 'توقيع اتفاق شراكة مع الجماعة الترابية',
            'excerpt_fr' => 'Collaboration renforcée pour le développement urbain de la région.',
            'excerpt_ar' => 'تعاون معزز من أجل التنمية الحضرية للمنطقة.',
            'content_fr' => '<p>L\'AUDOE et la Collectivité territoriale de Dakhla ont signé un nouvel accord de coopération.</p><p>Cet accord vise à renforcer la collaboration dans les domaines de la planification urbaine et du contrôle de chantier.</p><p>Les deux parties s\'engagent à œuvrer ensemble pour un développement urbain harmonieux et durable.</p>',
            'content_ar' => '<p>وقعت الوكالة والجماعة الترابية بالداخلة اتفاقا جديدا للتعاون.</p><p>يهدف هذا الاتفاق إلى تعزيز التعاون في مجالات التخطيط الحضري ومراقبة المشاريع.</p><p>تتعهد الطرفان بالعمل معا من أجل تنمية حضرية متناسقة ومستدامة.</p>',
            'fr_path' => 'pages/actu-partenariat.html',
            'ar_path' => 'pages/ar/actu-partenariat.html',
            'sort_order' => 25,
            'published_at' => '2025-06-05'
        ],
        [
            'slug' => 'seminaire-urbanisme',
            'emoji' => '🎤',
            'date_label_fr' => 'Mai 2025',
            'date_label_ar' => 'مايو 2025',
            'category_fr' => 'Séminaire',
            'category_ar' => 'ندوة',
            'title_fr' => 'Séminaire sur les enjeux de l\'urbanisme durable',
            'title_ar' => 'ندوة حول قضايا التنمية الحضرية المستدامة',
            'excerpt_fr' => 'Experts et professionnels débattent des stratégies urbaines.',
            'excerpt_ar' => 'الخبراء والمتخصصون يناقشون الاستراتيجيات الحضرية.',
            'content_fr' => '<p>Un séminaire important a été organisé regroupant experts en urbanisme et professionnels du secteur.</p><p>Au cœur des débats : la durabilité urbaine, la mobilité et l\'accessibilité.</p><p>Les conclusions seront intégrées dans les futurs plans d\'aménagement de la région.</p>',
            'content_ar' => '<p>تم تنظيم ندوة مهمة جمعت خبراء التخطيط العمراني والمهنيين في هذا القطاع.</p><p>في صلب النقاش: الاستدامة الحضرية والتنقل والإمكانية.</p><p>سيتم دمج الاستنتاجات في خطط التطوير المستقبلية للمنطقة.</p>',
            'fr_path' => 'pages/actu-seminaire.html',
            'ar_path' => 'pages/ar/actu-seminaire.html',
            'sort_order' => 28,
            'published_at' => '2025-05-12'
        ],
        [
            'slug' => 'appel-projets-amenagement',
            'emoji' => '📢',
            'date_label_fr' => 'Avril 2025',
            'date_label_ar' => 'أبريل 2025',
            'category_fr' => 'Appel d\'offres',
            'category_ar' => 'دعوة عروض',
            'title_fr' => 'Appel à projets pour les aménagements publics',
            'title_ar' => 'دعوة لتقديم مشاريع للمساحات العامة',
            'excerpt_fr' => 'L\'AUDOE lance un appel à projets innovants.',
            'excerpt_ar' => 'تطلق الوكالة دعوة لتقديم مشاريع مبتكرة.',
            'content_fr' => '<p>L\'Agence Urbaine lance un appel à projets pour les aménagements de zones publiques.</p><p>Les candidats sont invités à soumettre des propositions innovantes et durables.</p><p>Date limite : 30 mai 2025. Plus d\'informations disponibles auprès du service des projets.</p>',
            'content_ar' => '<p>تطلق الوكالة الحضرية دعوة لتقديم مشاريع لتطوير المناطق العامة.</p><p>يُدعى المتقدمون لتقديم اقتراحات مبتكرة ومستدامة.</p><p>آخر موعد: 30 مايو 2025. معلومات إضافية متاحة في قسم المشاريع.</p>',
            'fr_path' => 'pages/actu-appel-projets.html',
            'ar_path' => 'pages/ar/actu-appel-projets.html',
            'sort_order' => 32,
            'published_at' => '2025-04-01'
        ],
        [
            'slug' => 'nouveaux-dlai-instruction',
            'emoji' => '⏱️',
            'date_label_fr' => 'Mars 2025',
            'date_label_ar' => 'مارس 2025',
            'category_fr' => 'Réglementation',
            'category_ar' => 'تنظيم',
            'title_fr' => 'Réduction des délais d\'instruction des dossiers',
            'title_ar' => 'تقليل آجال دراسة الملفات',
            'excerpt_fr' => 'Les délais d\'instruction sont réduits de 20%.',
            'excerpt_ar' => 'تم تقليل آجال دراسة الملفات بنسبة 20%.',
            'content_fr' => '<p>L\'AUDOE annonce la réduction de 20% des délais d\'instruction des demandes d\'autorisation.</p><p>Cette mesure s\'inscrit dans une politique de simplification administrative.</p><p>Les délais moyens passent de 3 mois à 2 mois et demi pour les permis de construire standard.</p>',
            'content_ar' => '<p>تعلن الوكالة عن تقليل بنسبة 20% من آجال دراسة طلبات الترخيص.</p><p>يندرج هذا الإجراء ضمن سياسة تبسيط العمل الإداري.</p><p>تنخفض الآجال المتوسطة من 3 أشهر إلى شهرين ونصف للتراخيص القياسية.</p>',
            'fr_path' => 'pages/actu-delais.html',
            'ar_path' => 'pages/ar/actu-delais.html',
            'sort_order' => 35,
            'published_at' => '2025-03-18'
        ],
        [
            'slug' => 'visite-ministre-equipement',
            'emoji' => '👔',
            'date_label_fr' => 'Février 2025',
            'date_label_ar' => 'فبراير 2025',
            'category_fr' => 'Visite officielle',
            'category_ar' => 'زيارة رسمية',
            'title_fr' => 'Visite du Ministre de l\'Équipement à l\'AUDOE',
            'title_ar' => 'زيارة وزير التجهيز والماء للوكالة',
            'excerpt_fr' => 'Le ministre inspecte les installations et services de l\'agence.',
            'excerpt_ar' => 'يتفقد الوزير منشآت وخدمات الوكالة.',
            'content_fr' => '<p>Le Ministre de l\'Équipement a effectué une visite officielle à l\'AUDOE.</p><p>Cette visite lui a permis de découvrir les nouveaux services numériques et d\'évaluer les progrès réalisés.</p><p>Le ministre a félicité l\'agence pour ses efforts de modernisation et d\'amélioration des services.</p>',
            'content_ar' => '<p>قام وزير التجهيز بزيارة رسمية للوكالة.</p><p>سمحت له هذه الزيارة باكتشاف الخدمات الرقمية الجديدة وتقييم التقدم المحرز.</p><p>أثنى الوزير على جهود الوكالة في تحديث وتحسين الخدمات.</p>',
            'fr_path' => 'pages/actu-visite-ministre.html',
            'ar_path' => 'pages/ar/actu-visite-ministre.html',
            'sort_order' => 38,
            'published_at' => '2025-02-14'
        ],
        [
            'slug' => 'etude-amenagement-zone-port',
            'emoji' => '🚢',
            'date_label_fr' => 'Janvier 2025',
            'date_label_ar' => 'يناير 2025',
            'category_fr' => 'Projet',
            'category_ar' => 'مشروع',
            'title_fr' => 'Lancement de l\'étude d\'aménagement de la zone portuaire',
            'title_ar' => 'إطلاق دراسة تطوير منطقة الميناء',
            'excerpt_fr' => 'Un grand projet d\'infrastructure pour améliorer le port de Dakhla.',
            'excerpt_ar' => 'مشروع بنية تحتية كبرى لتحسين ميناء الداخلة.',
            'content_fr' => '<p>L\'AUDOE lance une étude complète pour l\'aménagement et la modernisation de la zone portuaire.</p><p>Ce projet vise à améliorer les infrastructures et l\'efficacité du port.</p><p>L\'étude s\'étendra sur 18 mois avec consultation des acteurs locaux.</p>',
            'content_ar' => '<p>تطلق الوكالة دراسة شاملة لتطوير وتحديث منطقة الميناء.</p><p>يهدف هذا المشروع إلى تحسين البنية التحتية وكفاءة الميناء.</p><p>ستستمر الدراسة لمدة 18 شهرا مع مشاورة الفاعلين المحليين.</p>',
            'fr_path' => 'pages/actu-etude-port.html',
            'ar_path' => 'pages/ar/actu-etude-port.html',
            'sort_order' => 42,
            'published_at' => '2025-01-25'
        ],
        [
            'slug' => 'bilan-2024-audoe',
            'emoji' => '📊',
            'date_label_fr' => 'Décembre 2024',
            'date_label_ar' => 'ديسمبر 2024',
            'category_fr' => 'Bilan annuel',
            'category_ar' => 'تقرير سنوي',
            'title_fr' => 'Bilan d\'activité 2024 de l\'AUDOE',
            'title_ar' => 'تقرير الأنشطة السنوي 2024 للوكالة',
            'excerpt_fr' => 'Résultats positifs et perspectives pour 2025.',
            'excerpt_ar' => 'نتائج إيجابية وآفاق لسنة 2025.',
            'content_fr' => '<p>L\'AUDOE a publié son bilan d\'activité pour l\'année 2024.</p><p>Parmi les réalisations : 250 permis de construire délivrés, 5 études urbanistiques finalisées.</p><p>L\'agence se fixe de nouveaux objectifs ambitieux pour 2025, notamment en matière de services numériques.</p>',
            'content_ar' => '<p>نشرت الوكالة تقرير أنشطتها لسنة 2024.</p><p>من بين الإنجازات: 250 رخصة بناء صادرة، 5 دراسات تخطيط عمراني منجزة.</p><p>تضع الوكالة أهدافا طموحة جديدة لسنة 2025، خاصة في مجال الخدمات الرقمية.</p>',
            'fr_path' => 'pages/actu-bilan-2024.html',
            'ar_path' => 'pages/ar/actu-bilan-2024.html',
            'sort_order' => 45,
            'published_at' => '2024-12-15'
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
        'message' => '10 nouvelles actualités importées !',
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
