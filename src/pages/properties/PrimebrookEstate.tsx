import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/primebrook-estate';

// ✅ Flyer image path you gave
import primebrookFlyer from '../../assets/primebook/primebook.jpg';
import primebrookland from '../../assets/primebook/primebookland.jpg';

// Primebrook Estate landing page — flyer-matching premium real-estate landing
const PrimebrookEstate: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#fff8e1] via-white to-[#f6f7f8]">
      {/* ✅ MINI HERO (NEW) */}
      <section className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
        {/* Background */}
        <img
          src={primebrookland}
          alt="Primebrook Estate"
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
              <span className="h-2 w-2 rounded-full bg-[#FFC400]" />
              Buy &amp; Build • Verified
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Welcome to <span className="text-[#FFC400]">Primebrook Estate</span>
            </h1>

            <p className="mt-2 text-white/85 text-sm sm:text-base">
              A premium Buy &amp; Build opportunity on Stadium Road — ideal for immediate development or strategic investment.
            </p>
          </div>
        </div>
      </section>

      {/* Hero section */}
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

            <div className="relative p-4 sm:p-6">
              {/* ✅ changed to h2 + “Details” so mini hero remains the main intro */}
              <h2 className="text-4xl sm:text-6xl font-extrabold leading-[1.05]">
                <span className="text-[#bdbdbd]">Primebrook</span>{' '}
                <span className="text-[#111111]">Estate</span>{' '}
                <span className="text-[#FFC400]">Details</span>
              </h2>

              <p className="mt-3 inline-flex items-center gap-2 font-extrabold text-[#111111] tracking-wide">
                <span className="h-2 w-2 rounded-full bg-[#FFC400]" />
                BUY AND BUILD
              </p>

              <p className="text-grayText mt-3">
                Stadium Road —{' '}
                <span className="font-semibold text-[#111111]">Premium Residential Development</span>
              </p>

              {/* Price + Payment plan (flyer vibe) */}
              <div className="flex flex-wrap items-stretch gap-3 mt-6">
                <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-black/10">
                  <div className="text-sm text-grayText">Selling Price</div>
                  <div className="font-extrabold text-[#111111] text-2xl">₦75,000,000</div>
                  <div className="text-xs text-grayText mt-1">Buy & Build</div>
                </div>

                <div className="bg-[#FFC400] rounded-2xl px-5 py-4 shadow-sm border border-[#FFC400]">
                  <div className="text-sm text-black/70 font-semibold">Payment Plan</div>
                  <div className="font-extrabold text-black mt-1">50% Initial Deposit</div>
                  <div className="text-sm text-black/80">Spread balance within 3–6 months</div>
                </div>
              </div>

              {/* CTA buttons (black + yellow like flyer) */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a className="bg-[#111111] hover:bg-black transition text-white px-4 py-2 rounded-xl font-semibold">
                  Book Inspection
                </a>

                <a
                  href="https://wa.me/2347032023029"
                  className="bg-[#FFC400] hover:bg-[#e6b000] transition text-black px-4 py-2 rounded-xl font-extrabold"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+2347032023029"
                  className="border border-black/20 text-[#111111] hover:bg-[#111111] hover:text-white transition px-4 py-2 rounded-xl font-semibold bg-white"
                >
                  Call Now
                </a>

                <a
                  href={primebrookFlyer}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#FFC400]/60 hover:border-[#FFC400] transition px-4 py-2 rounded-xl bg-white text-[#111111] font-semibold"
                >
                  Download Flyer
                </a>
              </div>

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
                <div className="aspect-[4/5] w-full">
                  <img
                    src={primebrookFlyer}
                    alt="Primebrook Estate Flyer"
                    className="h-full w-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-[#FFC400]/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estate Highlights */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Buy & Build', desc: 'Perfect for immediate development' },
            { title: 'Flexible Payment', desc: '50% deposit, spread 3–6 months' },
            { title: 'Verified Documents', desc: 'Transparent process & support' },
            { title: 'Strong Location', desc: 'Close to key landmarks & services' },
          ].map((h) => (
            <div
              key={h.title}
              className="bg-white rounded-2xl p-4 shadow-sm border border-black/10"
            >
              <div className="font-semibold text-[#111111]">{h.title}</div>
              <div className="text-grayText text-sm mt-1">{h.desc}</div>
              <div className="mt-3 h-[2px] w-10 bg-[#FFC400]" />
            </div>
          ))}
        </div>
      </section>

      {/* About Primebrook Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-black/10">
          <h2 className="text-2xl font-bold text-[#111111]">About Primebrook Estate</h2>
          <p className="text-grayText mt-3">
            Primebrook Estate is a premium Buy &amp; Build opportunity offering a solid foundation for
            long-term value. Designed for buyers who want to develop immediately or hold strategically,
            it combines strong accessibility with a guided documentation and allocation process.
          </p>
        </div>
      </section>

      {/* Development Features */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111] mb-6">Development Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-semibold text-[#111111] mb-3">What You Get</h4>
            <ul className="space-y-2 text-grayText">
              <li>• Deed of Conveyance</li>
              <li>• Survey Plan</li>
              <li>• Letter of Allocation</li>
              <li>• Receipt of Payment</li>
            </ul>
          </div>

          {/* Gallery preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-semibold text-[#111111] mb-3">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`primebrook-${i}`}
                  className="rounded-lg object-cover w-full h-20"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#111111] mb-6">How to Buy</h3>

          <ol className="max-w-3xl space-y-4">
            {[
              { t: 'Inquiry & Site Visit', d: 'Contact us and schedule a comprehensive site tour.' },
              { t: 'Payment Plan Agreement', d: 'Pay 50% initial deposit and agree on timeline (3–6 months).' },
              { t: 'Documentation', d: 'We process documentation with guided support.' },
              { t: 'Allocation & Closure', d: 'Receive allocation and complete ownership paperwork.' },
            ].map((s, idx) => (
              <li
                key={s.t}
                className="bg-white rounded-2xl p-4 shadow-sm border border-black/10 flex gap-3"
              >
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
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111]">Frequently Asked Questions</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Is this a Buy & Build opportunity?',
            'What payment plans are available?',
            'What documents will I get?',
            'Is inspection available?',
            'How soon is allocation done?',
            'Can I resell later?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
              <div className="font-semibold text-[#111111]">{q}</div>
              <div className="text-grayText text-sm mt-2">
                Primebrook Estate offers verified documentation and flexible payment terms. Contact us for current
                availability and exact steps.
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

// Export page with contactbar footer
const PrimebrookEstatePage: React.FC = () => (
  <>
    <PrimebrookEstate />
    <ContactBar />
  </>
);

export default PrimebrookEstatePage;