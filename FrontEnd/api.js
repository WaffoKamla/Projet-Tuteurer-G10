import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:3000'; // Utilisez 10.0.2.2 pour l'émulateur Android

export const creerUtilisateur = async (nom, prenom, email, password) => {
  console.log('Création de l\'utilisateur avec', nom, prenom, email, password);
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
      nom,
      prenom,
      email,
      password
    });
    console.log('Réponse de création d\'utilisateur:', response.data);
    return { success: true, message: response.data.message };
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error.response?.data?.message || error.message);
    const errorMessage = error.response?.data?.message || 'Erreur lors de la création de l\'utilisateur';
    return { success: false, message: errorMessage };
  }
};

export const login = async (email, password) => {
  console.log('Demande de connexion:', { email, password });
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    console.log('Réponse de connexion:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur de connexion:', error.response?.data?.message || error.message);
    throw error.response?.data || error.message;
  }
};

export const getUserDetails = async () => {
  console.log('Récupération des détails de l\'utilisateur');
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/user`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Réponse des détails de l\'utilisateur:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur:', error);
    throw error;
  }
};

export const updateUserDetails = async (userDetails) => {
  console.log('Mise à jour des détails de l\'utilisateur:', userDetails);
  try {
    const response = await axios.put(`${API_BASE_URL}/auth/user`, userDetails, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Réponse de mise à jour des détails de l\'utilisateur:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour des informations utilisateur:', error);
    throw error;
  }
};

export const logout = async () => {
  console.log('Demande de déconnexion');
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/logout`, {}, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Réponse de déconnexion:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur de déconnexion:', error.response?.data?.message || error.message);
    throw error.response?.data || error.message;
  }
};
