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
    priceLabel: '₦1.5M',
    gallery: [beulahImg],
    tagline: 'Prime layout with full services',
    highlights: [
      'Serviced plots 460SQM',
      'Good road network',
      'Secure community',
    ],
  },
  {
    id: 2,
    name: 'Olive Estate',
    slug: 'olive-estate',
    category: 'buy_build',
    locationCity: 'Port Harcourt',
    locationArea: 'Elele',
    bedrooms: null,
    priceLabel: '₦1.5M',
    gallery: [villa1Img],
    tagline: 'Well-planned estate with accessibility',
    highlights: [
      'Prime location in Elele',
      'Excellent infrastructure',
      'Strong investment value',
    ],
  },
  {
    id: 3,
    name: 'Oakridge City Estate',
    slug: 'oakridge-city',
    category: 'buy_hold',
    locationCity: 'Port Harcourt',
    locationArea: 'Omagwa – Isiokpo',
    bedrooms: null,
    priceLabel: '₦5,000,000',
    gallery: [oakridgeImg],
    tagline: 'Premium estate with full amenities',
    highlights: [
      'Swimming pool & supermarket',
      'Gated community',
      'Modern infrastructure',
    ],
  },
  {
    id: 4,
    name: 'Army Range',
    slug: 'army-range',
    category: 'buy_hold',
    locationCity: 'Port Harcourt',
    locationArea: 'Eneka – Igwuruta',
    bedrooms: null,
    priceLabel: '₦15,000,000',
    gallery: [oakridgeImg],
    tagline: 'Flexible payment investment opportunity',
    highlights: [
      '1000SQM (2 plots)',
      'Flexible 6-month payment plan',
      'Growing residential area',
    ],
  },
  {
    id: 5,
    name: 'Villa Alora',
    slug: 'villa-alora',
    category: 'move_in',
    locationCity: 'Port Harcourt',
    locationArea: 'Mini Orlu',
    bedrooms: 4,
    priceLabel: '₦90M / ₦120M',
    gallery: [villa1Img, villa2Img],
    tagline: 'Premium 4-bedroom terrace duplex',
    highlights: [
      'Shell or finished units',
      'Modern design & finishes',
      'Prime location',
    ],
  },
  {
    id: 6,
    name: 'Primebrook Estate',
    slug: 'primebrook-estate',
    category: 'buy_hold',
    locationCity: 'Port Harcourt',
    locationArea: 'Stadium Road',
    bedrooms: null,
    priceLabel: '₦75,000,000',
    gallery: [villa2Img],
    tagline: 'Premium investment on Stadium Road',
    highlights: [
      'Strategic location',
      'Gated community',
      'High appreciation potential',
    ],
  },
];

// additional sample-only properties for search/demo - KEEPING EMPTY SINCE USER WANTS ONLY MAIN 6
const extraProperties: Property[] = [];

export const properties: Property[] = [...mainProperties, ...extraProperties];
