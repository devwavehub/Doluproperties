import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/villa-alora';

// ✅ Use the NEW original flyer image (Villa Alora)
import villaFlyer from '../../assets/VILLAALORA/VILLA ALORA3.jpeg';

// Villa Alora landing page — matches flyer style (blue/clean/premium)
const VillaAlora: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f7fbff] via-white to-white">
      {/* HERO */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b5cff]/10 border border-[#0b5cff]/15 px-4 py-2 text-xs font-semibold text-[#0b5cff]">
              <span className="h-2 w-2 rounded-full bg-[#0b5cff]" />
              Buy & Move In • Premium Apartments
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-dark">
              Villa <span className="text-[#0b5cff]">Alora</span>
            </h1>

            <p className="mt-2 text-grayText">
              <span className="font-semibold text-dark">Mini-Orlu (Ada-George)</span> •{' '}
              <span className="font-semibold text-dark">10 units of 4 Bedroom Terrace Duplexes</span>
            </p>

            {/* PRICING (from flyer) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-4">
                <p className="text-xs text-grayText font-semibold">Promo Price</p>
                <p className="text-sm font-bold text-dark mt-1">Off Plan</p>
                <p className="text-xl font-extrabold text-dark mt-1">₦120,000,000</p>
              </div>

              <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-4">
                <p className="text-xs text-grayText font-semibold">Promo Price</p>
                <p className="text-sm font-bold text-dark mt-1">Shell Unit</p>
                <p className="text-xl font-extrabold text-dark mt-1">₦90,000,000</p>
              </div>

              <div className="rounded-2xl bg-[#0b5cff]/10 border border-[#0b5cff]/20 shadow-sm p-4">
                <p className="text-xs text-grayText font-semibold">Actual Price</p>
                <p className="text-xl font-extrabold text-[#0b5cff] mt-1">₦150,000,000</p>
                <p className="text-xs text-grayText mt-1">Per unit</p>
              </div>
            </div>

            {/* DOCUMENTATION + PAYMENT (from flyer) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-5">
                <div className="text-sm font-bold text-dark">Documentation</div>
                <ul className="mt-3 space-y-2 text-sm text-grayText">
                  <li>• Deed of conveyance</li>
                  <li>• Survey Plan</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-5">
                <div className="text-sm font-bold text-dark">Payment Plan</div>
                <p className="mt-3 text-sm text-grayText leading-relaxed">
                  Make <span className="font-semibold text-dark">₦25,000,000</span> initial deposit and spread the
                  balance within <span className="font-semibold text-dark">6 – 12 months</span>.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#buy"
                className="bg-[#0b5cff] hover:opacity-95 transition text-white px-5 py-3 rounded-xl font-semibold"
              >
                Book Viewing
              </a>

              <a
                href="https://wa.me/2347012345678"
                target="_blank"
                rel="noreferrer"
                className="bg-black hover:bg-black/90 transition text-white px-5 py-3 rounded-xl font-semibold"
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
                href={villaFlyer}
                target="_blank"
                rel="noreferrer"
                className="border border-black/10 bg-white hover:bg-black/5 transition px-5 py-3 rounded-xl font-semibold text-dark"
              >
                Download Flyer
              </a>
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
                src={villaFlyer}
                alt="Villa Alora Flyer"
                className="w-full rounded-3xl shadow-xl border border-black/5 bg-white object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUY / DETAILS STRIP */}
      <section id="buy" className="py-10 bg-[#fbfbfb] border-y border-black/5">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-dark">Location</h3>
            <p className="text-grayText mt-2">
              Mini-Orlu, Ada-George • Port Harcourt
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-dark">Offer</h3>
            <ul className="mt-3 space-y-2 text-sm text-grayText">
              <li>• Off Plan: ₦120,000,000</li>
              <li>• Shell Unit: ₦90,000,000</li>
              <li>• Actual Price: ₦150,000,000</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#0b5cff]/10 border border-[#0b5cff]/20 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-dark">Payment Plan</h3>
            <p className="text-sm text-grayText mt-2">
              <span className="font-semibold text-dark">₦25,000,000</span> initial deposit • spread balance within{' '}
              <span className="font-semibold text-dark">6 – 12 months</span>.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/2347012345678"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0b5cff] text-white px-4 py-2 rounded-xl font-semibold"
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
          <h2 className="text-2xl font-bold text-dark">About Villa Alora</h2>
          <p className="text-grayText mt-3">
            Villa Alora is a premium residential development in Mini-Orlu (Ada-George), now selling as apartments.
            It features <span className="font-semibold text-dark">10 units of 4-Bedroom Terrace Duplexes</span> with
            flexible purchase options (Off-Plan / Shell Unit) and structured payment plan to support buyers.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET + GALLERY */}
      <section className="py-10 bg-bgLight">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
            <h4 className="font-bold text-dark">What You Get</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• Deed of conveyance</li>
              <li>• Survey Plan</li>
              <li>• Professional guidance from inquiry to closing</li>
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
                  alt={`villa-alora-${i}`}
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
            'Is Villa Alora selling as apartments?',
            'What is the initial deposit?',
            'How long is the payment spread?',
            'What documents are included?',
            'What are the promo prices?',
            'Can I schedule a viewing?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-5 shadow-sm border border-black/5">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">
                Villa Alora comes with clear documentation and a structured payment plan. Contact us to get full
                details and book inspection/viewing.
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Export page with contactbar footer
const VillaAloraPage: React.FC = () => (
  <>
    <VillaAlora />
    <ContactBar />
  </>
);

export default VillaAloraPage;