import "./Rating.css";

export default function Rating({ value = 0, outOf = 5, label = "Note" }) {
  const v = Math.max(0, Math.min(outOf, Number(value) || 0));
  return (
    <div className="rating" aria-label={`${label} : ${v}/${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <span
          key={i}
          className={i < v ? "star filled" : "star"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
