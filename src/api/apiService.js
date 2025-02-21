import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1"; // Remplace par l'URL réelle de ton API

// Création d'une instance Axios
const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Ajout d'un intercepteur pour inclure automatiquement le token JWT
apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fonction pour se connecter et stocker le token
export const login = async (email, password) => {
  try {
    const response = await apiService.post("/user/login", { email, password });
    const { token } = response.data;
    if (token) {
      localStorage.setItem("token", token);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Fonction pour s'inscrire
export const signup = async (email, password) => {
  try {
    const response = await apiService.post("/user/signup", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Fonction pour récupérer le profil utilisateur
export const getUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token non trouvé, veuillez vous connecter");
      }
  
      const response = await apiService.post("/user/profile", { token: token });
  
      return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
  };
    
// Fonction pour mettre à jour le profil utilisateur
export const updateUserProfile = async (profileData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token non trouvé, veuillez vous connecter");
      }
  
      const response = await apiService.put("/user/profile", profileData, {
        headers: {
          Authorization: `Bearer ${token}`, // Ajoute le token dans l'en-tête
          "Content-Type": "application/json",
        },
      });
  
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

// Fonction pour se déconnecter
export const logout = () => {
  localStorage.removeItem("token");
};

export default apiService;