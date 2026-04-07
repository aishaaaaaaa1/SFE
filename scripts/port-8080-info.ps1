# Affiche quel processus utilise le port 8080 (souvent Spring Boot).
# Pour arrêter : Stopper l'app dans l'IDE, ou : Stop-Process -Id <PID> -Force

Write-Host "Processus écoutant sur le port 8080 :" -ForegroundColor Cyan
$lines = netstat -ano | Select-String ':8080\s'
if (-not $lines) {
  Write-Host "  (aucun PID trouvé via netstat — port libre ou droits insuffisants)"
  exit 0
}
$lines | ForEach-Object { Write-Host $_.Line }
Write-Host ""
Write-Host "Dernière colonne = PID Windows. Arrêt forcé : taskkill /PID <PID> /F" -ForegroundColor Yellow
Write-Host "Ou dans IntelliJ/Eclipse : bouton Stop sur l'application Spring." -ForegroundColor Yellow
