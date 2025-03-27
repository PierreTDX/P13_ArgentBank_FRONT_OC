import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth"; // Import du hook personnalisé

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth(); // Utilisation du hook

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Validation des props
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;