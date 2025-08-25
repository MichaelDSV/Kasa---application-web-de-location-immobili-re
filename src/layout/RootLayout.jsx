import { Outlet } from "react-router-dom"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

export default function RootLayout(){
  return (
    <div className="container">
      <Header />
      <main style={{ minHeight: 320, paddingTop: 12 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
