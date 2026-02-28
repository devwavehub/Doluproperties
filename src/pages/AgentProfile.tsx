import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { agents } from '../data/agents';
import CONTACT from '../config/contact';
import { motion } from 'framer-motion';

const AgentProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const agent = agents.find((a) => a.slug === slug);

  if (!agent) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Agent not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-primary underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const url = `https://wa.me/${agent.whatsapp || CONTACT.whatsapp}`;
    window.open(url, '_blank');
  };
  const handleCall = () => {
    window.location.href = `tel:${agent.phone || CONTACT.phone}`;
  };
  const handleEmail = () => {
    window.location.href = `mailto:${agent.email || CONTACT.email}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <button
        onClick={() => navigate('/about/team')}
        className="text-sm text-primary hover:underline mb-4"
      >
        &larr; Back to Team
      </button>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img
          src={agent.photo}
          alt={agent.name}
          className="w-40 h-40 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-dark">{agent.name}</h1>
          <p className="text-grayText">{agent.title}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-grayText leading-relaxed">{agent.bio}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-grayText">
          {agent.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleWhatsApp}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          WhatsApp
        </button>
        <button
          onClick={handleCall}
          className="bg-secondary text-white px-4 py-2 rounded"
        >
          Call
        </button>
        <button
          onClick={handleEmail}
          className="border border-primary text-primary px-4 py-2 rounded"
        >
          Email
        </button>
      </div>
    </motion.div>
  );
};

export default AgentProfile;
