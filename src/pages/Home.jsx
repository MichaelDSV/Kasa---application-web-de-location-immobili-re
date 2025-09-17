import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import bannerHome from "../assets/banner-home.png";
import Card from "../components/Card";
import { fetchProperties } from "../services/api";
import "./Home.css";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const ctrl = new AbortController();

    async function load() {
      setLoading(true);
      setError("");
      try {
        const data = await fetchProperties({ signal: ctrl.signal });
        setProperties(data);
      } catch (e) {
        if (e?.name === "AbortError") return;

        try {
          const local = await import("../mocks/properties.json");
          setProperties(local.default ?? local);
          setError("API indisponible — données locales affichées.");
        } catch {
          setError("Impossible de charger les logements.");
        }
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => ctrl.abort();
  }, []);

  return (
    <div>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />

      {loading && <p>Chargement des logements…</p>}
      {error && <p className="error">{error}</p>}

      <section className="cards">
        <div className="grid">
          {properties.map((p) => (
            <Card key={p.id} id={p.id} title={p.title} cover={p.cover} />
          ))}
        </div>
      </section>
    </div>
  );
}
