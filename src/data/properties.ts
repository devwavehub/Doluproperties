// Local dataset for properties. This acts like a lightweight "database" and powers
// the home sections, search filters, sliders, and property detail pages.
//
// To add a new property, copy one of the objects below, give it a unique `id`
// and `slug` (slug is used in URLs). Ensure the fields match the expected types.
// You can reuse existing images located in `src/assets` or add new ones and
// export them from `src/assets/index.ts`.

import {
  beulahImg,
  oakridgeImg,
  villa1Img,
  villa2Img,
} from '../assets';

export type PropertyCategory = 'buy_build' | 'buy_hold' | 'move_in';

export interface Property {
  id: number;
  name: string;        // Display name of the property
  slug: string;        // URL-friendly identifier, used by dynamic route
  category: PropertyCategory;
  locationCity: string;
  locationArea: string;
  bedrooms: number | null; // null means "land only" or not applicable
  priceLabel: string;  // human readable price range or value
  gallery: string[];   // array of image imports or URLs
  tagline: string;     // one-liner shown on cards
  highlights: string[]; // bullet points used on detail page
  // CTA contacts can default to config but override if needed
  whatsapp?: string;
  phone?: string;
  email?: string;
}

// main properties (these have dedicated full pages in src/pages/properties)
const mainProperties: Property[] = [
  {
    id: 1,
    name: 'Beulah Layout',
    slug: 'beulah-layout',
    category: 'buy_build',
    locationCity: 'Port Harcourt',
    locationArea: 'Abara Etche',
    bedrooms: null,
    priceLabel: '₦1.5M per plot',
    gallery: [beulahImg],
    tagline: 'Prime layout with full services',
    highlights: [
      'Serviced plots from 600sqm',
      'Gated community',
      'Flood-free area',
    ],
  },
  {
    id: 2,
    name: 'Olive Estate',
    slug: 'olive-estate',
    category: 'move_in',
    locationCity: 'Port Harcourt',
    locationArea: 'Choba',
    bedrooms: 3,
    priceLabel: '₦12M – ₦18M',
    gallery: [villa1Img, villa2Img],
    tagline: 'Luxury homes with modern amenities',
    highlights: [
      '4-bedroom terraces',
      '24/7 security',
      'Swimming pool & gym',
    ],
  },
  {
    id: 3,
    name: 'Oakridge City Estate',
    slug: 'oakridge-city',
    category: 'buy_hold',
    locationCity: 'Port Harcourt',
    locationArea: 'Rumuokwurusi',
    bedrooms: null,
    priceLabel: '₦90M / ₦120M',
    gallery: [oakridgeImg],
    tagline: 'High-value plots for investment',
    highlights: [
      'Commercial and residential plots',
      'Near major highway',
      'High ROI potential',
    ],
  },
  {
    id: 4,
    name: 'Army Range',
    slug: 'army-range',
    category: 'buy_hold',
    locationCity: 'Port Harcourt',
    locationArea: 'Igbo-Etche',
    bedrooms: null,
    priceLabel: '₦5M per plot',
    gallery: [oakridgeImg],
    tagline: 'Affordable land with good title',
    highlights: [
      'Established neighbourhood',
      'Easy payment plans',
      'Good drainage system',
    ],
  },
  {
    id: 5,
    name: 'Villa Alora',
    slug: 'villa-alora',
    category: 'move_in',
    locationCity: 'Port Harcourt',
    locationArea: 'GRA Phase 2',
    bedrooms: 4,
    priceLabel: '₦90M – ₦120M',
    gallery: [villa1Img, villa2Img],
    tagline: 'Spacious villas in prime GRA location',
    highlights: [
      '4-bedroom detached villas',
      'Private gardens',
      'Backup generator',
    ],
  },
];

// additional sample-only properties for search/demo
const extraProperties: Property[] = [
  {
    id: 6,
    name: 'Villa Alora (Phase 2)',
    slug: 'villa-alora-phase-2',
    category: 'move_in',
    locationCity: 'Port Harcourt',
    locationArea: 'GRA Phase 2',
    bedrooms: 4,
    priceLabel: '₦95M – ₦125M',
    gallery: [villa2Img],
    tagline: 'New phase of the popular villa project',
    highlights: ['Enhanced security', 'Premium finishes'],
  },
  {
    id: 7,
    name: 'Beulah Layout Extension',
    slug: 'beulah-layout-extension',
    category: 'buy_build',
    locationCity: 'Port Harcourt',
    locationArea: 'Abara Etche',
    bedrooms: null,
    priceLabel: '₦1.7M per plot',
    gallery: [beulahImg],
    tagline: 'Expansion with better road access',
    highlights: ['New perimeter fencing', 'Dual access roads'],
  },
  {
    id: 8,
    name: 'Oakridge City (Premium)',
    slug: 'oakridge-city-premium',
    category: 'buy_hold',
    locationCity: 'Port Harcourt',
    locationArea: 'Rumuokwurusi',
    bedrooms: null,
    priceLabel: '₦110M / ₦140M',
    gallery: [oakridgeImg],
    tagline: 'High-end plots for elite buyers',
    highlights: ['Clubhouse access', 'Safari-style landscaping'],
  },
];

export const properties: Property[] = [...mainProperties, ...extraProperties];
