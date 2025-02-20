import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

    return isAuthenticated ? children : <Navigate to="/signin" replace />
}

// Validation des props
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute