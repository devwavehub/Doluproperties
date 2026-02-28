// Local dataset for agent profiles. Slug should match the route parameter.
// Add new agents here; each object will automatically be available via /team/:slug

export interface Agent {
  slug: string;
  name: string;
  title: string;
  photo: string; // path to local image (place in assets/placeholders)
  bio: string;
  responsibilities: string[];
  whatsapp?: string;
  phone?: string;
  email?: string;
}

// placeholder images should be downloaded into assets/placeholders
// and exported from assets/index if desired, or use relative imports here.

export const agents: Agent[] = [
  {
    slug: 'chairman',
    name: 'John Doe',
    title: 'Chief Executive Officer',
    photo: '/assets/placeholders/chairman.jpg',
    bio: 'With over 20 years in real estate, John leads Dolu Properties with a vision for growth and trust.',
    responsibilities: [
      'Strategic planning',
      'Investor relations',
      'Company oversight',
    ],
  },
  {
    slug: 'agent-1',
    name: 'Jane Smith',
    title: 'Senior Sales Agent',
    photo: '/assets/placeholders/agent1.jpg',
    bio: 'Jane specialises in residential estates and ensures clients find their dream property.',
    responsibilities: ['Client acquisition', 'Property showings'],
  },
  {
    slug: 'agent-2',
    name: 'Michael Brown',
    title: 'Property Consultant',
    photo: '/assets/placeholders/agent2.jpg',
    bio: 'Michael provides expert advice on investment properties across Port Harcourt.',
    responsibilities: ['Market analysis', 'Investment strategy'],
  },
];
