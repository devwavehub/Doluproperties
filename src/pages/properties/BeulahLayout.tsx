import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import beulahImg from '../../assets/Beulah layout.jpg';
import gallery from '../../gallery/beulah-layout';

// Beulah Layout landing page — flyer-matching premium real-estate landing
const BeulahLayout: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-sky-50 via-white to-[#fff7db]">
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
            <div className="absolute -inset-4 rounded-3xl bg-white/80 backdrop-blur-md border border-black/10 shadow-sm" />

            <div className="relative p-2 sm:p-6">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#111112] leading-[1.02]">
                Beulah <br className="hidden sm:block" />
                Layout
              </h1>

              {/* Yellow location tag (like flyer) */}
              <div className="mt-4 inline-flex items-center gap-2 bg-[#FFC400] text-black font-extrabold px-4 py-2 rounded-xl">
                <span className="text-lg">📍</span>
                <span className="tracking-wide">ABARA-ETCHE</span>
              </div>

              <p className="text-grayText mt-3">
                Plot size: <span className="font-semibold text-[#111111]">460SQM</span>
              </p>

              {/* Price (match flyer: 1.5M emphasis) */}
              <div className="flex flex-wrap items-stretch gap-3 mt-6">
                <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-black/10">
                  <div className="text-sm text-grayText">Selling Price</div>
                  <div className="font-extrabold text-[#111111] text-2xl">₦1,500,000</div>
                  <div className="text-xs text-grayText mt-1">per 460SQM</div>
                </div>

                <div className="bg-[#111111] rounded-2xl px-5 py-4 shadow-sm border border-black">
                  <div className="text-sm text-white/70">Payment Plan</div>
                  <div className="font-semibold text-white mt-1">
                    50% initial deposit
                  </div>
                  <div className="text-sm text-white/80">
                    Spread balance within 3–6 months
                  </div>
                </div>
              </div>

              {/* CTA buttons (black + yellow like flyer) */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a className="bg-[#111111] hover:bg-black transition text-white px-4 py-2 rounded-xl font-semibold">
                  Book Inspection
                </a>

                <a
                  href="https://wa.me/2347012345678"
                  className="bg-[#FFC400] hover:bg-[#e6b000] transition text-black px-4 py-2 rounded-xl font-extrabold"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+2347012345678"
                  className="border border-black/20 text-[#111111] hover:bg-[#111111] hover:text-white transition px-4 py-2 rounded-xl font-semibold bg-white"
                >
                  Call Now
                </a>

                <a
                  href={beulahImg}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#FFC400]/60 hover:border-[#FFC400] transition px-4 py-2 rounded-xl bg-white text-[#111111] font-semibold"
                >
                  Download Flyer
                </a>
              </div>

              {/* mini contact hint like flyer footer */}
              <div className="mt-5 text-sm text-grayText">
                Office: No. 19B Ada George Road, Opposite Father&apos;s House Church, Port Harcourt.
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
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-black/10 bg-white">
                {/* Keep full flyer visible */}
                <div className="aspect-[4/5] w-full">
                  <img
                    src={beulahImg}
                    alt="Beulah Layout Flyer"
                    className="h-full w-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>

                {/* subtle border glow */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-[#FFC400]/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Benefits Row */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Good Road Network', desc: 'Easy access and main-road connectivity' },
            { title: 'Well Designed Layout', desc: 'Planned for comfort & future growth' },
            { title: 'Suitable for Investment', desc: 'Buy & build or buy & hold strategy' },
            { title: 'Neighbourhood Centre', desc: 'Close to amenities and daily needs' },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-4 shadow-sm border border-black/10"
            >
              <div className="font-semibold text-[#111111]">{b.title}</div>
              <div className="text-grayText text-sm mt-1">{b.desc}</div>
              <div className="mt-3 h-[2px] w-10 bg-[#FFC400]" />
            </div>
          ))}
        </div>
      </section>

      {/* About This Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-black/10">
          <h2 className="text-2xl font-bold text-[#111111]">About Beulah Layout</h2>
          <p className="text-grayText mt-3">
            Beulah Layout is a thoughtfully planned estate in Abara Etche offering 460SQM plots ideal
            for both family homes and investment. The location offers strong accessibility, and the layout
            is designed for comfort and long-term value.
          </p>
        </div>
      </section>

      {/* Landmarks + Inspection */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h3 className="font-bold text-[#111111]">Nearby Landmarks</h3>
            <ul className="mt-3 space-y-2 text-grayText">
              <li>• Stella Maris University</li>
              <li>• Tecel Polytechnic</li>
              <li>• Rivers State University</li>
              <li>• Faculty of Agriculture Extension</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h3 className="font-bold text-[#111111]">Inspection Location</h3>
            <p className="text-grayText mt-2">
              Meet at our office: No. 19B Ada George Road, Opposite Father&apos;s House Church, Port Harcourt.
            </p>
            <a
              href="https://www.google.com/maps?q=No.+19B+Ada+George+Road+Port+Harcourt"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-[#111111] hover:bg-black transition text-white px-4 py-2 rounded-xl font-semibold"
            >
              Get Directions <span className="text-[#FFC400]">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111]">How to Buy</h3>
        <ol className="mt-4 space-y-4 max-w-3xl">
          {[
            { t: 'Inquiry & Shortlist', d: 'Contact our sales team to request details and shortlist plots.' },
            { t: 'Inspection Booking', d: 'Book a site visit at a convenient time for verification.' },
            { t: 'Payment & Allocation', d: '50% deposit then spread balance within 3–6 months.' },
            { t: 'Documentation & Closing', d: 'Receive guided support through the documentation process and final allocation.' },
          ].map((s, idx) => (
            <li key={s.t} className="bg-white rounded-2xl p-4 shadow-sm border border-black/10 flex gap-3">
              <span className="h-8 w-8 rounded-full bg-[#FFC400] text-black font-extrabold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <div>
                <div className="font-semibold text-[#111111]">{s.t}</div>
                <div className="text-grayText text-sm mt-1">{s.d}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* What You Get + Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-bold text-[#111111]">What You Get</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• Receipt / payment confirmation</li>
              <li>• Letter of allocation</li>
              <li>• Survey Plan</li>
              <li>• Deed of Conveyance</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-bold text-[#111111]">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`beulah-${i}`}
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
            'Is the land verified?',
            'Can I pay instalment?',
            'Is inspection available?',
            'What documents are provided?',
            'Where exactly is it located?',
            'Is the price negotiable?',
            'How fast is allocation?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
              <div className="font-semibold text-[#111111]">{q}</div>
              <div className="text-grayText text-sm mt-2">
                We provide clear answers and guided support — reach out for current availability and terms.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA (match flyer colours)
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-3 border border-black/10">
          <a
            href="https://wa.me/2347012345678"
            className="bg-[#FFC400] text-black px-4 py-2 rounded-full font-extrabold"
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

// Export page
const BeulahLayoutPage: React.FC = () => (
  <>
    <BeulahLayout />
    <ContactBar />
  </>
);

export default BeulahLayoutPage;