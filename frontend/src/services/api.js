import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // URL base del backend

// Configurar el token JWT
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Registro de usuario
export const registerUser = (userData) => {
    return axios.post(`${API_URL}/register/`, userData); // Solicitud POST
  };

// Inicio de sesión de usuario
export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/token/`, credentials);
};

// Refrescar token JWT (si es necesario)
export const refreshToken = (refreshToken) => {
  return axios.post(`${API_URL}/token/refresh/`, { refresh: refreshToken });
};

// Obtener publicaciones
export const getPosts = () => {
  return axios.get(`${API_URL}/posts/`, { headers: getAuthHeaders() });
};

// Crear nueva publicación
export const createPost = (postData) => {
  return axios.post(`${API_URL}/posts/`, postData, { headers: getAuthHeaders() });
};

// Eliminar publicación
export const deletePost = (postId) => {
  return axios.delete(`${API_URL}/posts/${postId}/`, { headers: getAuthHeaders() });
};

export const updateProfile = (profileData) => {
    return axios.put(`${API_URL}/profile/`, profileData, { headers: getAuthHeaders() });
  };
  