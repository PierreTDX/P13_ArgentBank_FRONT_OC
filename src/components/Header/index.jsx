import "./header.scss"
import Logo from "./../../assets/img/argentBankLogo.png"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutAction } from "../../app/logSlice" // Import de l'action logout
import { selectFirstName, selectToken } from "./../../app/selectors" // Import des sélecteurs

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Utilisation des sélecteurs pour récupérer les infos utilisateur depuis Redux
  const firstName = useSelector(selectFirstName)
  const isAuthenticated = useSelector(selectToken)

  const handleLogout = () => {
    dispatch(logoutAction())  // Déconnecte l'utilisateur

    setTimeout(() => {
      navigate("/")  // Redirige vers la page d'accueil après un court délai
    }, 0)  // 0ms suffit pour éviter que Redux ne mette à jour l'état trop vite
  }

  return (
    <header>
      <nav className="main-nav">
        <NavLink to={`/`} className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {isAuthenticated ? (
          <div className="main-nav-content-item">
            <NavLink to={`/profile`} className="main-nav-item">
              <i className="fa fa-user-circle"></i> {firstName}
            </NavLink>
            <NavLink to={`/`} className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to={`/login`} className="main-nav-item">
              <i className="fa fa-user-circle"></i> Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header