import "./header.scss"
import Logo from "./../../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectFirstName } from "./../../app/selectors" // Import des sélecteurs
import useAuth from "../../hooks/useAuth"; // Import du hook personnalisé
// import { useUserProfile } from "../../hooks/useUserProfile"

function Header() {

  // Utilisation des sélecteurs pour récupérer les infos utilisateur depuis Redux
  const firstName = useSelector(selectFirstName);
  const { isAuthenticated } = useAuth(); // Utilisation du hook ici

  // Utilisation du hook pour récupérer le profil utilisateur = pas besoin grace à Redux
  // useUserProfile()

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
            <NavLink to={`/logout`} className="main-nav-item">
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