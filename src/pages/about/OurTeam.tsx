import React from 'react';
import { motion } from 'framer-motion';
import { agents } from '../../data/agents';
import { useNavigate } from 'react-router-dom';

const OurTeam = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-dark mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {agents.map((a) => (
          <div
            key={a.slug}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={a.photo}
              alt={a.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{a.name}</h3>
            <p className="text-sm text-grayText mb-4">{a.title}</p>
            <button
              onClick={() => navigate(`/team/${a.slug}`)}
              className="text-primary underline text-sm"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTeam;