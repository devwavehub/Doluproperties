import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { properties, Property } from '../data/properties';

// helpers for filtering based on query params
function filterProperties(
  all: Property[],
  type: string,
  city: string,
  beds: string,
  budget: string
) {
  return all.filter((p) => {
    if (type && type !== 'any' && p.category !== type) return false;
    if (city && city !== 'any' && p.locationCity.toLowerCase() !== city) return false;
    if (beds && beds !== 'any') {
      const num = parseInt(beds, 10);
      if (p.bedrooms !== num) return false;
    }
    if (budget && budget !== 'any' && budget !== '') {
      // simple match: check if priceLabel contains budget string
      if (!p.priceLabel.toLowerCase().includes(budget.toLowerCase())) return false;
    }
    return true;
  });
}

const SearchResults = () => {
  // read URL query params on load so the page can be shared/bookmarked
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // state holds the current filter form values
  const [type, setType] = useState(searchParams.get('type') || 'any');
  const [city, setCity] = useState(searchParams.get('city') || 'any');
  const [beds, setBeds] = useState(searchParams.get('beds') || 'any');
  const [budget, setBudget] = useState(searchParams.get('budget') || 'any');

  const [results, setResults] = useState<Property[]>([]);

  // whenever params change we recompute results
  useEffect(() => {
    const filtered = filterProperties(properties, type, city, beds, budget);
    setResults(filtered);
  }, [type, city, beds, budget]);

  // applyFilters updates the URL and triggers the effect above
  const applyFilters = () => {
    const params: Record<string, string> = {};
    if (type && type !== 'any') params.type = type;
    if (city && city !== 'any') params.city = city;
    if (beds && beds !== 'any') params.beds = beds;
    if (budget && budget !== 'any') params.budget = budget;
    setSearchParams(params);
  };

  const clearFilters = () => {
    setType('any');
    setCity('any');
    setBeds('any');
    setBudget('any');
    setSearchParams({});
  };

  const goHome = () => navigate('/');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-dark">Search Results</h1>
        <button
          onClick={goHome}
          className="text-primary hover:underline text-sm"
        >
          Back to Home
        </button>
      </div>

      <p className="text-grayText mb-4">
        Showing {results.length} result{results.length !== 1 ? 's' : ''}{' '}
        {type !== 'any' && `for ${type.replace('_', ' ')}`}{' '}
        {city !== 'any' && `in ${city}`}
      </p>

      {/* filter panel */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="any">This Property Type</option>
            <option value="buy_build">Buy & Build</option>
            <option value="buy_hold">Buy & Hold</option>
            <option value="move_in">Buy & Move In</option>
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="any">All Cities</option>
            <option value="portharcourt">Port Harcourt</option>
          </select>
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="any">Bedrooms</option>
            {[...Array(11).keys()].map((n) => (
              <option key={n} value={n.toString()}>
                {n}
              </option>
            ))}
          </select>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="any">Budget</option>
            <option value="1.5m">1.5M</option>
            <option value="5m">5M</option>
            <option value="12m">12M</option>
            <option value="18m">18M</option>
            <option value="90m">90M</option>
            <option value="120m">120M</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={applyFilters}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Apply Filters
            </button>
            <button
              onClick={clearFilters}
              className="text-grayText underline"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* results grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((p) => (
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

export default SearchResults;
