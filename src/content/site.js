/*
 * All of the artist's copy lives here. Replace the placeholder values when the
 * real details arrive — no component needs to change.
 *
 * Optional fields: leave a list empty ([]) or a value as null and the section
 * that uses it is hidden instead of showing a blank.
 */

export const artist = {
  // Full name: About page title, under the hero headline, footer.
  name: 'John Lester Deniña',

  // Name used on social media and on the artwork. Shown as the hero headline
  // and in the header. Set to null to use the full name everywhere.
  alias: 'Gonda',

  // One line under the hero headline.
  tagline: 'Student artist · drawing, illustration, color & mixed media',

  // Hero headline rendered with WarpText. Use \n for a line break.
  // Defaults to the alias (or the full name) when null.
  heroText: null,

  // Short introduction on the home page (1–2 sentences).
  intro:
    'A student artist exploring different forms of visual art — drawing, illustration, color, and mixed media — shaped by personal experience, imagination, and the things observed along the way.',

  // Where they're based, e.g. 'Los Angeles, CA'.
  location: null,

  // Path to a portrait in /public, e.g. 'images/portrait.jpg'. null shows a placeholder.
  portrait: null,

  // About page: each string is one paragraph.
  bio: [
    'I am a student artist currently exploring different forms of visual art, particularly drawing, illustration, color, and mixed media.',
    'My artworks are influenced by my personal experiences, imagination, interests, and the things I observe around me.'
  ],

  // The artist's mantra: pull quote on the About page and the home artist section.
  // null hides it.
  statement: 'Created to create.',

  // About page timeline: exhibitions, awards, residencies, press.
  // Example: { year: '2025', title: 'Solo show', detail: 'Gallery name, City' }
  highlights: [],

  // Contact
  email: null,
  // Example: { label: 'Instagram', href: 'https://instagram.com/handle' }
  socials: []
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' }
];
