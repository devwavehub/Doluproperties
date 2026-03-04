import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/oakridge-city';

// ✅ Actual flyer image (contains N5M, 460SQM, Oakridge City Estate design)
import oakridgeFlyer from '../../assets/OakridgeCity/Oakridgecity.png';
import oakridgeland from '../../assets/OakridgeCity/OakridgeCityland.jpg';
// Oakridge City Estate landing page — premium real-estate landing
const OakridgeCity: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-[#fbfbf6] to-[#f6ffe9]">
      {/* ✅ MINI HERO (NEW) */}
      <section className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
        {/* Background */}
        <img
          src={oakridgeland}
          alt="Oakridge City Estate"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10 z-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#D6A300]" />
              Premium Listing • Verified
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Welcome to <span className="text-[#D6A300]">Oakridge City Estate</span>
            </h1>

            <p className="mt-2 text-white/85 text-sm sm:text-base">
              A premium residential development in Omagwa – Isiokpo offering 460SQM plots with modern amenities and strong accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Hero: split layout (image right on desktop) */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* tiny tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold text-dark">
              <span className="h-2 w-2 rounded-full bg-[#F4C400]" />
              •Verified Opportunity
            </div>

            {/* ✅ changed to h2 + “Details” so Mini Hero remains the main intro */}
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="text-[#D6A300]">Oakridge</span>{' '}
              <span className="text-[#111111]">City Estate</span>{' '}
              <span className="text-[#D6A300]">Details</span>
            </h2>

            <p className="text-grayText mt-2">
              Omagwa – Isiokpo — Plot size:{' '}
              <span className="font-semibold text-[#111111]">460SQM</span>
            </p>

            {/* Pricing chip: red accent like flyer price tag + clean layout */}
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-black/10">
                <div className="text-sm text-grayText">Price</div>
                <div className="font-extrabold text-[#b10000] text-lg">₦5,000,000</div>
                <div className="text-xs text-grayText mt-1">per 460SQM</div>
              </div>

              <div className="bg-[#fff6d6] rounded-xl px-4 py-3 shadow-sm border border-[#D6A300]/25">
                <div className="text-sm font-semibold text-[#111111]">Payment Plan</div>
                <div className="text-xs text-grayText mt-1">
                  50% initial deposit, spread balance across 3–6 months
                </div>
              </div>
            </div>

            {/* CTA buttons: black + gold accent like flyer */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#buy"
                className="bg-[#111111] hover:bg-black transition text-white px-4 py-2 rounded-xl font-semibold"
              >
                Book Inspection
              </a>

              <a
                href="https://wa.me/2347032023029"
                className="bg-[#D6A300] hover:bg-[#b88d00] transition text-black px-4 py-2 rounded-xl font-semibold"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+2347032023029"
                className="border border-black/20 hover:border-black transition text-[#111111] px-4 py-2 rounded-xl font-semibold bg-white"
              >
                Call Now
              </a>

              <a
                href={oakridgeFlyer}
                target="_blank"
                rel="noreferrer"
                className="border border-[#D6A300]/40 hover:border-[#D6A300] transition px-4 py-2 rounded-xl bg-white text-[#111111] font-semibold"
              >
                Download Flyer
              </a>
            </div>

            {/* Small premium note like flyer footer vibe */}
            <div className="mt-5 text-sm text-grayText">
              To book a free site inspection — call{' '}
              <span className="font-semibold text-[#111111]">+234 703 202 3029</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            {/* ✅ Actual flyer image */}
            <img
              src={oakridgeFlyer}
              alt="Oakridge City Estate Flyer"
              className="rounded-3xl shadow-xl border border-black/10 max-w-full w-[520px] bg-white"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Estate Features Row */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Gate House', desc: 'Modern security entrance' },
            { title: 'Perimeter Fence', desc: 'Secure boundary' },
            { title: 'Well Designed Layout', desc: 'Maximum space utilization' },
            { title: 'Good Road Network', desc: 'Easy access throughout' },
            { title: 'Swimming Pool', desc: 'Leisure facility' },
            { title: 'Neighborhood Center', desc: 'Community hub' },
            { title: 'Individual Fence', desc: 'Plot privacy' },
            { title: 'Supermarket', desc: 'Shopping convenience' },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-4 shadow-sm border border-black/10"
            >
              <div className="font-semibold text-[#111111]">{f.title}</div>
              <div className="text-grayText text-sm mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About This Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-black/10">
          <h2 className="text-2xl font-bold text-[#111111]">About Oakridge City Estate</h2>
          <p className="text-grayText mt-3">
            Oakridge City Estate is a premium residential development in Omagwa – Isiokpo offering
            460SQM plots in a fully developed and secured environment. The estate features modern
            infrastructure including a swimming pool, neighborhood center, supermarket, and
            well-maintained road networks. This is an ideal investment for families and business
            owners seeking a balanced community with excellent amenities and strong accessibility.
          </p>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h3 className="font-bold text-[#111111]">Nearby Landmarks</h3>
            <ul className="mt-3 space-y-2 text-grayText">
              <li>• Omagwa Station Market</li>
              <li>• Omagwa Secondary School</li>
              <li>• Wigwe University</li>
              <li>• Port Harcourt International Airport</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h3 className="font-bold text-[#111111]">Documentation</h3>
            <ul className="mt-3 space-y-2 text-grayText">
              <li>• Deed of Conveyance</li>
              <li>• Registered Survey Plan</li>
              <li>• Right of Allocation</li>
              <li>• Full verification support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Buy (timeline) */}
      <section id="buy" className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111]">How to Buy</h3>

        <ol className="mt-4 space-y-4 max-w-3xl">
          <li className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
            <strong className="text-[#111111]">1. Inquiry & Shortlist:</strong>{' '}
            <span className="text-grayText">
              Explore available plots and contact our sales team for details.
            </span>
          </li>
          <li className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
            <strong className="text-[#111111]">2. Inspection Booking:</strong>{' '}
            <span className="text-grayText">
              Schedule a site visit to tour the estate and see the property firsthand.
            </span>
          </li>
          <li className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
            <strong className="text-[#111111]">3. Verification & Allocation:</strong>{' '}
            <span className="text-grayText">
              We verify documents and prepare allocation upon payment agreement.
            </span>
          </li>
          <li className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
            <strong className="text-[#111111]">4. Documentation & Closing:</strong>{' '}
            <span className="text-grayText">
              Complete the documentation process with guided support and receive final allocation.
            </span>
          </li>
        </ol>
      </section>

      {/* What You Get */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-bold text-[#111111]">What You Get</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• Receipt / payment confirmation</li>
              <li>• Allocation certificate</li>
              <li>• Registered survey plan and deed</li>
              <li>• Estate access and amenities rights</li>
              <li>• After-sales support</li>
            </ul>
          </div>

          {/* Gallery preview (small) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-bold text-[#111111]">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`oakridge-${i}`}
                  className="rounded-lg object-cover w-full h-20"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111]">Frequently Asked Questions</h3>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Is the estate fully developed?',
            'What payment plans are available?',
            'How secure is the estate?',
            'Are the documents complete and verified?',
            'Can I resell my plot?',
            'What are the access restrictions?',
            'Are utilities available?',
            'How far is it from the airport?',
          ].map((q) => (
            <div
              key={q}
              className="bg-white rounded-2xl p-4 shadow-sm border border-black/10"
            >
              <div className="font-semibold text-[#111111]">{q}</div>
              <div className="text-grayText text-sm mt-2">
                Oakridge City Estate offers full security, complete documentation, and convenient
                amenities. Contact us for specific details on availability and terms.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-3 border border-black/10">
          <a
            href="https://wa.me/2347012345678"
            className="bg-[#D6A300] text-black px-4 py-2 rounded-full font-semibold"
          >
            WhatsApp
          </a>
          <a
            href="tel:+2347012345678"
            className="bg-[#111111] text-white px-4 py-2 rounded-full font-semibold"
          >
            Call
          </a>
        </div>
      </div> */}
    </div>
  );
};

// Export page with contactbar footer
const OakridgeCityPage: React.FC = () => (
  <>
    <OakridgeCity />
    <ContactBar />
  </>
);

export default OakridgeCityPage;