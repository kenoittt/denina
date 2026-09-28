import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Balatro from '../components/reactbits/Balatro.jsx';
import WarpText from '../components/reactbits/WarpText.jsx';
import FlexCarousel from '../components/reactbits/FlexCarousel.jsx';
import Artwork from '../components/Artwork.jsx';
import { artist } from '../content/site.js';
import { publicWorks } from '../content/works.js';

// One carousel card per image: each piece's cover plus its article photos.
// Mature work is excluded — the carousel draws in WebGL and can't be blurred.
const showcase = [];
const seen = new Set();
for (const work of publicWorks) {
  const images = [
    work.image && { src: work.image, alt: work.title },
    ...(work.article ?? []).filter(block => block.type === 'image').map(block => ({ src: block.src, alt: block.alt }))
  ].filter(Boolean);
  for (const image of images) {
    if (seen.has(image.src)) continue;
    seen.add(image.src);
    showcase.push({ ...image, title: work.title, subtitle: `${work.category} · ${work.year}`, workId: work.id });
  }
}

// Stable reference: Balatro rebuilds its WebGL context whenever `offset` changes
// identity, and Home re-renders each time the carousel moves.
const HERO_OFFSET = [0, 0];

export default function Home() {
  const backgroundRef = useRef(null);
  const [current, setCurrent] = useState(showcase[0]);

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
            text={artist.heroText ?? artist.name}
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
          <p className="hero__tagline">{artist.tagline}</p>
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

        {showcase.length > 0 && (
          <>
            <div className="showcase__carousel">
              <FlexCarousel
                items={showcase}
                preset="liquid"
                intro="rise"
                cardHeight={0.5}
                gap={12}
                radius={12}
                squeeze={0.2}
                focusOnClick
                captions
                captureWheel={false}
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
          {artist.location && <p className="artist-feature__location">Based in {artist.location}</p>}
          {artist.bio.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link to="/about" className="button button--light">
            More about the artist
          </Link>
        </div>
      </section>
    </>
  );
}
