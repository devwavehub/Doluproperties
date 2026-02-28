import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import gallery from '../../gallery/olive-estate';

// Olive Estate landing page — premium real-estate landing
const OliveEstate: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-dark">Olive Estate</h1>
            <p className="text-grayText mt-2">Elele — Plot size: 460SQM</p>

            {/* Pricing chip */}
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-primary/10 rounded-xl px-4 py-2 shadow-sm border border-primary/20">
                <div className="text-sm text-grayText">Price</div>
                <div className="font-bold text-dark">₦1,500,000</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="bg-primary text-dark px-4 py-2 rounded-xl font-semibold">Book Inspection</a>
              <a href="https://wa.me/2347012345678" className="bg-white text-dark px-4 py-2 rounded-xl font-semibold">Chat on WhatsApp</a>
              <a href="tel:+2347012345678" className="border border-gray-200 px-4 py-2 rounded-xl">Call Now</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[520px] h-80 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-grayText text-lg">460 SQM</p>
                <p className="text-dark text-2xl font-bold">Olive Estate</p>
                <p className="text-primary font-semibold mt-2">Prime Location</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estate Highlights */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Prime Location', desc: 'Excellent accessibility' },
            { title: 'Good Layout', desc: 'Well-planned plots' },
            { title: 'Secure Area', desc: 'Safe neighborhood' },
            { title: 'Infrastructure', desc: 'Good road network' },
          ].map((h) => (
            <div key={h.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{h.title}</div>
              <div className="text-grayText text-sm mt-1">{h.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Olive Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-dark">About Olive Estate</h2>
          <p className="text-grayText mt-3">Olive Estate is a well-positioned residential development in Elele offering 460SQM plots in a prime location with excellent infrastructure and accessibility. The estate features well-planned layouts and a secure community environment. Whether you're looking for a family home or an investment property, Olive Estate provides the foundation for long-term value and growth.</p>
        </div>
      </section>

      {/* Why Invest Here */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-dark mb-6">Why Invest in Olive Estate?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-dark mb-3">Location Advantages</h4>
              <ul className="space-y-2 text-grayText text-sm">
                <li>✓ Accessible from major roads</li>
                <li>✓ Close to commercial hubs</li>
                <li>✓ Growing neighborhood</li>
                <li>✓ Good connectivity</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-dark mb-3">Investment Potential</h4>
              <ul className="space-y-2 text-grayText text-sm">
                <li>✓ Strong appreciation potential</li>
                <li>✓ Flexible payment options</li>
                <li>✓ Buy & Build or Hold strategy</li>
                <li>✓ Excellent resale value</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estate Plan & Features */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark mb-6">Estate Plan & Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-dark mb-3">Available Services</h4>
            <ul className="space-y-2 text-grayText">
              <li>• Clear land title</li>
              <li>• Registered allocation</li>
              <li>• Good road access</li>
              <li>• Utility connections available</li>
              <li>• Customizable plot sizes</li>
            </ul>
          </div>

          {/* Gallery preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-dark mb-3">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt={`olive-${i}`} className="rounded-lg object-cover w-full h-20" />
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
                <div className="font-semibold text-dark">Inquiry & Interest</div>
                <div className="text-grayText text-sm">Contact our team and review available plots</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">2</span>
              <div>
                <div className="font-semibold text-dark">Site Inspection</div>
                <div className="text-grayText text-sm">Schedule and complete your property viewing</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">3</span>
              <div>
                <div className="font-semibold text-dark">Documentation & Payment</div>
                <div className="text-grayText text-sm">Sign agreements and initiate payment process</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-dark font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">4</span>
              <div>
                <div className="font-semibold text-dark">Allocation & Handover</div>
                <div className="text-grayText text-sm">Receive allocation certificate and full support</div>
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
            'What is the plot size?',
            'Are flexible payment plans available?',
            'How secure is the property?',
            'What documents will I receive?',
            'Can I buy for investment?',
            'Is inspection available?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">Olive Estate is designed for flexibility. Whether buying for personal use or investment, we support your journey with clear documentation and professional guidance.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-3">
          <a href="https://wa.me/2347012345678" className="bg-green-500 text-white px-4 py-2 rounded-full">WhatsApp</a>
          <a href="tel:+2347012345678" className="bg-primary text-dark px-4 py-2 rounded-full">Call</a>
        </div>
      </div>
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