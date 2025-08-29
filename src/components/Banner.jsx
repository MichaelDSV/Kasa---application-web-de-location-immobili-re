import "./Banner.css";

export default function Banner({ image, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}
