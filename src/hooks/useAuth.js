import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { selectToken } from "../app/selectors";

function isTokenValid(token) {
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime;
    } catch (error) {
        console.error("Erreur lors du décodage du token :", error);
        return false;
    }
}

export default function useAuth() {
    const token = useSelector(selectToken);
    const isAuthenticated = isTokenValid(token);

    return { isAuthenticated };
}