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
    name: 'Bode Oluji Joe',
    title: 'Chief Executive Officer',
    photo: '/src/assets/placeholders/chairman.jpg',
    bio: 'Bode Oluji Joe is a visionary leader and the driving force behind Dolu Properties. With a deep passion for real estate and community development, he has built the company into a trusted brand known for integrity, innovation, and customer-focused service. Under his leadership, Dolu Properties continues to make land ownership simple, secure, and accessible for Nigerians delivering not just properties, but lasting value and peace of mind.',
    responsibilities: [
      'Property management',
      'Real estate development',
      'Real estate appraising',
      'Retail leasing',
      'Apartment brokerage'
    ],
  },
  {
    slug: 'agent-1',
    name: 'Nii Hope Luke',
    title: 'Business Manager at Dolu Properties',
    photo: '/src/assets/placeholders/agent1.jpg',
    bio: 'Nii Hope Luke is a results-driven business manager with a strong focus on operational excellence and client satisfaction. At Dolu Properties, he oversees daily business operations, coordinates project execution, and ensures seamless service delivery across all departments. With a passion for growth and innovation, Nii plays a key role in driving the company’s mission to make property ownership simple, transparent, and rewarding for every client.',
    responsibilities: ['Property management', 'Real estate development', 'Real estate appraising', 'Retail leasing', 'Apartment brokerage'],
  },
  {
    slug: 'agent-2',
    name: 'Vivian Uzoma',
    title: 'Sales Supervisor at Dolu Properties',
    photo: '/src/assets/placeholders/agent2.jpg',
    bio: 'As Sales Manager at Dolu Properties, she leads the sales team with passion, precision, and a deep understanding of client needs. With a results-driven approach and strong market insight, she ensures every customer finds the right property solution with confidence and ease. Her leadership reflects Dolu Properties’ core values of integrity, professionalism, and service excellence helping the company build lasting relationships and drive consistent growth in Nigeria’s real estate market.',
    responsibilities: ['Market analysis', 'Investment strategy'],
  },
];
