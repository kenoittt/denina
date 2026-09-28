import Artwork from '../components/Artwork.jsx';
import PageIntro from '../components/PageIntro.jsx';
import { artist } from '../content/site.js';

export default function About() {
  const hasContact = artist.email || artist.socials.length > 0;

  return (
    <>
      <PageIntro eyebrow="About" title={artist.name}>
        {artist.alias && <p>Known online as {artist.alias}.</p>}
        <p>{artist.tagline}</p>
      </PageIntro>

      <section className="section section--tight container about">
        <Artwork src={artist.portrait} alt={`Portrait of ${artist.name}`} seed="portrait" className="about__portrait" />
        <div className="about__body">
          {artist.location && <p className="eyebrow">Based in {artist.location}</p>}
          {artist.bio.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {artist.statement && <blockquote className="statement">{artist.statement}</blockquote>}
        </div>
      </section>

      {artist.highlights.length > 0 && (
        <section className="section container">
          <h2>Highlights</h2>
          <ol className="timeline">
            {artist.highlights.map(item => (
              <li key={`${item.year}-${item.title}`}>
                <span className="timeline__year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  {item.detail && <p>{item.detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {hasContact && (
        <section className="section container contact">
          <h2>Get in touch</h2>
          {artist.email && (
            <a className="contact__email" href={`mailto:${artist.email}`}>
              {artist.email}
            </a>
          )}
          {artist.socials.length > 0 && (
            <ul className="inline-links">
              {artist.socials.map(social => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </>
  );
}
