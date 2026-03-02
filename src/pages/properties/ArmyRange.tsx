import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/army-range';

// ✅ Flyer image (Army Range)
import armyRangeFlyer from '../../assets/Armyrange/Armyrange.png';

// Army Range Estate landing page — matches flyer style
const ArmyRange: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f2faf6] via-white to-white">
      {/* HERO */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* tiny tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold text-dark">
              <span className="h-2 w-2 rounded-full bg-[#F4C400]" />
              Buy & Build • Verified Opportunity
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-dark">
              Army Range <span className="text-[#F4C400]">Estate</span>
            </h1>

            <p className="mt-2 text-grayText">
              <span className="font-semibold text-dark">Igrwuta – Eneka</span> •{' '}
              <span className="font-semibold text-dark">1000 SQM</span> (2 Plots)
            </p>

            {/* Price + size */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-4">
                <p className="text-xs text-grayText font-semibold">Selling Price</p>
                <p className="text-2xl font-extrabold text-dark mt-1">₦15,000,000</p>
                <p className="text-xs text-grayText mt-1">1000sqm (2 Plots)</p>
              </div>

              <div className="rounded-2xl bg-[#F4C400]/10 border border-[#F4C400]/25 shadow-sm p-4">
                <p className="text-xs text-grayText font-semibold">Payment Plan</p>
                <p className="text-sm font-bold text-dark mt-1">50% Initial Deposit</p>
                <p className="text-xs text-grayText mt-1">Spread balance within 6 months</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#buy"
                className="bg-[#1f2d16] hover:bg-[#172011] transition text-white px-5 py-3 rounded-xl font-semibold"
              >
                Book Inspection
              </a>

              <a
                href="https://wa.me/2347012345678"
                className="bg-[#F4C400] hover:opacity-95 transition text-black px-5 py-3 rounded-xl font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+2347012345678"
                className="border border-black/10 bg-white hover:bg-black/5 transition px-5 py-3 rounded-xl font-semibold text-dark"
              >
                Call Now
              </a>

              <a
                href={armyRangeFlyer}
                target="_blank"
                rel="noreferrer"
                className="border border-black/10 bg-white hover:bg-black/5 transition px-5 py-3 rounded-xl font-semibold text-dark"
              >
                Download Flyer
              </a>
            </div>

            {/* quick blocks like flyer */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
                <div className="text-sm font-bold text-dark">Layout Benefits</div>
                <ul className="mt-3 space-y-2 text-sm text-grayText">
                  <li>• Top notch security</li>
                  <li>• Prime residents</li>
                  <li>• Internal roads and drainages</li>
                  <li>• 100% dry land</li>
                  <li>• Good road network</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
                <div className="text-sm font-bold text-dark">Landmarks</div>
                <ul className="mt-3 space-y-2 text-sm text-grayText">
                  <li>• Charles Dale School</li>
                  <li>• Nigerian Army Premises</li>
                  <li>• Igrwuta Market</li>
                </ul>
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
            <div className="w-full max-w-[560px]">
              <img
                src={armyRangeFlyer}
                alt="Army Range Estate Flyer"
                className="w-full rounded-3xl shadow-xl border border-black/5 bg-white object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUY SECTION ANCHOR */}
      <section id="buy" className="py-10 bg-[#fbfbfb] border-y border-black/5">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-dark">Payment Plan</h3>
            <p className="text-grayText mt-2">
              <span className="font-semibold text-dark">50% Initial Deposit</span> <br />
              Spread balance within <span className="font-semibold text-dark">6 months</span>.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-dark">Property Details</h3>
            <ul className="mt-3 space-y-2 text-sm text-grayText">
              <li>• Location: Igrwuta – Eneka</li>
              <li>• Size: 1000 SQM</li>
              <li>• Allocation: 2 Plots</li>
              <li>• Category: Buy & Build</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#F4C400]/10 border border-[#F4C400]/25 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-dark">Need Help Fast?</h3>
            <p className="text-sm text-grayText mt-2">We’ll guide you from inspection to closing.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/2347012345678"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1f2d16] text-white px-4 py-2 rounded-xl font-semibold"
              >
                WhatsApp
              </a>
              <a
                href="tel:+2347012345678"
                className="bg-white border border-black/10 px-4 py-2 rounded-xl font-semibold text-dark"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-dark">About Army Range Estate</h2>
          <p className="text-grayText mt-3">
            Army Range Estate is a premium Buy & Build opportunity in the growing Igrwuta – Eneka axis.
            It offers a substantial land size of <span className="font-semibold text-dark">1000SQM (2 plots)</span>,
            ideal for serious homeowners and investors. With a simple payment plan —{' '}
            <span className="font-semibold text-dark">50% initial deposit</span> and spread balance within{' '}
            <span className="font-semibold text-dark">6 months</span> — you can secure your plots with confidence.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET + GALLERY */}
      <section className="py-10 bg-bgLight">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
            <h4 className="font-bold text-dark">What You Get</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• Receipt / payment confirmation</li>
              <li>• Allocation details for 2 plots (1000SQM)</li>
              <li>• Documentation guidance</li>
              <li>• Full verification support</li>
              <li>• After-sales support</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
            <h4 className="font-bold text-dark">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`army-range-${i}`}
                  className="rounded-lg object-cover w-full h-20"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-dark">Frequently Asked Questions</h3>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'What is the land size?',
            'Is it 2 plots exactly?',
            'What is the payment plan?',
            'Is inspection available?',
            'What landmarks are nearby?',
            'Can I buy for investment?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-5 shadow-sm border border-black/5">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">
                Army Range Estate supports both homeowners and investors. Contact us for inspection scheduling,
                verification, and payment structure details.
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Export page with contactbar footer
const ArmyRangePage: React.FC = () => (
  <>
    <ArmyRange />
    <ContactBar />
  </>
);

export default ArmyRangePage;