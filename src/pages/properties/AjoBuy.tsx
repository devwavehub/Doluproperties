import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';

// ✅ (You will adjust these paths)
import ajoBuyFlyer from '../../assets/AjoBuy/AjoBuy.png';
import ajoBuyLand from '../../assets/AjoBuy/ajobuy-land.jpg';

// ✅ (Create this gallery folder when ready)
import gallery from '../../gallery/ajo-buy';

// Ajo Buy landing page — flyer-matching premium offer page (yellow theme)
const AjoBuy: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#fff7db] via-white to-[#fffdf5]">
      {/* ✅ MINI HERO */}
      <section className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
        {/* Background */}
        <img
          src={ajoBuyLand}
          alt="Ajo Buy"
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
              <span className="h-2 w-2 rounded-full bg-[#F4C400]" />
              Pay Small Small • Verified Offer
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Welcome to <span className="text-[#F4C400]">Ajo Buy</span>
            </h1>

            <p className="mt-2 text-white/85 text-sm sm:text-base">
              Say goodbye to large upfront payments — own a plot of land with a simple daily contribution plan.
            </p>
          </div>
        </div>
      </section>

      {/* HERO / DETAILS */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* premium card backdrop */}
            <div className="absolute -inset-4 rounded-3xl bg-white/80 backdrop-blur-md border border-black/10 shadow-sm" />

            <div className="relative p-4 sm:p-6">
              {/* title */}
              <h2 className="text-4xl sm:text-6xl font-extrabold leading-[1.05] text-[#111111]">
                Ajo <span className="text-[#F4C400]">Buy</span> <span className="text-[#111111]">Details</span>
              </h2>

              <p className="mt-3 text-grayText leading-relaxed">
                Say goodbye to large upfront payments and say hello to our <span className="font-semibold text-[#111111]">pay small small</span> package.
              </p>

              {/* Main Offer (from flyer) */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-black/10">
                  <div className="text-sm text-grayText">Contribution Plan</div>
                  <div className="font-extrabold text-[#111111] text-2xl mt-1">₦4,000</div>
                  <div className="text-xs text-grayText mt-1">Daily for 400 days</div>
                </div>

                <div className="bg-[#F4C400]/15 rounded-2xl px-5 py-4 shadow-sm border border-[#F4C400]/40">
                  <div className="text-sm font-semibold text-[#111111]">You Get</div>
                  <div className="font-extrabold text-[#111111] mt-1">A Plot of Land</div>
                  <div className="text-xs text-grayText mt-1">T &amp; C apply</div>
                </div>
              </div>

              {/* Documentation (from flyer) */}
              <div className="mt-6 rounded-2xl bg-white border border-black/10 shadow-sm p-5">
                <div className="text-sm font-bold text-[#111111]">Documentation</div>
                <ul className="mt-3 space-y-2 text-sm text-grayText">
                  <li>• Free survey plan</li>
                  <li>• Letter of allocation</li>
                  <li>• Deed of conveyance</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#buy"
                  className="bg-[#111111] hover:bg-black transition text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Get Started
                </a>

                <a
                  href="https://wa.me/2347032023029"
                  className="bg-[#F4C400] hover:opacity-95 transition text-black px-5 py-3 rounded-xl font-extrabold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+2347032023029"
                  className="border border-black/15 bg-white hover:bg-black/5 transition px-5 py-3 rounded-xl font-semibold text-[#111111]"
                >
                  Call Now
                </a>

                <a
                  href={ajoBuyFlyer}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#F4C400]/50 hover:border-[#F4C400] transition px-5 py-3 rounded-xl bg-white text-[#111111] font-semibold"
                >
                  Download Flyer
                </a>
              </div>

              {/* contact + office */}
              <div className="mt-5 text-sm text-grayText">
                Call or text: <span className="font-semibold text-[#111111]">07032023029</span>,{' '}
                <span className="font-semibold text-[#111111]">08148281475</span>
                <div className="mt-1">
                  Office: No 19B Ada George Road, Opposite Father&apos;s House Church, Port Harcourt, Rivers State.
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT (Flyer image) */}
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
                    src={ajoBuyFlyer}
                    alt="Ajo Buy Flyer"
                    className="h-full w-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-[#F4C400]/25" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Low Entry', desc: 'Pay small small daily' },
            { title: 'Clear Process', desc: 'Structured plan for ownership' },
            { title: 'Documents Included', desc: 'Survey, allocation & deed' },
            { title: 'Support Provided', desc: 'Guidance from start to finish' },
          ].map((h) => (
            <div key={h.title} className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
              <div className="font-semibold text-[#111111]">{h.title}</div>
              <div className="text-grayText text-sm mt-1">{h.desc}</div>
              <div className="mt-3 h-[2px] w-10 bg-[#F4C400]" />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-black/10">
          <h2 className="text-2xl font-bold text-[#111111]">About Ajo Buy</h2>
          <p className="text-grayText mt-3 leading-relaxed">
            Ajo Buy is a flexible land ownership plan created for people who want to own property without the pressure
            of paying a large sum at once. With a daily plan of <span className="font-semibold text-[#111111]">₦4,000</span> for{' '}
            <span className="font-semibold text-[#111111]">400 days</span>, you can work towards owning a plot of land with a clear,
            guided structure and documentation support. <span className="font-semibold text-[#111111]">T &amp; C apply</span>.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="buy" className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#111111] mb-6">How It Works</h3>

          <ol className="max-w-3xl space-y-4">
            {[
              { title: 'Register & Get Started', desc: 'Contact our team and confirm your plan onboarding.' },
              { title: 'Pay Daily', desc: 'Pay ₦4,000 daily consistently for 400 days (T & C apply).' },
              { title: 'Track & Confirm', desc: 'We help you stay on track with your payment progress.' },
              { title: 'Allocation & Documentation', desc: 'Receive allocation and process your documentation (survey, allocation, deed).' },
            ].map((step, idx) => (
              <li
                key={step.title}
                className="bg-white rounded-2xl p-4 shadow-sm border border-black/10 flex gap-3"
              >
                <span className="bg-[#F4C400] text-black font-extrabold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-semibold text-[#111111]">{step.title}</div>
                  <div className="text-grayText text-sm mt-1">{step.desc}</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://wa.me/2347032023029"
              className="bg-[#111111] text-white px-5 py-3 rounded-xl font-semibold hover:bg-black transition"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+2348148281475"
              className="bg-white border border-black/15 text-[#111111] px-5 py-3 rounded-xl font-semibold hover:bg-black/5 transition"
            >
              Call 08148281475
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET + GALLERY */}
      <section className="py-10 bg-bgLight">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-bold text-[#111111]">What You Get</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• A structured contribution plan (₦4k daily)</li>
              <li>• Plot allocation support</li>
              <li>• Free survey plan</li>
              <li>• Letter of allocation</li>
              <li>• Deed of conveyance</li>
              <li>• Guidance throughout the process</li>
            </ul>
            <p className="mt-4 text-xs text-grayText">
              Note: <span className="font-semibold text-[#111111]">T &amp; C apply</span>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/10">
            <h4 className="font-bold text-[#111111]">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`ajo-buy-${i}`}
                  className="rounded-lg object-cover w-full h-20"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-grayText">
              (You can update gallery images later — this is just the structure.)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#111111]">Frequently Asked Questions</h3>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'How much do I pay daily?',
            'How many days is the plan?',
            'What do I get at the end?',
            'Do I get documentation?',
            'Can I talk to someone first?',
            'Do terms & conditions apply?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-black/10">
              <div className="font-semibold text-[#111111]">{q}</div>
              <div className="text-grayText text-sm mt-2">
                Ajo Buy is structured as ₦4,000 daily for 400 days and comes with documentation support
                (survey plan, allocation, deed). Reach out for the full terms and onboarding steps.
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Export page with contactbar footer
const AjoBuyPage: React.FC = () => (
  <>
    <AjoBuy />
    <ContactBar />
  </>
);

export default AjoBuyPage;