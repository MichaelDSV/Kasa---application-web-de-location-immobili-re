import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const linkClass = ({ isActive }) =>
    "site-nav__link" + (isActive ? " is-active" : "");

  return (
    <header className="site-header">
      {/* IMPORTANT: la ligne ci-dessous doit bien contenir .site-header__row */}
      <div className="site-header__row">
        <img src="./logo.png" alt="Kasa" className="site-logo" />
        <nav className="site-nav">
          <NavLink to="/" end className={linkClass}>Accueil</NavLink>
          <NavLink to="/about" className={linkClass}>À propos</NavLink>
        </nav>
      </div>
    </header>
  );
}
