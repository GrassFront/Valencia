import "./enquire.css";

export function ENQUIRE({ href = "#booking-bar", onClick, className = "" }) {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`enquire-button ${className}`}
        aria-label="Enquire"
      >
        <p className="enquire">ENQUIRE  →</p>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`enquire-button ${className}`}
      aria-label="Enquire"
    >
      <p className="enquire">ENQUIRE  →</p>
    </button>
  );
}

export default ENQUIRE;
