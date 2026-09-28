import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

// Fade out the loading screen from index.html once the page (fonts, images)
// has loaded. Held for at least a moment so it doesn't flash, and never kept
// longer than a few seconds on a slow connection.
const loader = document.getElementById('loader');
if (loader) {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const pageLoaded = new Promise(resolve =>
    document.readyState === 'complete' ? resolve() : window.addEventListener('load', resolve, { once: true })
  );
  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  Promise.race([Promise.all([pageLoaded, fontsReady, wait(1200)]), wait(4500)]).then(() => {
    loader.classList.add('is-done');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    setTimeout(() => loader.remove(), 1000);
  });
}
