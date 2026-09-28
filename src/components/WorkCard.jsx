import { Link } from 'react-router-dom';
import Artwork from './Artwork.jsx';

export default function WorkCard({ work }) {
  return (
    <Link
      to={`/portfolio/${work.id}`}
      className="work-card"
      aria-label={work.nsfw ? `${work.title} (18+ mature content)` : undefined}
    >
      <Artwork src={work.image} alt={work.title} seed={work.id} mature={work.nsfw} />
      <div className="work-card__meta">
        <h3>
          {work.title}
          {work.nsfw && <span className="badge badge--inline">18+</span>}
        </h3>
        <p>
          {work.category} · {work.year}
        </p>
      </div>
    </Link>
  );
}
