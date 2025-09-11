import { useState } from "react";
import "./Slideshow.css";

export default function Slideshow({ images = [], alt = "" }) {
  const [i, setI] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setI((i - 1 + images.length) % images.length);
  const next = () => setI((i + 1) % images.length);
  const single = images.length === 1;

  return (
    <div className="slideshow">
      {/* Flèche gauche */}
      {!single && (
        <button
          className="nav prev"
          onClick={prev}
          aria-label="Précédent"
        >
          ❮
        </button>
      )}

      {/* Image */}
      <img
        src={images[i]}
        alt={`${alt} - photo ${i + 1}/${images.length}`}
      />

      {/* Flèche droite */}
      {!single && (
        <button
          className="nav next"
          onClick={next}
          aria-label="Suivant"
        >
          ❯
        </button>
      )}

      {/* Compteur */}
      {!single && (
        <div className="counter">{i + 1}/{images.length}</div>
      )}
    </div>
  );
}
