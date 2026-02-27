import React from 'react';
import { motion } from 'framer-motion';

import villaAlora2 from '../assets/VILLA ALORA2.jpg'; // ✅ adjust path if your Home.tsx is in another folder

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* HERO */}
      <section className="relative w-full min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <img
          src={villaAlora2}
          alt="Villa Alora"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Brand overlay (your gold) */}
        <div className="absolute inset-0 bg-[#F4C400]/60" />
        {/* Add a subtle dark tint so white text reads well */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14">
          <div className="max-w-3xl">
            {/* Small badge */}
            <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur">
              Rivers State Leading Real Estate Company
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Welcome to <span className="text-[#F4C400]">Dolu Properties</span>
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl">
              Invest smart with Dolu Properties — verified lands in Port Harcourt
              offering security, appreciation, and peace of mind.
            </p>

            {/* Buttons (optional like the example — remove if you don’t want) */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#F4C400] px-5 py-3 text-sm font-semibold text-black shadow hover:opacity-95 transition">
                Explore Properties
              </button>
              <button className="rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 transition">
                Contact Us
              </button>
            </div>

            {/* Search card (layout like the example) */}
            <div className="mt-10 w-full max-w-3xl rounded-2xl bg-white/95 p-4 sm:p-5 shadow-xl backdrop-blur">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                {/* Location */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-600 mb-2">
                    Location
                  </label>
                  <select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60">
                    <option>All Cities</option>
                    <option>Port Harcourt</option>
                    <option>Obio/Akpor</option>
                    <option>Eleme</option>
                  </select>
                </div>

                {/* Property Type */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-600 mb-2">
                    Property Type
                  </label>
                  <select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60">
                    <option>All</option>
                    <option>Buy &amp; Hold</option>
                    <option>Buy &amp; Build</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-600 mb-2">
                    Your Budget
                  </label>
                  <select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60">
                    <option>Max Price</option>
                    <option>₦1M - ₦3M</option>
                    <option>₦3M - ₦10M</option>
                    <option>₦10M+</option>
                  </select>
                </div>

                {/* Search */}
                <div className="sm:col-span-1">
                  <button className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-95 transition">
                    Search
                  </button>
                </div>
              </div>

              {/* Small helper text */}
              <p className="mt-3 text-xs text-gray-500">
                Use filters to quickly find the right estate for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next sections will come below... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Placeholder */}
      </div>
    </motion.div>
  );
};

export default Home;