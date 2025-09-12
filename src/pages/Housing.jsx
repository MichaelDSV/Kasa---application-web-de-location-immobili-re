
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import { fetchProperties } from "../services/api";

import "./Housing.css";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";


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
  <main className="housing_container housing">
  <Slideshow images={property.pictures} alt={`Photos de ${property.title}`} />

  <section className="housing_top">
    <div className="housing_main">
      <h1 className="housing__title">{property.title}</h1>
      <p className="housing__location">{property.location}</p>

      <div className="housing__tags">
        {property.tags?.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>

    <div className="housing_side">
      <div className="host">
        <span className="host__name">{property.host?.name}</span>
        <img
          className="host__picture"
          src={property.host?.picture}
          alt={`Photo de ${property.host?.name}`}
        />
      </div>

      <Rating value={property.rating} />
    </div>
  </section>

  <section className="housing_bottom">
    <Collapse title="Description">
      <p>{property.description}</p>
    </Collapse>

    <Collapse title="Équipements">
      <ul>
        {property.equipments?.map(eq => <li key={eq}>{eq}</li>)}
      </ul>
    </Collapse>
  </section>
</main>

);
}
