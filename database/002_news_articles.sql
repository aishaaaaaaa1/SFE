-- À exécuter si la base audoe_forms existe déjà sans la table actualités :
-- mysql -u audoe_user -p audoe_forms < database/002_news_articles.sql

USE audoe_forms;

CREATE TABLE IF NOT EXISTS news_articles (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  slug VARCHAR(120) NOT NULL,
  emoji VARCHAR(20) DEFAULT NULL,
  date_label_fr VARCHAR(120) NOT NULL,
  date_label_ar VARCHAR(120) NOT NULL,
  category_fr VARCHAR(100) NOT NULL,
  category_ar VARCHAR(100) NOT NULL,
  title_fr VARCHAR(500) NOT NULL,
  title_ar VARCHAR(500) NOT NULL,
  excerpt_fr VARCHAR(2000) NOT NULL,
  excerpt_ar VARCHAR(2000) NOT NULL,
  fr_path VARCHAR(500) NOT NULL,
  ar_path VARCHAR(500) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  published TINYINT(1) NOT NULL DEFAULT 1,
  published_at DATE DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_news_slug (slug),
  KEY idx_news_published_sort (published, sort_order),
  KEY idx_news_published_date (published, published_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO news_articles (slug, emoji, date_label_fr, date_label_ar, category_fr, category_ar, title_fr, title_ar, excerpt_fr, excerpt_ar, fr_path, ar_path, sort_order, published, published_at)
VALUES
('mois-urbain-2025', '🏙️', 'Octobre 2025', 'أكتوبر 2025', 'Événement', 'حدث',
 'L’AUDOE célèbre le Mois urbain d’octobre 2025 et la Journée mondiale des villes',
 'الوكالة تخلد شهر أكتوبر الحضري 2025 واليوم العالمي للمدن',
 'Retour sur les événements organisés en région.',
 'تسليط الضوء على التظاهرات المنظمة بالجهة.',
 'pages/actu-mois-urbain.html', 'pages/ar/actu-mois-urbain.html', 10, 1, '2025-10-01'),
('bir-gandouz-enquete', '🏗️', '2025', '2025', 'Aménagement', 'تهيئة',
 'Lancement de l’enquête publique relative au projet de plan d’aménagement sectoriel de la zone des grands équipements et services Bir Gandouz',
 'إطلاق البحث العمومي المتعلق بمشروع تصميم التهيئة القطاعي لمنطقة التجهيزات الكبرى ببير كندوز',
 'Informations sur la participation du public.',
 'معلومات حول مشاركة العموم.',
 'pages/actu-bir-gandouz.html', 'pages/ar/actu-bir-gandouz.html', 20, 1, '2025-06-01'),
('programmes-sud-2024', '👑', '2024', '2024', 'Royal', 'ملكي',
 'SM le Roi préside à Dakhla la cérémonie de lancement des programmes de développement des régions Dakhla-Oued Eddahab et Guelmim-Oued Noun',
 'جلالة الملك يترأس بالداخلة حفل إطلاق برامج التنمية بجهتي الداخلة - وادي الذهب وكلميم - واد نون',
 'Cérémonie de lancement à Dakhla.',
 'حفل إطلاق بالداخلة.',
 'pages/actu-roi-dakhla.html', 'pages/ar/actu-roi-dakhla.html', 30, 1, '2024-11-01')
ON DUPLICATE KEY UPDATE slug = slug;
