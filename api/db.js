// api/db.js
const mysql = require('mysql2');

// Création du pool de connexion (meilleur pour les performances)
const pool = mysql.createPool({
    host: 'localhost', // ou l'adresse de votre serveur de base de données
    user: 'audoe_user', // l'utilisateur vu dans votre fichier SQL
    password: 'votre_mot_de_passe', // Remplacez par le vrai mot de passe
    database: 'audoe_forms', // Le nom de votre base
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Utilisation des promesses pour faciliter le code asynchrone
const promisePool = pool.promise();

module.exports = promisePool;