import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.114:3000';

export const signup = async (email, password, nom, prenom) => {
    try {
        console.log('Demande d\'inscription:', { email, password, nom, prenom });
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, {email, password, nom, prenom });
        console.log('Réponse d\'inscription:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur d\'inscription:', error.response.data);
        throw error.response.data;
    }
};

export const login = async (email, password) => {
    try {
        console.log('Demande de connexion:', { email, password });
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
        console.log('Réponse de connexion:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur de connexion:', error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : error.message;
    }
};

export const getUserDetails = async () => {
    try {
        console.log('Récupération des détails de l\'utilisateur');
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
    try {
        console.log('Mise à jour des détails de l\'utilisateur:', userDetails);
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
    try {
        console.log('Demande de déconnexion');
        const response = await axios.post(`${API_BASE_URL}/auth/logout`, {}, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Réponse de déconnexion:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur de déconnexion:', error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : error.message;
    }
};
