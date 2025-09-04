import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Si tu as un logo blanc, utilise-le : /logo-white.svg */}
        <img src="/logo-white.png" alt="Kasa" className="footer__logo" />
        <p className="footer__claim">© 2020 Kasa. Tous droits réservés</p>
      </div>
    </footer>
  );
}
