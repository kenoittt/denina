import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import WorkGrid from '../components/WorkGrid.jsx';
import { works } from '../content/works.js';

const ALL = 'All';
const categories = [ALL, ...new Set(works.map(work => work.category))];

export default function Portfolio() {
  const [category, setCategory] = useState(ALL);
  const visible = category === ALL ? works : works.filter(work => work.category === category);

  return (
    <>
      <PageIntro eyebrow="Portfolio" title="Work">
        <p>Drawings, illustrations, color studies and mixed-media pieces. Open any piece to read about it.</p>
      </PageIntro>

      <section className="section section--tight container">
        {categories.length > 2 && (
          <div className="filters" role="group" aria-label="Filter by category">
            {categories.map(name => (
              <button
                key={name}
                type="button"
                className="chip"
                aria-pressed={category === name}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>
        )}
        <WorkGrid works={visible} />
      </section>
    </>
  );
}
