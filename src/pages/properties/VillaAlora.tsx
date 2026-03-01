import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import villaImg from '../../assets/VILLA ALORA2.jpg';
import gallery from '../../gallery/villa-alora';

// Villa Alora landing page — premium residential complex
const VillaAlora: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="container mx-auto px-4 py-12 bg-purple-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-600">Villa Alora</h1>
            <p className="text-grayText mt-2">Mini Orlu — 4 Bedroom Terrace Duplex</p>

            {/* Pricing chips */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
              <div className="bg-primary/10 rounded-xl px-4 py-2 shadow-sm border border-primary/20">
                <div className="text-sm text-grayText">Shell Unit</div>
                <div className="font-bold text-dark">₦90,000,000</div>
              </div>
              <div className="bg-primary rounded-xl px-4 py-2 shadow-sm border border-primary">
                <div className="text-sm text-white/80">Finished Unit</div>
                <div className="font-bold text-white">₦120,000,000</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold">Book Viewing</a>
              <a href="https://wa.me/2347012345678" className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold">Chat on WhatsApp</a>
              <a href="tel:+2347012345678" className="bg-purple-600 text-white px-4 py-2 rounded-xl">Call Now</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <img src={villaImg} alt="Villa Alora complex" className="rounded-3xl shadow-xl border border-gray-100 max-w-full w-[520px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Unit Features */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-dark mb-6">Unit Features & Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: '4 Bedrooms', desc: 'Spacious master and guest rooms' },
              { title: 'Modern Design', desc: 'Contemporary architecture' },
              { title: 'Full Facilities', desc: 'Complete amenities included' },
              { title: 'Premium Location', desc: 'Accessible area' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="font-semibold text-dark">{f.title}</div>
                <div className="text-grayText text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Villa Alora */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-dark">About Villa Alora</h2>
          <p className="text-grayText mt-3">Villa Alora is a premium residential development in Mini Orlu featuring stunning 4-bedroom terrace duplexes. Each unit combines modern design with functional living spaces, ideal for families seeking comfort and style. Choose between a shell unit for custom finishing, or a fully finished unit for immediate occupation.</p>
        </div>
      </section>

      {/* Why Choose Villa Alora */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-dark mb-6">Why Choose Villa Alora?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Architectural Excellence', desc: 'Designed for modern living with premium finishes available' },
              { title: 'Prime Location', desc: 'Accessible area with good infrastructure' },
              { title: 'Investment Value', desc: 'Strong resale and rental potential' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="font-semibold text-dark mb-2">{item.title}</div>
                <div className="text-grayText text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Options */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark mb-6">Choose Your Option</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-gray-100 p-6 hover:border-primary transition-colors">
            <h4 className="font-bold text-dark text-lg">Shell Unit</h4>
            <p className="text-primary font-bold text-2xl mt-2">₦90,000,000</p>
            <p className="text-grayText text-sm mt-3">Unfinished interior — customize to your specifications</p>
            <ul className="mt-4 space-y-2 text-grayText text-sm">
              <li>✓ Structural completion</li>
              <li>✓ Electrical wiring</li>
              <li>✓ Plumbing systems</li>
              <li>✓ Flooring base</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-primary p-6 bg-primary/5">
            <h4 className="font-bold text-dark text-lg">Finished Unit</h4>
            <p className="text-primary font-bold text-2xl mt-2">₦120,000,000</p>
            <p className="text-grayText text-sm mt-3">Fully finished and ready for immediate occupation</p>
            <ul className="mt-4 space-y-2 text-grayText text-sm">
              <li>✓ Complete interior finishing</li>
              <li>✓ Premium paint & fixtures</li>
              <li>✓ Fitted kitchen & bathrooms</li>
              <li>✓ Ready to move in</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-dark">What's Included</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• Deed of ownership</li>
              <li>• Completion documents</li>
              <li>• Warranty & guarantees</li>
              <li>• After-sales support</li>
              <li>• Handover assistance</li>
            </ul>
          </div>

          {/* Gallery preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-dark">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt={`villa-alora-${i}`} className="rounded-lg object-cover w-full h-20" />
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
            'What is the difference between shell and finished?',
            'Can I customize the interior?',
            'What is the payment plan?',
            'When can I move in?',
            'Are there financing options?',
            'What documents will I receive?',
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">Villa Alora provides flexible options and complete documentation. Contact us for comprehensive details on your specific needs.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-3">
          <a href="https://wa.me/2347012345678" className="bg-purple-600 text-white px-4 py-2 rounded-full">WhatsApp</a>
          <a href="tel:+2347012345678" className="bg-primary text-dark px-4 py-2 rounded-full">Call</a>
        </div>
      </div>
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
