import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Balatro from '../components/reactbits/Balatro.jsx';
import WarpText from '../components/reactbits/WarpText.jsx';
import FlexCarousel from '../components/reactbits/FlexCarousel.jsx';
import Artwork from '../components/Artwork.jsx';
import { artist } from '../content/site.js';
import { publicWorks } from '../content/works.js';

// One carousel card per artwork, using its cover image.
// Mature work is excluded — the carousel draws in WebGL and can't be blurred.
const showcase = publicWorks
  .filter(work => work.image)
  .map(work => ({
    src: work.image,
    alt: work.title,
    title: work.title,
    subtitle: [work.category, work.year].filter(Boolean).join(' · '),
    workId: work.id
  }));

// Stable reference: Balatro rebuilds its WebGL context whenever `offset` changes
// identity, and Home re-renders each time the carousel moves.
const HERO_OFFSET = [0, 0];

// Resolves to the showcase items whose image file actually loads, so pieces
// that haven't been uploaded yet don't show up as blank cards.
function loadAvailable(items) {
  return Promise.all(
    items.map(
      item =>
        new Promise(resolve => {
          const image = new Image();
          image.onload = () => resolve(item);
          image.onerror = () => resolve(null);
          image.src = item.src;
        })
    )
  ).then(results => results.filter(Boolean));
}

export default function Home() {
  const backgroundRef = useRef(null);
  const [available, setAvailable] = useState(null);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    let alive = true;
    loadAvailable(showcase).then(items => {
      if (!alive) return;
      setAvailable(items);
      setCurrent(items[0] ?? null);
    });
    return () => {
      alive = false;
    };
  }, []);

  // The headline sits on top of the Balatro canvas and swallows mouse events,
  // so pass mouse movement over the hero down to the background as well.
  const forwardMouse = event => {
    const target = backgroundRef.current?.firstElementChild;
    if (!target || target.contains(event.target)) return;
    target.dispatchEvent(new MouseEvent('mousemove', { clientX: event.clientX, clientY: event.clientY }));
  };

  return (
    <>
      <section className="hero" onMouseMove={forwardMouse}>
        <div className="hero__background" ref={backgroundRef} aria-hidden="true">
          <Balatro offset={HERO_OFFSET} isRotate={false} mouseInteraction={true} pixelFilter={700} />
        </div>
        <div className="hero__content">
          <WarpText
            text={artist.heroText ?? artist.alias ?? artist.name}
            color="#f8f5ff"
            warpStrength={0.08}
            warpScale={1.7}
            speed={0.55}
            pointerInfluence={0.42}
            pointerStrength={0.38}
            refraction={0.018}
            ripple
            fontSize="clamp(3rem, 10vw, 9rem)"
            fontWeight={700}
            fontFamily="'Space Grotesk', sans-serif"
            className="hero__title"
          />
          <p className="hero__tagline">
            {artist.alias && <span className="hero__name">{artist.name}</span>}
            {artist.tagline}
          </p>
          <div className="hero__actions">
            <Link to="/portfolio" className="button button--light">
              View portfolio
            </Link>
            <Link to="/about" className="button button--ghost">
              About the artist
            </Link>
          </div>
        </div>
      </section>

      <section className="section showcase">
        <div className="container">
          <p className="eyebrow">Introduction</p>
          <p className="intro__text">{artist.intro}</p>
        </div>

        {available?.length > 0 && (
          <>
            <div className="showcase__carousel">
              <FlexCarousel
                items={available}
                preset="liquid"
                intro="rise"
                cardHeight={0.5}
                gap={12}
                radius={12}
                squeeze={0.2}
                focusOnClick
                captions
                captureWheel={false}
                loop={false}
                onChange={(_, item) => setCurrent(item)}
              />
            </div>
            <div className="container showcase__links">
              {current && (
                <Link to={`/portfolio/${current.workId}`} className="text-link">
                  Read about {current.title} →
                </Link>
              )}
              <Link to="/portfolio" className="text-link">
                See all work →
              </Link>
            </div>
          </>
        )}
      </section>

      <section className="section container artist-feature">
        <Artwork
          src={artist.portrait}
          alt={`Portrait of ${artist.name}`}
          seed="portrait"
          className="artist-feature__portrait"
        />
        <div>
          <p className="eyebrow">The artist</p>
          <h2>{artist.name}</h2>
          {artist.alias && <p className="artist-feature__alias">Known online as {artist.alias}</p>}
          {artist.location && <p className="artist-feature__location">Based in {artist.location}</p>}
          {artist.bio.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {artist.statement && <blockquote className="statement">{artist.statement}</blockquote>}
          <Link to="/about" className="button button--light">
            More about the artist
          </Link>
        </div>
      </section>
    </>
  );
}
