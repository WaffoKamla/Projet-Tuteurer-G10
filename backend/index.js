const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3000;

// Connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'verhuizen',
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL:', err);
    throw err;
  }
  console.log('MySQL connecté...');
});

// Configuration du store de session MySQL
const sessionStore = new MySQLStore({}, db);  

// Middlewares
app.use(cors({
  origin: 'http://10.0.2.16:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  key: 'session_cookie_name',
  secret: 'clé_secrète',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // En production, utilisez `secure: true` et configurez HTTPS
}));

// Route de test
app.get('/test', (req, res) => {
  res.send('Le serveur fonctionne');
});

// Route d'inscription
app.post('/auth/signup', async (req, res) => {
  const { email, password, nom, prenom } = req.body;

  if (!email || !password || !nom || !prenom) {
    console.log('Inscription échouée: Un ou plusieurs champs sont manquants');
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  console.log('Création de l\'utilisateur avec', { email, password, nom, prenom });
  const hashedPassword = await bcrypt.hash(password, 10);

  // const newUser = { email, password: hashedPassword, nom, prenom };

  const query = `INSERT INTO connexion (email, password, nom, prenom) VALUES (?,?,?,?)`;
  db.query(query, [email, hashedPassword, nom, prenom], (err, result) => {
    if (err) {
      console.error('Inscription échouée:', err);
      return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur.', error: err });
    }
    console.log('Utilisateur créé:', result);
    res.status(201).json({ message: 'Utilisateur créé avec succès.' });
  });
});

// Route de connexion
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log('Connexion échouée: Email ou mot de passe manquant');
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  console.log('Tentative de connexion de l\'utilisateur avec', { email });
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Connexion échouée:', err);
      return res.status(500).json({ message: 'Erreur du serveur.', error: err });
    }

    if (results.length === 0) {
      console.log('Connexion échouée: Utilisateur non trouvé');
      return res.status(404).json({ message: 'Utilisateur non trouvé. Voulez-vous créer un compte ?' });
    }

    const user = results[0];
    console.log('Utilisateur trouvé:', user);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log('Connexion échouée: Mot de passe incorrect');
      return res.status(400).json({ message: 'Mot de passe incorrect.' });
    }

    // Stocker les informations de l'utilisateur dans la session
    req.session.user = {
      id: user.id,
      email: user.email
    };

    console.log('Connexion réussie:', req.session.user);
    res.status(200).json({ message: 'Connexion réussie.', user: req.session.user });
  });
});

// Récupérer les détails de l'utilisateur
app.get('/auth/user', (req, res) => {
  if (!req.session.user) {
    console.log('Échec de la récupération des détails de l\'utilisateur: Utilisateur non authentifié');
    return res.status(401).json({ message: 'Utilisateur non authentifié.' });
  }

  console.log('Récupération des détails de l\'utilisateur pour', req.session.user.id);
  const query = 'SELECT email, nom, prenom, phone, address FROM users WHERE id = ?';
  db.query(query, [req.session.user.id], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données utilisateur:', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération des données utilisateur.', error: err });
    }
    console.log('Détails de l\'utilisateur récupérés:', results[0]);
    res.status(200).json(results[0]);
  });
});

// Mettre à jour les détails de l'utilisateur
app.put('/auth/user', (req, res) => {
  if (!req.session.user) {
    console.log('Mise à jour de l\'utilisateur échouée: Utilisateur non authentifié');
    return res.status(401).json({ message: 'Utilisateur non authentifié.' });
  }

  const { email, phone, address } = req.body;
  console.log('Mise à jour des détails de l\'utilisateur pour', req.session.user.id, 'avec', { email, phone, address });
  const query = 'UPDATE users SET email = ?, phone = ?, address = ? WHERE id = ?';

  db.query(query, [email, phone, address, req.session.user.id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour des données utilisateur:', err);
      return res.status(500).json({ message: 'Erreur lors de la mise à jour des données utilisateur.', error: err });
    }
    console.log('Détails de l\'utilisateur mis à jour:', result);
    res.status(200).json({ message: 'Détails de l\'utilisateur mis à jour avec succès.' });
  });
});

// Route de déconnexion
app.post('/auth/logout', (req, res) => {
  if (req.session.user) {
    console.log('Déconnexion de l\'utilisateur:', req.session.user.email);
    req.session.destroy((err) => {
      if (err) {
        console.error('Erreur lors de la destruction de la session:', err);
        return res.status(500).json({ message: 'Erreur lors de la déconnexion.' });
      }
      res.clearCookie('session_cookie_name'); // Supprime le cookie de session
      res.status(200).json({ message: 'Déconnexion réussie.' });
    });
  } else {
    console.log('Échec de la déconnexion: Aucun utilisateur en session');
    return res.status(400).json({ message: 'Vous n\'êtes pas connecté.' });
  }
});

app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
