import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import CONTACT from '../config/contact';
import { motion } from 'framer-motion';

const PropertyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Property not found</h1>
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
    const url = `https://wa.me/${property.whatsapp || CONTACT.whatsapp}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${property.phone || CONTACT.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${property.email || CONTACT.email}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-primary hover:underline mb-4"
      >
        &larr; Back
      </button>

      <h1 className="text-3xl font-bold text-dark mb-4">
        {property.name}
      </h1>
      <p className="text-grayText mb-6">{property.locationArea}, {property.locationCity}</p>

      {/* gallery could be slider or simple image list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {property.gallery.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${property.name} ${idx + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-grayText">
          {property.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-4 px-4 md:px-8 flex justify-around">
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

export default PropertyDetails;
