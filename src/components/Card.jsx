import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card" aria-label={`Ouvrir le logement “${title}”`}>
      <img
        src={cover}
        alt={`Photo du logement ${title}`}
        className="card-img"
        loading="lazy"
        decoding="async"
      />
      <div className="card-gradient" />
      <h3 className="card-title">{title}</h3>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default memo(Card);
