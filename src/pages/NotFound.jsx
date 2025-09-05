import { Link, useRouteError } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const err = useRouteError();
  document.title = "404 – Kasa";

  return (
    <main className="notfound container">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__msg">
        Oups! La page que vous demandez n'existe pas.
      </p>

      {err?.statusText && (
        <p className="notfound__detail" aria-live="polite">
          {err.statusText}
        </p>
      )}

      <Link className="notfound__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
