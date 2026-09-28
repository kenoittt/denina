import { Link, useParams } from 'react-router-dom';
import Artwork from '../components/Artwork.jsx';
import MatureGate from '../components/MatureGate.jsx';
import NotFound from './NotFound.jsx';
import { getWork } from '../content/works.js';
import { useMatureConsent } from '../lib/mature.js';

function Block({ block, seed }) {
  switch (block.type) {
    case 'heading':
      return <h2>{block.text}</h2>;
    case 'image':
      return (
        <figure>
          <Artwork src={block.src} alt={block.alt} seed={seed + block.src} ratio="auto" className="artwork--natural" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    default:
      return <p>{block.body}</p>;
  }
}

export default function WorkDetail() {
  const { id } = useParams();
  const work = getWork(id);
  const [matureOk, confirmMature] = useMatureConsent();
  if (!work) return <NotFound />;
  const gated = work.nsfw && !matureOk;

  const details = [
    ['Year', work.year],
    ['Category', work.category],
    ['Medium', work.medium],
    ['Dimensions', work.dimensions]
  ].filter(([, value]) => value);

  return (
    <article className="work-article container">
      <Link to="/portfolio" className="text-link">
        ← All work
      </Link>

      <header className="work-article__head">
        <p className="eyebrow">
          {work.category}
          {work.nsfw && <span className="badge badge--inline">18+</span>}
        </p>
        <h1>{work.title}</h1>
        {work.summary && <p className="work-article__summary">{work.summary}</p>}
        <dl className="details">
          {details.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {gated ? (
        <MatureGate onConfirm={confirmMature} />
      ) : work.article?.length ? (
        <div className="prose">
          {work.article.map((block, index) => (
            <Block key={index} block={block} seed={work.id} />
          ))}
        </div>
      ) : (
        <Artwork src={work.image} alt={work.title} seed={work.id} ratio="4 / 3" className="work-article__cover" />
      )}
    </article>
  );
}
