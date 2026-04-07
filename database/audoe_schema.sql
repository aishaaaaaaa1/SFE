-- Base MySQL pour les formulaires et actualités AUDOE
-- Import : mysql -u root -p < database/audoe_schema.sql
-- Si la base existe déjà sans actualités : mysql ... < database/002_news_articles.sql
-- Puis créez un utilisateur avec un mot de passe fort, par exemple :
--   CREATE USER 'audoe_user'@'localhost' IDENTIFIED BY 'votre_mot_de_passe';
--   GRANT SELECT, INSERT, UPDATE, DELETE ON audoe_forms.* TO 'audoe_user'@'localhost';
--   FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS audoe_forms
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE audoe_forms;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  source ENUM('contact_page', 'creation_page') NOT NULL,
  nom VARCHAR(190) NOT NULL,
  email VARCHAR(190) NOT NULL,
  telephone VARCHAR(80) DEFAULT NULL,
  sujet VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_contact_created (created_at),
  KEY idx_contact_source (source)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS preinstruction_submissions (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nom VARCHAR(190) NOT NULL,
  email VARCHAR(190) NOT NULL,
  objet VARCHAR(500) DEFAULT NULL,
  description TEXT NOT NULL,
  pieces_prevues TEXT DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_preinstruction_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS enote_submissions (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  civilite VARCHAR(50) DEFAULT NULL,
  nom VARCHAR(190) NOT NULL,
  cin_statut VARCHAR(190) NOT NULL,
  adresse_demandeur VARCHAR(500) DEFAULT NULL,
  telephone VARCHAR(80) DEFAULT NULL,
  email VARCHAR(190) NOT NULL,
  qualite VARCHAR(190) NOT NULL,
  statut_foncier VARCHAR(80) DEFAULT NULL,
  reference_fonciere VARCHAR(190) DEFAULT NULL,
  adresse_terrain VARCHAR(500) DEFAULT NULL,
  prefecture VARCHAR(190) DEFAULT NULL,
  commune VARCHAR(190) DEFAULT NULL,
  nature_projet VARCHAR(190) DEFAULT NULL,
  nature_terrain VARCHAR(80) DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_enote_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS regulation_pdf_uploads (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  category VARCHAR(80) NOT NULL,
  message TEXT DEFAULT NULL,
  stored_filename VARCHAR(255) NOT NULL,
  original_filename VARCHAR(255) NOT NULL,
  file_size INT UNSIGNED NOT NULL,
  mime_type VARCHAR(120) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_reg_created (created_at),
  KEY idx_reg_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Actualités (liste dynamique FR/AR + liens vers pages HTML existantes)
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
  fr_path VARCHAR(500) NOT NULL COMMENT 'URL relative depuis la racine du site',
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
