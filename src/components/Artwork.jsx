import { useState } from 'react';

// Hue per title so placeholders don't all look identical.
function hueFor(seed = '') {
  let hash = 0;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) % 360;
  return hash;
}

/**
 * An image that falls back to a styled placeholder when there's no src yet
 * or the file hasn't been uploaded. `mature` blurs it behind an 18+ label.
 */
export default function Artwork({ src, alt, seed, ratio = '4 / 5', mature = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  const classes = ['artwork', mature && 'artwork--mature', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={{ aspectRatio: ratio }}>
      {showImage ? (
        <img src={src} alt={mature ? '' : alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="artwork__placeholder" style={{ '--hue': hueFor(seed ?? alt) }} role="img" aria-label={alt}>
          {!mature && <span>Image coming soon</span>}
        </div>
      )}
      {mature && (
        <div className="artwork__warning">
          <span className="badge">18+</span>
          <span>Mature content</span>
        </div>
      )}
    </div>
  );
}
