/*
 * Portfolio entries. Every card opens an article page at #/portfolio/<id>.
 *
 * Fields:
 *   id          unique slug, used in the URL
 *   title       artwork / project title
 *   year        '2026', or null if unknown
 *   category    used for the Portfolio filter
 *   medium      'Graphite on paper', 'Carved plaster', ...
 *   dimensions  optional, e.g. '120 × 90 cm'
 *   image       cover image path relative to /public, e.g. 'images/works/untitled-01.jpg'.
 *               null (or a file that isn't uploaded yet) shows a placeholder.
 *   summary     one or two sentences for the card and the top of the article
 *   showcase    false keeps it out of the home page carousel (e.g. process write-ups)
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
    id: 'crimson-grin',
    title: 'Crimson Grin',
    year: null,
    category: 'Fursuit',
    medium: 'Mixed Media / Fursuit Construction',
    image: 'images/works/crimson-grin/01.webp',
    summary:
      'A handmade character head combining deep red, yellow, black, and white materials to create a bold and expressive creature design. The piece explores character construction through texture, color contrast, sculptural form, and wearable art.',
    article: [
      {
        type: 'image',
        src: 'images/works/crimson-grin/01.webp',
        alt: 'Character head in dark red and white faux fur with yellow markings, flame-coloured horns and star-patterned eyes, seen from the front',
        caption: 'Front view.'
      },
      {
        type: 'image',
        src: 'images/works/crimson-grin/02.webp',
        alt: 'The same character head seen from slightly further back, showing the ears and horns',
        caption: 'The full head, ears to ruff.'
      }
    ]
  },
  {
    id: 'satire',
    title: 'Satire',
    year: '2026',
    category: 'Fursuit',
    medium: 'Mixed Media / Fabric, Faux Fur, Foam, and Other Materials',
    image: 'images/works/satire/01.jpg',
    summary:
      'This piece is a handmade character head created through the combination of sculptural construction, fabric, faux fur, and painted details. The use of bold red, yellow, and white creates a strong and playful visual identity, while the exaggerated facial features give the character a distinctive personality. The work explores character design, craftsmanship, texture, and the transformation of an imagined character into a physical three-dimensional artwork.',
    article: [
      {
        type: 'image',
        src: 'images/works/satire/01.jpg',
        alt: 'Black character head with red markings and an open mouth full of white fabric teeth, seen from the side',
        caption: 'Three-quarter view.'
      },
      {
        type: 'image',
        src: 'images/works/satire/02.jpg',
        alt: 'The black character head seen from the front-left, showing the grin and teeth',
        caption: 'The grin.'
      }
    ]
  },
  {
    // Working title — replace once the artist names it.
    id: 'clay-relief',
    title: 'Clay Relief',
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
    // Process write-up: the finished pieces are shown on the home page instead.
    showcase: false,
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
        src: `${PLASTER}/03-casting.jpg`,
        alt: 'Oval and square molds filled with wet white plaster',
        caption: 'Casting: the oval and square molds, freshly filled.'
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
      },
      { type: 'heading', text: 'The finished reliefs' },
      {
        type: 'text',
        body: 'Both blocks were then carved. The oval became a sunburst of radiating segments around a raised centre, framed by stepped chevrons; the square became a ring of eyes gathered around a toothed central form.'
      },
      {
        type: 'image',
        src: 'images/works/oval-relief/01.jpg',
        alt: 'The finished oval plaster relief: a sunburst of radiating segments around a central dome, with chevrons above and below',
        caption: 'The finished oval relief.'
      },
      {
        type: 'image',
        src: 'images/works/square-relief/01.jpg',
        alt: 'The finished square plaster relief: several eyes arranged around a central form with a row of teeth',
        caption: 'The finished square relief.'
      }
    ]
  },
  {
    // Working title — replace once the artist names it.
    id: 'oval-relief',
    title: 'Oval Relief',
    year: null,
    category: 'Sculpture',
    medium: 'Carved plaster',
    image: 'images/works/oval-relief/01.jpg',
    summary:
      'A carved plaster relief on an oval block: a sunburst of radiating segments around a raised central dome, framed by stepped chevrons at the top and bottom.',
    article: [
      {
        type: 'text',
        body: 'Carved from the oval plaster block cast in the sculpture process. The design follows the sketch drawn onto the cured block: a circle of wedge-shaped segments fanning out from a smooth, rounded centre, each one separated by a crisp carved line.'
      },
      {
        type: 'text',
        body: 'Stepped chevrons point in from the top and bottom, and blocky, angular shapes break out past the edge of the oval, so the piece feels like it is pushing against its own frame. Seen from the side, the layers of depth show how much was cut away to leave the sunburst standing in relief.'
      },
      {
        type: 'image',
        src: 'images/works/oval-relief/01.jpg',
        alt: 'Oval white plaster relief carved with a sunburst of radiating segments around a central dome, with chevrons above and below',
        caption: 'Front view.'
      },
      {
        type: 'image',
        src: 'images/works/oval-relief/02.jpg',
        alt: 'The oval plaster relief seen at an angle, showing the depth of the carved segments and chevrons',
        caption: 'Seen at an angle, showing the depth of the carving.'
      }
    ]
  },
  {
    // Working title — replace once the artist names it.
    id: 'square-relief',
    title: 'Square Relief',
    year: null,
    category: 'Sculpture',
    medium: 'Carved plaster',
    image: 'images/works/square-relief/01.jpg',
    summary:
      'A carved plaster relief on a square block: a ring of watchful eyes around a central form with a row of teeth, on a textured, pitted surface.',
    article: [
      {
        type: 'text',
        body: 'Carved from the square plaster block cast in the sculpture process. Set on its point like a diamond, the block is covered in eyes, each outlined in raised rings, all turned toward a lumpy central form edged with a curved row of teeth.'
      },
      {
        type: 'text',
        body: 'Where the oval relief is ordered and geometric, this one is organic and unsettling. The surface is left pitted and dotted rather than smoothed, and the edges swell and dip unevenly, so the whole block reads like a living thing looking back at the viewer.'
      },
      {
        type: 'image',
        src: 'images/works/square-relief/01.jpg',
        alt: 'Square white plaster relief carved with several eyes arranged around a central form with a row of teeth',
        caption: 'Front view.'
      },
      {
        type: 'image',
        src: 'images/works/square-relief/02.jpg',
        alt: 'The square plaster relief seen at an angle, showing the raised eyes and textured surface',
        caption: 'Seen at an angle, showing the raised eyes and texture.'
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
    id: 'dinos-day-off',
    title: 'Dino’s Day Off',
    year: null,
    category: 'Illustration',
    medium: 'Digital Illustration',
    image: 'images/works/dinos-day-off.jpg',
    summary:
      'A humorous digital illustration of a large green dinosaur-like character relaxing in a casual outfit decorated with playful egg patterns. The exaggerated proportions, expressive pose, and bright color palette create a lighthearted character-focused composition.'
  },
  {
    id: 'untitled-blue',
    title: 'Blue',
    year: '2026',
    category: 'Illustration',
    medium: 'Digital illustration',
    image: 'images/works/untitled-blue.jpg',
    summary: 'Digital character illustration. Details coming soon.',
    nsfw: true
  },
  {
    id: 'untitled-red',
    title: 'Red',
    year: '2026',
    category: 'Illustration',
    medium: 'Digital illustration',
    image: 'images/works/untitled-red.jpg',
    summary: 'Digital character illustration. Details coming soon.',
    nsfw: true
  },
  {
    id: 'bound-in-red',
    title: 'Bound in Red',
    year: null,
    category: 'Illustration',
    medium: 'Digital Illustration',
    image: 'images/works/bound-in-red.jpg',
    summary:
      'A stylized character illustration featuring a large green wolf-like figure decorated with red ropes and ornaments. The contrast between the muted green and warm red creates a strong visual identity, while the character’s pose and expression give the piece a playful and confident atmosphere.',
    nsfw: true
  },
  {
    id: 'summer-float',
    title: 'Summer Float',
    year: null,
    category: 'Illustration',
    medium: 'Digital Illustration',
    image: 'images/works/summer-float.jpg',
    summary:
      'A playful digital illustration of a bear relaxing in a swimming pool surrounded by colorful inflatable balls and pool toys. The bright colors, rounded forms, and relaxed pose create a cheerful summer atmosphere while emphasizing the character’s large and expressive figure.',
    nsfw: true
  }
];

// Everything safe to show on the home page (carousel).
export const publicWorks = works.filter(work => !work.nsfw);

export const getWork = id => works.find(work => work.id === id);
