import "./header.scss";
import Logo from "./../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../app/logSlice"; // Import de l'action logout
import { selectFirstName, selectToken } from "./../../app/selectors"; // Import des sélecteurs

function Header() {
  const dispatch = useDispatch();

  // Utilisation des sélecteurs pour récupérer les infos utilisateur depuis Redux
  const firstName = useSelector(selectFirstName);
  const isAuthenticated = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(logoutAction()); // Déconnexion de l'utilisateur
  };

  return (
    <header>
      <nav className="main-nav">
        <NavLink to={`/`} className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {isAuthenticated ? (
          <div className="main-nav-content-item">
            <NavLink to={`/dashboard`} className="main-nav-item">
              <i className="fa fa-user-circle"></i> {firstName}
            </NavLink>
            <NavLink to={`/`} className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to={`/signin`} className="main-nav-item">
              <i className="fa fa-user-circle"></i> Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;