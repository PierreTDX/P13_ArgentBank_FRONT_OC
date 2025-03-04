import "./header.scss"
import Logo from "./../../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutAction } from "../../app/logSlice" // Import de l'action logout
import { selectToken, selectFirstName } from "./../../app/selectors" // Import des sélecteurs
import { useUserProfile } from "../../hooks/useUserProfile"

function Header() {
  const dispatch = useDispatch()

  // Utilisation des sélecteurs pour récupérer les infos utilisateur depuis Redux
  const firstName = useSelector(selectFirstName);
  const isAuthenticated = useSelector(selectToken)

  // Utilisation du hook pour récupérer le profil utilisateur
  useUserProfile()

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutAction())
    }, 1)  // 1ms suffit pour éviter que Redux ne mette à jour l'état trop vite afin de NavLink to={`/`} en premier
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