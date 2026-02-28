import { motion } from 'framer-motion';
import { properties } from '../../data/properties';
import { useNavigate } from 'react-router-dom';

const AllProperties = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-dark mb-6">All Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/properties/${p.slug}`)}
            className="cursor-pointer bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={p.gallery[0]}
              alt={p.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-primary capitalize">
                  {p.category.replace('_', ' ')}
                </span>
                <span className="text-sm text-grayText">{p.priceLabel}</span>
              </div>
              <h2 className="text-lg font-semibold text-dark">{p.name}</h2>
              <p className="text-sm text-grayText">{p.locationCity}</p>
              <button className="mt-2 text-primary underline text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AllProperties;