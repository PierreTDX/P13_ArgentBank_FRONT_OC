import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import { selectToken } from "../../app/selectors"

function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector(selectToken)

    return isAuthenticated ? children : <Navigate to="/login" replace />
}

// Validation des props
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute