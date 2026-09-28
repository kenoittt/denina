import { Link } from 'react-router-dom';

export default function MatureGate({ onConfirm }) {
  return (
    <div className="mature-gate" role="alertdialog" aria-labelledby="mature-gate-title" aria-describedby="mature-gate-text">
      <span className="badge badge--large">18+</span>
      <h2 id="mature-gate-title">Mature content</h2>
      <p id="mature-gate-text">This piece contains adult themes and is intended for viewers 18 and older.</p>
      <div className="mature-gate__actions">
        <button type="button" className="button button--light" onClick={onConfirm}>
          I’m 18 or older
        </button>
        <Link to="/portfolio" className="button button--ghost">
          Go back
        </Link>
      </div>
    </div>
  );
}
