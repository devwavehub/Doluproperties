import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/army-range';

// Army Range Estate landing page — premium real-estate landing
const ArmyRange: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="container mx-auto px-4 py-12 bg-lime-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-dark">Armyrange Estate</h1>
            <p className="text-grayText mt-2">Igrwuta – Eneka — 1000 SQM (2 Plots)</p>

            {/* Pricing chip */}
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-primary/10 rounded-xl px-4 py-2 shadow-sm border border-primary/20">
                <div className="text-sm text-grayText">Investment Price</div>
                <div className="font-bold text-dark">₦15,000,000</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="bg-lime-600 text-white px-4 py-2 rounded-xl font-semibold">Book Inspection</a>
              <a href="https://wa.me/2347012345678" className="bg-lime-600 text-white px-4 py-2 rounded-xl font-semibold">Chat on WhatsApp</a>
              <a href="tel:+2347012345678" className="bg-lime-600 text-white px-4 py-2 rounded-xl">Call Now</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[520px] h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-grayText text-lg">1000 SQM</p>
                <p className="text-dark text-2xl font-bold">2 Plots</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Features Row */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-dark mb-6">Payment & Property Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Initial Deposit', desc: '50% required to secure' },
              { title: 'Balance Payment', desc: 'Spread over 6 months' },
              { title: 'Property Type', desc: 'Residential Estate Development' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="font-semibold text-dark">{f.title}</div>
                <div className="text-grayText text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-dark">About Armyrange Estate</h2>
          <p className="text-grayText mt-3">Armyrange Estate represents a premium residential development opportunity in the fast-growing Igrwuta – Eneka area. This attractive 1000SQM (2-plot) property is ideal for investors and homeowners seeking a substantial residential investment. The flexible payment plan makes this accessible while maintaining strong return potential.</p>
        </div>
      </section>

      {/* Payment Plan */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-dark mb-6">Simple Payment Plan</h3>
          <ol className="space-y-3 max-w-2xl">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">1</span>
              <div>
                <div className="font-semibold text-dark">50% Initial Deposit</div>
                <div className="text-grayText text-sm">Secure your reservation immediately</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">2</span>
              <div>
                <div className="font-semibold text-dark">Remaining Balance</div>
                <div className="text-grayText text-sm">Pay in installments over 6 months</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">3</span>
              <div>
                <div className="font-semibold text-dark">Flexible Terms</div>
                <div className="text-grayText text-sm">Work with us on a timeline that suits you</div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark">Why Armyrange Estate?</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Substantial land size (1000SQM)',
            'Growing residential area',
            'Flexible payment plan',
            'Strong investment potential',
            'Good accessibility',
            'Professional development'
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="text-primary text-xl mt-1">✓</div>
              <div className="text-grayText">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-dark">What You Get</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• Receipt / payment confirmation</li>
              <li>• Allocation for 2 plots (1000SQM)</li>
              <li>• Documentation guidance</li>
              <li>• Full verification support</li>
              <li>• After-sales support</li>
            </ul>
          </div>

          {/* Gallery preview (small) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-dark">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt={`army-range-${i}`} className="rounded-lg object-cover w-full h-20" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark">Frequently Asked Questions</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Is the payment plan flexible?',
            'What is the total land size?',
            'Can I adjust the payment schedule?',
            'Are documents complete?',
            'What is the investment timeline?',
            'Can I resell the plots?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">Yes, flexibility is key. We work with serious investors to create workable payment arrangements. Contact us for detailed options.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-3">
          <a href="https://wa.me/2347012345678" className="bg-lime-600 text-white px-4 py-2 rounded-full">WhatsApp</a>
          <a href="tel:+2347012345678" className="bg-primary text-dark px-4 py-2 rounded-full">Call</a>
        </div>
      </div>
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
