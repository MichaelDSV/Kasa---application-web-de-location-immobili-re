
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import { fetchProperties } from "../services/api";

export default function Housing() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const [property, setProperty] = useState(null);

useEffect(() => {
  let ignore = false;
  const ctrl = new AbortController();

  (async () => {
    try {
      setStatus("loading");
      const list = await fetchProperties({ signal: ctrl.signal });
      const p = list.find(x => x.id === id);
      if (ignore) return;

      if (p) {
        setProperty(p);
        setStatus("ready");
      } else {
        setStatus("notfound");
      }
    } catch (e) {
      if (!ignore) {
        console.error("Impossible de charger le logement :", e);
        setStatus("error");
      }
    }
  })();

  return () => { 
    ignore = true; 
    ctrl.abort(); 
  };
}, [id]);


  if (status === "loading") {
    return (
      <main className="container">
        <p>Chargement…</p>
      </main>
    );
  }

  if (status === "notfound") return <Navigate to="/notfound" replace />;
  if (status === "error") {
    return (
      <main className="container">
        <p>Impossible de charger le logement.</p>
      </main>
    );
  }

  return (
    <main className="container housing">
      <Slideshow images={property.pictures} alt={`Photos de ${property.title}`} />
      {}
    </main>
  );
}
