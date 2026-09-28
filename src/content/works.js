/*
 * Portfolio entries. Every card opens an article page at #/portfolio/<id>.
 *
 * Fields:
 *   id          unique slug, used in the URL
 *   title       artwork / project title
 *   year        '2026'
 *   category    used for the Portfolio filter
 *   medium      'Graphite on paper', 'Carved plaster', ...
 *   dimensions  optional, e.g. '120 × 90 cm'
 *   image       cover image path relative to /public, e.g. 'images/works/untitled-01.jpg'.
 *               null (or a file that isn't uploaded yet) shows a placeholder.
 *   summary     one or two sentences for the card and the top of the article
 *   nsfw        true for 18+ work: blurred on cards, age check before the article opens,
 *               and never shown on the home page
 *   article     optional list of blocks rendered as the article body:
 *                 { type: 'heading', text }
 *                 { type: 'text', body }
 *                 { type: 'image', src, alt, caption }
 */

const PLASTER = 'images/works/plaster-relief';

export const works = [
  {
    // Working title — replace once the artist names it.
    id: 'red-fursuit',
    title: 'Untitled (Red Fursuit Head)',
    year: '2026',
    category: 'Fursuit',
    medium: 'Faux fur, foam, mesh',
    image: 'images/works/red-fursuit/01.webp',
    summary:
      'A handmade fursuit head in deep red and white faux fur, with flame-gradient horns and star-shaped eyes.',
    article: [
      {
        type: 'text',
        body: 'Deep red and white faux fur, with bright yellow markings on the ears, brow and muzzle. The horns are painted in a flame gradient from red to gold, and a fine chain drapes across the brow between them. The eyes are mesh with a red-and-gold star design.'
      },
      {
        type: 'image',
        src: 'images/works/red-fursuit/01.webp',
        alt: 'Fursuit head with dark red and white fur, yellow markings, flame-coloured horns and star-patterned eyes, seen from the front',
        caption: 'Front view.'
      },
      {
        type: 'image',
        src: 'images/works/red-fursuit/02.webp',
        alt: 'The same fursuit head seen from slightly further back, showing the ears and horns',
        caption: 'The full head, ears to ruff.'
      }
    ]
  },
  {
    // Working title — replace once the artist names it.
    id: 'wolf-fursuit',
    title: 'Untitled (Wolf Fursuit Head)',
    year: '2026',
    category: 'Fursuit',
    medium: 'Faux fur, foam, mesh',
    image: 'images/works/wolf-fursuit/01.jpg',
    summary: 'A snarling black wolf fursuit head with red and white markings and rows of sculpted soft teeth.',
    article: [
      {
        type: 'text',
        body: 'Black faux fur with red and white markings on the brow and ears. The open, snarling mouth is lined with rows of soft sculpted teeth, a chain drapes across the brow, and the mesh eyes carry a red-and-gold star design.'
      },
      {
        type: 'image',
        src: 'images/works/wolf-fursuit/01.jpg',
        alt: 'Black wolf fursuit head with red markings and an open mouth full of white fabric teeth, seen from the side',
        caption: 'Three-quarter view.'
      },
      {
        type: 'image',
        src: 'images/works/wolf-fursuit/02.jpg',
        alt: 'The black wolf fursuit head seen from the front-left, showing the snarl and teeth',
        caption: 'The snarl.'
      }
    ]
  },
  {
    // Working title — replace once the artist names it.
    id: 'clay-relief',
    title: 'Untitled (Clay Relief)',
    year: '2026',
    category: 'Sculpture',
    medium: 'Clay relief',
    image: 'images/works/clay-relief.jpg',
    summary:
      'A hand-built clay relief: a snarling wolf’s head crowning a calm human face set in a circle, wrapped by curling tendrils and a scaled, flame-edged form.'
  },
  {
    // Working title and copy — edit freely once the artist confirms the details.
    id: 'plaster-relief',
    title: 'Plaster Relief Carving',
    year: '2026',
    category: 'Sculpture',
    medium: 'Carved plaster',
    image: `${PLASTER}/04-sketch.jpg`,
    summary:
      'From a bag of plaster powder to a carved relief: casting blocks in handmade molds, then drawing a radiating design onto the surface to carve into.',
    article: [
      { type: 'heading', text: 'Setting up' },
      {
        type: 'text',
        body: 'The piece started with building the molds by hand: an oval and a square, both made from card and lined for a smooth face. Everything else went on the table: plaster powder, a mixing bowl, a brush, petroleum jelly, and a sketch pad for planning.'
      },
      {
        type: 'image',
        src: `${PLASTER}/01-materials.jpg`,
        alt: 'Handmade oval and square molds, petroleum jelly, a brush, a bag of plaster powder, a steel bowl, a sketch pad and brushes laid out on yellow paper',
        caption: 'Materials: handmade molds, petroleum jelly as a release agent, plaster powder and tools.'
      },
      { type: 'heading', text: 'Mixing the plaster' },
      {
        type: 'text',
        body: 'The plaster powder was mixed with water in a steel bowl and stirred until it reached a smooth, pourable consistency.'
      },
      {
        type: 'image',
        src: `${PLASTER}/02-mixing.jpg`,
        alt: 'Wet plaster being stirred in a steel bowl with a brush handle',
        caption: 'Stirring the plaster before it starts to set.'
      },
      { type: 'heading', text: 'Casting the blocks' },
      {
        type: 'text',
        body: 'The inside of each mold was coated with petroleum jelly so the plaster would release cleanly, then filled and left to set.'
      },
      {
        type: 'image',
        src: `${PLASTER}/03-pouring.jpg`,
        alt: 'Oval and square molds filled with wet white plaster',
        caption: 'Freshly poured, oval and square.'
      },
      { type: 'heading', text: 'Drawing the design' },
      {
        type: 'text',
        body: 'Once the plaster had hardened and the molds were peeled away, the design was drawn straight onto the oval block: a radiating pattern of shapes around a central circle, mapping out where to carve.'
      },
      {
        type: 'image',
        src: `${PLASTER}/04-sketch.jpg`,
        alt: 'Cured oval plaster block with a radiating sunburst design sketched in pencil, resting on newspaper beside carving tools',
        caption: 'The design sketched on the cured block, ready for carving.'
      }
    ]
  },
  {
    // Working title — replace once the artist names it.
    id: 'watermelon-study',
    title: 'Watermelon Study',
    year: '2026',
    category: 'Drawing',
    medium: 'Graphite on paper',
    image: 'images/works/watermelon-study.jpg',
    summary:
      'An observational graphite drawing of a watermelon slice from a photo reference, working out the seeds, the grain of the flesh and the rind in tone alone.'
  },
  {
    id: 'untitled-crocodile',
    title: 'Untitled (Crocodile)',
    year: '2026',
    category: 'Illustration',
    medium: 'Digital sketch',
    image: 'images/works/untitled-crocodile.jpg',
    summary: 'A digital character sketch: a big, laughing crocodile in fried-egg print boxers.'
  },
  {
    id: 'untitled-blue',
    title: 'Untitled (Blue)',
    year: '2026',
    category: 'Illustration',
    medium: 'Digital illustration',
    image: 'images/works/untitled-blue.jpg',
    summary: 'Digital character illustration. Details coming soon.',
    nsfw: true
  },
  {
    id: 'untitled-red',
    title: 'Untitled (Red)',
    year: '2026',
    category: 'Illustration',
    medium: 'Digital illustration',
    image: 'images/works/untitled-red.jpg',
    summary: 'Digital character illustration. Details coming soon.',
    nsfw: true
  },
  {
    id: 'untitled-green',
    title: 'Untitled (Green)',
    year: '2026',
    category: 'Illustration',
    medium: 'Digital illustration',
    image: 'images/works/untitled-green.jpg',
    summary: 'Digital character illustration. Details coming soon.',
    nsfw: true
  },
  {
    id: 'untitled-pool',
    title: 'Untitled (Pool Day)',
    year: '2026',
    category: 'Illustration',
    medium: 'Digital illustration',
    image: 'images/works/untitled-pool.jpg',
    summary: 'Digital character illustration: a lazy summer afternoon on a pool float. Details coming soon.',
    nsfw: true
  }
];

// Everything safe to show on the home page (carousel).
export const publicWorks = works.filter(work => !work.nsfw);

export const getWork = id => works.find(work => work.id === id);
