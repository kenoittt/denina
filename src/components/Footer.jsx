import { artist } from '../content/site.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {new Date().getFullYear()} {artist.name}
        </p>
        {(artist.email || artist.socials.length > 0) && (
          <ul className="inline-links">
            {artist.email && (
              <li>
                <a href={`mailto:${artist.email}`}>Email</a>
              </li>
            )}
            {artist.socials.map(social => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
