import { Link, useLocation } from 'react-router-dom';
import GooeyNav from './reactbits/GooeyNav.jsx';
import { artist, navItems } from '../content/site.js';

// GooeyNav renders plain <a href>, so hrefs carry the hash-router prefix.
const gooeyItems = navItems.map(item => ({ label: item.label, href: `#${item.path}` }));

function activeIndexFor(pathname) {
  if (pathname === '/') return 0;
  return navItems.findIndex(item => item.path !== '/' && pathname.startsWith(item.path));
}

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand">
          {artist.name}
        </Link>
        <GooeyNav
          items={gooeyItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={activeIndexFor(pathname)}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </header>
  );
}
