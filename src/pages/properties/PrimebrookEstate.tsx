import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/primebrook-estate';

// Primebrook Estate landing page — premium real-estate landing
const PrimebrookEstate: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="container mx-auto px-4 py-12 bg-teal-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-600">Primebrook Estate</h1>
            <p className="text-grayText mt-2">Stadium Road — Premium Residential Development</p>

            {/* Pricing chip */}
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-primary/10 rounded-xl px-4 py-2 shadow-sm border border-primary/20">
                <div className="text-sm text-grayText">Investment Price</div>
                <div className="font-bold text-dark">₦75,000,000</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="bg-teal-600 text-white px-4 py-2 rounded-xl font-semibold">Book Inspection</a>
              <a href="https://wa.me/2347012345678" className="bg-teal-600 text-white px-4 py-2 rounded-xl font-semibold">Chat on WhatsApp</a>
              <a href="tel:+2347012345678" className="bg-teal-600 text-white px-4 py-2 rounded-xl">Call Now</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[520px] h-80 bg-gradient-to-br from-primary to-primary/40 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-lg font-semibold">Primebrook Estate</p>
                <p className="text-white/90 text-2xl font-bold mt-2">Stadium Road</p>
                <p className="text-white/80 mt-2">Premium Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estate Highlights */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Premium Location', desc: 'Stadium Road prime area' },
            { title: 'Modern Infrastructure', desc: 'Well-planned layout' },
            { title: 'Security & Gating', desc: 'Gated community' },
            { title: 'High ROI Potential', desc: 'Strong investment value' },
          ].map((h) => (
            <div key={h.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{h.title}</div>
              <div className="text-grayText text-sm mt-1">{h.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Primebrook Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-dark">About Primebrook Estate</h2>
          <p className="text-grayText mt-3">Primebrook Estate is a premium residential development located on Stadium Road, one of Port Harcourt's most prestigious addresses. The estate combines modern infrastructure with sophisticated design, offering an ideal investment opportunity for discerning buyers. With planned amenities and a secure gated environment, Primebrook Estate represents the pinnacle of residential real estate investment in the area.</p>
        </div>
      </section>

      {/* Why Invest Here */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-dark mb-6">Why Invest in Primebrook Estate?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-dark mb-3">Strategic Location</h4>
              <ul className="space-y-2 text-grayText text-sm">
                <li>✓ Premium Stadium Road address</li>
                <li>✓ Central to business district</li>
                <li>✓ High visibility & accessibility</li>
                <li>✓ Perfect for mixed-use development</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-dark mb-3">Investment Value</h4>
              <ul className="space-y-2 text-grayText text-sm">
                <li>✓ Strong appreciation potential</li>
                <li>✓ Premium pricing reflects location</li>
                <li>✓ Excellent rental prospects</li>
                <li>✓ Long-term wealth building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Features */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark mb-6">Development Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-dark mb-3">Community Amenities</h4>
            <ul className="space-y-2 text-grayText">
              <li>• Gated security with 24/7 patrol</li>
              <li>• Modern road infrastructure</li>
              <li>• Aesthetic landscaping</li>
              <li>• Community center (planned)</li>
              <li>• Backup power systems</li>
            </ul>
          </div>

          {/* Gallery preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-dark mb-3">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt={`primebrook-${i}`} className="rounded-lg object-cover w-full h-20" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-dark mb-6">How to Buy</h3>
          <ol className="max-w-2xl space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">1</span>
              <div>
                <div className="font-semibold text-dark">Inquiry & Site Visit</div>
                <div className="text-grayText text-sm">Contact us and schedule a comprehensive site tour</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">2</span>
              <div>
                <div className="font-semibold text-dark">Investment Assessment</div>
                <div className="text-grayText text-sm">Review terms and discuss payment options</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">3</span>
              <div>
                <div className="font-semibold text-dark">Documentation & Agreement</div>
                <div className="text-grayText text-sm">Sign purchase agreement with complete documentation</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">4</span>
              <div>
                <div className="font-semibold text-dark">Allocation & Closure</div>
                <div className="text-grayText text-sm">Receive allocation certificate and full ownership documentation</div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark">Frequently Asked Questions</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Is this a good investment?',
            'What payment plans are available?',
            'How secure is the estate?',
            'Are all documents ready?',
            'Can I resell my investment?',
            'What is the timeline for allocation?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">Primebrook Estate offers a premium investment opportunity with verified documentation and flexible terms. Our team provides comprehensive guidance throughout the investment process.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-3">
          <a href="https://wa.me/2347012345678" className="bg-teal-600 text-white px-4 py-2 rounded-full">WhatsApp</a>
          <a href="tel:+2347012345678" className="bg-primary text-dark px-4 py-2 rounded-full">Call</a>
        </div>
      </div>
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
