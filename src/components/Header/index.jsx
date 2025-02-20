import './header.scss'
import Logo from './../../assets/img/argentBankLogo.png'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();

  return (
    <header>
      <nav className="main-nav">
        <NavLink to={`/`} className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {location.pathname === "/dashboard" ? (
          <div>
            <NavLink to={`/dashboard`} className="main-nav-item">
              <i className="fa fa-user-circle"></i> Tony </NavLink>
            <NavLink to={`/`} className="main-nav-item">
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