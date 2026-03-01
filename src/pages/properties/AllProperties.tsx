import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import villaAlora2 from '../../assets/VILLA ALORA2.jpg';
import { properties, Property } from '../../data/properties';

const AllProperties = () => {
  const navigate = useNavigate();

  // ✅ SAME QUICK SEARCH STYLE (original)
  const [type, setType] = useState('any');
  const [city, setCity] = useState('any');
  const [beds, setBeds] = useState('any');
  const [budget, setBudget] = useState('any');

  // helper to convert "1.5m" -> number
  const parseBudget = (val: string) => {
    const n = Number(val.replace('m', ''));
    if (Number.isNaN(n)) return null;
    return n * 1_000_000;
  };

  // ✅ Filter logic (keeps your grid same, just changes what shows)
  const filtered = useMemo<Property[]>(() => {
    return properties.filter((p: Property) => {
      // type/category
      if (type !== 'any' && p.category !== type) return false;

      // city
      if (city !== 'any') {
        const cityMatch =
          (p.locationCity || '').toLowerCase().includes(city.toLowerCase()) ||
          (p.locationArea || '').toLowerCase().includes(city.toLowerCase());
        if (!cityMatch) return false;
      }

      // beds check using typed Property
      if (beds !== 'any') {
        const b = Number(beds);
        if (typeof p.bedrooms === 'number' && p.bedrooms !== b) return false;
      }

      // budget filter: convert priceLabel to number if possible
      if (budget !== 'any') {
        const max = parseBudget(budget);
        if (max !== null) {
          // attempt to derive numeric value from priceLabel (strip non-digits)
          const numeric = Number(p.priceLabel.replace(/[^0-9]/g, ''));
          if (!Number.isNaN(numeric) && numeric > max) return false;
        }
      }

      return true;
    });
  }, [type, city, beds, budget]);

  const resetFilters = () => {
    setType('any');
    setCity('any');
    setBeds('any');
    setBudget('any');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* ================= HERO HEADER (same premium style) ================= */}
      <section className="relative h-72 sm:h-96 overflow-hidden rounded-b-2xl">
        <img
          src={villaAlora2}
          alt="All Properties"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F4C400]/35" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm backdrop-blur">
              Verified Listings
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white">All Properties</h1>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Browse our listings and filter by category, location, bedrooms and budget.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUICK PROPERTY SEARCH (original dropdown card) ================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        {/* ✅ This mx-auto centers the whole card */}
        <div className="w-full max-w-5xl mx-auto rounded-2xl bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur border border-black/5">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-sm font-semibold text-dark">Quick Property Search</p>
              <p className="text-xs text-grayText">Filter by category, location, bedrooms and budget.</p>
            </div>

            <button
              onClick={resetFilters}
              className="text-sm font-semibold text-dark hover:underline"
              type="button"
            >
              Reset
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Looking For</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
              >
                <option value="any">Any</option>
                <option value="buy_build">Buy & Build</option>
                <option value="buy_hold">Buy & Hold</option>
                <option value="move_in">Buy & Move In</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Location</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
              >
                <option value="any">All Cities</option>
                {/* keep your current option */}
                <option value="portharcourt">Port Harcourt</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Bedrooms</label>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
              >
                <option value="any">Any</option>
                {[...Array(11).keys()].map((n) => (
                  <option key={n} value={n.toString()}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Budget</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
              >
                <option value="any">Any</option>
                <option value="1.5m">1.5M</option>
                <option value="5m">5M</option>
                <option value="12m">12M</option>
                <option value="18m">18M</option>
                <option value="90m">90M</option>
                <option value="120m">120M</option>
              </select>
            </div>

            <div>
              {/* Just shows results (no routing needed) */}
              <button
                onClick={() => {
                  // no-op: filter runs automatically
                  // you can keep this button for UX
                }}
                className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-95 transition flex justify-center items-center"
                type="button"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GRID (don’t spoil it) ================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-grayText">
            Showing <span className="font-semibold text-dark">{filtered.length}</span> properties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/properties/${p.slug}`)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white border border-black/5"
            >
              <div className="relative">
                <img src={p.gallery[0]} alt={p.name} className="w-full h-[260px] object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-xs text-white/80 capitalize">
                    {p.category.replace('_', ' ')}
                  </span>
                  <h3 className="text-white font-semibold">{p.name}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-grayText">{p.locationCity}</p>
                <p className="text-primary font-semibold mt-2">{p.priceLabel}</p>
                <button className="mt-3 text-sm font-semibold text-primary hover:underline">
                  View Property →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AllProperties;