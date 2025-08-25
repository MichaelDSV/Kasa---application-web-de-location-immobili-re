import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header(){
  const linkClass = ({ isActive }) => "navlink" + (isActive ? " navlink--active" : "")
  return (
    <header className="header">
      <img src="/logo.png" alt="Kasa" className="logo" />
      <nav className="nav">
        <NavLink to="/" end className={linkClass}>ACCUEIL</NavLink>
        <NavLink to="/about" className={linkClass}>À PROPOS</NavLink>
      </nav>
    </header>
  )
}
