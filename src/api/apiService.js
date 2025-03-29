import axios from "axios";

const API_BASE_URL = "https://p13-argentbank-back-oc.vercel.app/api/v1"; // Remplacer par l'URL réelle de l'API
// const API_BASE_URL = "http://localhost:3001/api/v1"; // Remplacer par l'URL réelle de l'API

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
        // Effacer les anciennes données
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        const response = await apiService.post("/user/login", { email, password });

        const { token } = response.data.body; 
          
        if (token) {
          localStorage.setItem("token", token);
        }

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Fonction pour s'inscrire
export const signup = async (email, password, firstName, lastName) => {
  try {
    const response = await apiService.post("/user/signup", { email, password, firstName, lastName });
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
        throw new Error("Token not found, please log in");
      }
  
      const response = await apiService.post("/user/profile");  

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
        throw new Error("Token not found, please log in");
      }
  
      const response = await apiService.put("/user/profile", profileData);
  
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

export default apiService;