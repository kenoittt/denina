import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';

export default function NotFound() {
  return (
    <PageIntro eyebrow="404" title="Page not found">
      <p>
        That page doesn’t exist. <Link to="/" className="text-link">Go home</Link>
      </p>
    </PageIntro>
  );
}
