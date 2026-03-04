import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/olive-estate';

// ✅ Flyer image
import oliveFlyer from '../../assets/OliveEstate/Oliveestate.png';
import oliveland from '../../assets/OliveEstate/OliveEstateland.jpg';
// Olive Estate landing page — flyer-matching premium real-estate landing (green theme)
const OliveEstate: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f4faee] via-white to-[#fffdf5]">
      {/* ✅ MINI HERO (NEW) */}
      <section className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
        {/* Background */}
        <img
          src={oliveland}
          alt="Olive Estate"
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
              <span className="h-2 w-2 rounded-full bg-[#d6e79a]" />
              Prime Location • Verified
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Welcome to <span className="text-[#d6e79a]">Olive Estate</span>
            </h1>

            <p className="mt-2 text-white/85 text-sm sm:text-base">
              A well-positioned residential development in Elele offering 460SQM plots with strong accessibility and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* premium card backdrop */}
            <div className="absolute -inset-4 rounded-3xl bg-white/80 backdrop-blur-md border border-[#2f5d2f]/15 shadow-sm" />

            <div className="relative p-4 sm:p-6">
              {/* ✅ changed to h2 + “Details” so mini hero remains the main intro */}
              <h2 className="text-4xl sm:text-6xl font-extrabold leading-[1.05] text-[#1f4a25]">
                Olive <span className="text-[#2f5d2f]">Estate</span>{' '}
                <span className="text-[#1f4a25]">Details</span>
              </h2>

              {/* “Prime Location” pill like flyer vibe */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#2f5d2f] text-white px-4 py-2 font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#d6e79a]" />
                Prime Location
              </div>

              <p className="text-grayText mt-3">
                Elele — Plot size:{' '}
                <span className="font-semibold text-[#111111]">460SQM</span>
              </p>

              {/* Price + Payment Plan (applies to all) */}
              <div className="flex flex-wrap items-stretch gap-3 mt-6">
                <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#2f5d2f]/15">
                  <div className="text-sm text-grayText">Selling Price</div>
                  <div className="font-extrabold text-[#111111] text-2xl">₦1,500,000</div>
                  <div className="text-xs text-grayText mt-1">per plot (460SQM)</div>
                </div>

                <div className="bg-[#2f5d2f] rounded-2xl px-5 py-4 shadow-sm border border-[#2f5d2f]">
                  <div className="text-sm text-white/80 font-semibold">Payment Plan</div>
                  <div className="font-extrabold text-white mt-1">50% Initial Deposit</div>
                  <div className="text-sm text-white/90">Spread balance within 3–6 months</div>
                  <div className="text-xs text-white/80 mt-1">(Applies to all)</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#buy"
                  className="bg-[#111111] hover:bg-black transition text-white px-4 py-2 rounded-xl font-semibold"
                >
                  Book Inspection
                </a>

                <a
                  href="https://wa.me/2347032023029"
                  className="bg-[#d6e79a] hover:bg-[#c9dd86] transition text-[#1f2d16] px-4 py-2 rounded-xl font-extrabold"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+2347032023029"
                  className="border border-[#2f5d2f]/40 text-[#2f5d2f] hover:bg-[#2f5d2f] hover:text-white transition px-4 py-2 rounded-xl font-semibold bg-white"
                >
                  Call Now
                </a>

                <a
                  href={oliveFlyer}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#2f5d2f]/25 hover:border-[#2f5d2f]/50 transition px-4 py-2 rounded-xl bg-white text-[#111111] font-semibold"
                >
                  Download Flyer
                </a>
              </div>

              <div className="mt-5 text-sm text-grayText">
                Payment plan above applies to all purchases (50% deposit, spread 3–6 months).
              </div>
            </div>
          </motion.div>

          {/* Flyer image (show full, no crop) */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[620px]">
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-[#2f5d2f]/15 bg-white">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={oliveFlyer}
                    alt="Olive Estate Flyer"
                    className="h-full w-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-[#2f5d2f]/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estate Highlights */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Prime Location', desc: 'Excellent accessibility' },
            { title: 'Good Layout', desc: 'Well-planned plots' },
            { title: 'Secure Area', desc: 'Safe neighborhood' },
            { title: 'Infrastructure', desc: 'Good road network' },
          ].map((h) => (
            <div
              key={h.title}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#2f5d2f]/10"
            >
              <div className="font-semibold text-[#111111]">{h.title}</div>
              <div className="text-grayText text-sm mt-1">{h.desc}</div>
              <div className="mt-3 h-[2px] w-10 bg-[#2f5d2f]" />
            </div>
          ))}
        </div>
      </section>

      {/* About Olive Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[#2f5d2f]/10">
          <h2 className="text-2xl font-bold text-[#111111]">About Olive Estate</h2>
          <p className="text-grayText mt-3">
            Olive Estate is a well-positioned residential development in Elele offering
            460SQM plots in a prime location with excellent infrastructure and accessibility.
            The estate features well-planned layouts and a secure community environment.
            Whether you're looking for a family home or an investment property, Olive Estate
            provides the foundation for long-term value and growth.
          </p>
        </div>
      </section>

      {/* Why Invest Here */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#111111] mb-6">
            Why Invest in Olive Estate?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2f5d2f]/10">
              <h4 className="font-semibold text-[#111111] mb-3">Location Advantages</h4>
              <ul className="space-y-2 text-grayText text-sm">
                <li>✓ Accessible from major roads</li>
                <li>✓ Close to commercial hubs</li>
                <li>✓ Growing neighborhood</li>
                <li>✓ Good connectivity</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2f5d2f]/10">
              <h4 className="font-semibold text-[#111111] mb-3">Investment Potential</h4>
              <ul className="space-y-2 text-grayText text-sm">
                <li>✓ Strong appreciation potential</li>
                <li>✓ Flexible payment plan applies to all</li>
                <li>✓ Buy & Build or Hold strategy</li>
                <li>✓ Excellent resale value</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estate Plan & Features */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111] mb-6">Estate Plan & Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2f5d2f]/10">
            <h4 className="font-semibold text-[#111111] mb-3">Available Services</h4>
            <ul className="space-y-2 text-grayText">
              <li>• Clear land title</li>
              <li>• Registered allocation</li>
              <li>• Good road access</li>
              <li>• Utility connections available</li>
              <li>• Customizable plot sizes</li>
            </ul>
          </div>

          {/* Gallery preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2f5d2f]/10">
            <h4 className="font-semibold text-[#111111] mb-3">Gallery Preview</h4>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`olive-${i}`}
                  className="rounded-lg object-cover w-full h-20"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="buy" className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#111111] mb-6">How to Buy</h3>

          <ol className="max-w-3xl space-y-4">
            {[
              { title: 'Inquiry & Interest', desc: 'Contact our team and review available plots' },
              { title: 'Site Inspection', desc: 'Schedule and complete your property viewing' },
              { title: 'Payment Plan', desc: 'Pay 50% initial deposit and spread balance within 3–6 months (applies to all)' },
              { title: 'Allocation & Handover', desc: 'Receive allocation certificate and full support' },
            ].map((step, idx) => (
              <li
                key={step.title}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#2f5d2f]/10 flex gap-3"
              >
                <span className="bg-[#d6e79a] text-[#1f2d16] font-extrabold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-semibold text-[#111111]">{step.title}</div>
                  <div className="text-grayText text-sm mt-1">{step.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111]">Frequently Asked Questions</h3>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'What is the plot size?',
            'Are flexible payment plans available?',
            'How secure is the property?',
            'What documents will I receive?',
            'Can I buy for investment?',
            'Is inspection available?',
          ].map((q) => (
            <div
              key={q}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#2f5d2f]/10"
            >
              <div className="font-semibold text-[#111111]">{q}</div>
              <div className="text-grayText text-sm mt-2">
                Yes — payment plan is 50% initial deposit and you can spread the balance within 3–6 months.
                This applies to all purchases.
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Export page with contactbar footer
const OliveEstatePage: React.FC = () => (
  <>
    <OliveEstate />
    <ContactBar />
  </>
);

export default OliveEstatePage;