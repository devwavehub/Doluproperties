import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-dark mb-6">Our Team</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-grayText">
          Team member profiles will be displayed here
        </p>
      </div>
    </motion.div>
  );
};

export default OurTeam;