import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';

const OakridgeCity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-dark mb-6">Oakridge City Estate</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-grayText">
          Oakridge City Estate property details will be displayed here
        </p>
      </div>
    </motion.div>
  );
};

const OakridgeCityPage: React.FC = () => (
  <>
    <OakridgeCity />
    <ContactBar />
  </>
);

export default OakridgeCityPage;
