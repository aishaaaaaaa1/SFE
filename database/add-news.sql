-- ====================================================
-- Ajouter les actualités manquantes à la base de données
-- ====================================================

USE audoe_forms;

-- Insérer les 6 actualités
INSERT INTO news_articles (slug, emoji, date_label_fr, date_label_ar, category_fr, category_ar, title_fr, title_ar, excerpt_fr, excerpt_ar, fr_path, ar_path, sort_order, published, published_at) VALUES
('mois-urbain-2025', '🏙️', 'Octobre 2025', 'أكتوبر 2025', 'Événement', 'حدث', 'L\'AUDOE célèbre le Mois urbain d\'octobre 2025 et la Journée mondiale des villes', 'الوكالة تخلد شهر أكتوبر الحضري 2025 واليوم العالمي للمدن', 'Retour sur les événements organisés en région.', 'تسليط الضوء على التظاهرات المنظمة بالجهة.', 'pages/actu-mois-urbain.html', 'pages/ar/actu-mois-urbain.html', 10, 1, '2025-10-01'),
('bir-gandouz-enquete', '🏗️', '2025', '2025', 'Aménagement', 'تهيئة', 'Lancement de l\'enquête publique relative au projet de plan d\'aménagement sectoriel de la zone des grands équipements et services Bir Gandouz', 'إطلاق البحث العمومي المتعلق بمشروع تصميم التهيئة القطاعي لمنطقة التجهيزات الكبرى ببير كندوز', 'Informations sur la participation du public.', 'معلومات حول مشاركة العموم.', 'pages/actu-bir-gandouz.html', 'pages/ar/actu-bir-gandouz.html', 20, 1, '2025-06-01'),
('programmes-sud-2024', '👑', '2024', '2024', 'Royal', 'ملكي', 'SM le Roi préside à Dakhla la cérémonie de lancement des programmes de développement des régions Dakhla-Oued Eddahab et Guelmim-Oued Noun', 'جلالة الملك يترأس بالداخلة حفل إطلاق برامج التنمية بجهتي الداخلة - وادي الذهب وكلميم - واد نون', 'Cérémonie de lancement à Dakhla.', 'حفل إطلاق بالداخلة.', 'pages/actu-roi-dakhla.html', 'pages/ar/actu-roi-dakhla.html', 30, 1, '2024-11-01'),
('appel-candidatures-conseil-admin', '📢', 'Mars 2025', 'مارس 2025', 'Appel d\'offres', 'دعوة عروض', 'Appel à candidatures pour le Conseil d\'administration', 'دعوة للمشاركة في الترشح لعضوية مجلس الإدارة', 'L\'AUDOE lance un appel à candidatures pour renforcer son conseil d\'administration.', 'تطلق الوكالة دعوة للترشح لعضوية مجلس إدارتها.', 'pages/actu-conseil.html', 'pages/ar/actu-conseil.html', 5, 1, '2025-03-15'),
('projet-voirie-urbaine', '🛣️', 'Février 2025', 'فبراير 2025', 'Projet', 'مشروع', 'Lancement des travaux d\'aménagement des voiries urbaines', 'انطلاق أشغال تهيئة الطرق الحضرية', 'Grands travaux d\'infrastructure dans la région.', 'مشاريع بنية تحتية كبرى بالجهة.', 'pages/actu-voirie.html', 'pages/ar/actu-voirie.html', 8, 1, '2025-02-10'),
('reunion-commission-technique', '👥', 'Janvier 2025', 'يناير 2025', 'Réunion', 'اجتماع', 'Réunion de la Commission technique pour l\'examen des dossiers', 'اجتماع اللجنة التقنية لدراسة الملفات', 'Session ordinaire de la commission.', 'دورة عادية للجنة.', 'pages/actu-commission.html', 'pages/ar/actu-commission.html', 12, 1, '2025-01-20');

-- Vérifier l'insertion
SELECT COUNT(*) as total_actualites FROM news_articles;
