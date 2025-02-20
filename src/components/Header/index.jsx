import "./header.scss";
import Logo from "./../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../../app/userSlice"; // Import de l'action logout

function Header() {
  const dispatch = useDispatch();

  // Récupération des infos utilisateur depuis Redux
  const { firstName, isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout()); // Déconnexion de l'utilisateur
  };

  return (
    <header>
      <nav className="main-nav">
        <NavLink to={`/`} className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {isAuthenticated ? (
          <div>
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