@echo off
REM Sert le site en PHP seul sur le port 8081 (évite le conflit avec Spring sur 8080).
cd /d "%~dp0.."

if exist "C:\xampp\php\php.exe" (
  set "PHPBIN=C:\xampp\php\php.exe"
) else (
  set "PHPBIN=php"
)

echo.
echo  Serveur : http://localhost:8081/index.html
echo  API test : http://localhost:8081/api/news-list.php?locale=fr^&from=root_fr^&limit=3
echo  (Si l'API renvoie 500 : demarrer MySQL dans XAMPP, importer database\audoe_schema.sql, copier api\config.sample.php vers api\config.local.php)
echo  Ctrl+C pour arrêter.
echo.
"%PHPBIN%" -S localhost:8081 -t .
if errorlevel 1 (
  echo.
  echo ERREUR: PHP introuvable. Installez XAMPP ou ajoutez php au PATH.
  pause
)
