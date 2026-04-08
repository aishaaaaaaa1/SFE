import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// CONFIGURATION DE LA BASE DE DONNEES
// Vérifiez bien l'utilisateur et le mot de passe selon votre config WAMP/XAMPP
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',      
    password: '',      
    database: 'audoe_forms',
    waitForConnections: true,
    connectionLimit: 10
});

// Test de connexion
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Erreur de connexion à MySQL:', err.message);
    } else {
        console.log('✅ Connecté à la base de données MySQL !');
        connection.release();
    }
});

// ROUTE POUR RÉCUPÉRER LES ARTICLES
app.get('/api/news', (req, res) => {
    const sql = "SELECT * FROM news_articles WHERE published = 1 ORDER BY created_at DESC";
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Erreur lors de la requête" });
        }
        res.json(results);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});