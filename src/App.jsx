
import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ display:'flex', gap:16, marginBottom:24 }}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </header>

      <Outlet />
    </div>
  )
}
