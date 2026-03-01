import React from 'react';
import { motion } from 'framer-motion';
// import ContactBar from '../../components/ContactBar';
import beulahImg from '../../assets/Beulah layout.jpg';
import gallery from '../../gallery/beulah-layout';

// Beulah Layout landing page — premium real-estate landing
const BeulahLayout: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero: split layout (image right on desktop) */}
      <section className="container mx-auto px-4 py-12 bg-amber-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-600">Beulah Layout</h1>
            <p className="text-grayText mt-2">Abara Etche — Plot size: 460SQM</p>

            {/* Pricing chips */}
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-bgLight rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                <div className="text-sm text-grayText">Promo Price</div>
                <div className="font-bold text-dark">₦1.3M</div>
              </div>

              <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                <div className="text-sm text-grayText">Actual Price</div>
                <div className="font-semibold text-dark">₦1.5M</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="bg-primary text-dark px-4 py-2 rounded-xl font-semibold">Book Inspection</a>
              <a href="https://wa.me/2347012345678" className="bg-white text-dark px-4 py-2 rounded-xl font-semibold">Chat on WhatsApp</a>
              <a href="tel:+2347012345678" className="border border-gray-200 px-4 py-2 rounded-xl">Call Now</a>
              <a href={beulahImg} target="_blank" rel="noreferrer" className="border border-gray-200 px-4 py-2 rounded-xl">Download Flyer</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <img src={beulahImg} alt="Beulah layout flyer" className="rounded-3xl shadow-xl border border-gray-100 max-w-full w-[520px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Quick Benefits Row */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Good Road Network', desc: 'Easy access and main-road frontage' },
            { title: 'Well Designed Layout', desc: 'Plots planned for comfort & growth' },
            { title: 'Neighborhood Center', desc: 'Close to amenities and markets' },
            { title: 'Secure Documentation', desc: 'Transparent process and guided support' },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{b.title}</div>
              <div className="text-grayText text-sm mt-1">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About This Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-dark">About Beulah Layout</h2>
          <p className="text-grayText mt-3">Beulah Layout is a thoughtfully planned estate in Abara Etche offering 460SQM plots ideal for both family homes and investment. The location offers strong accessibility, close proximity to institutions and markets, and a layout designed for comfort and long-term value. Suitable for Buy & Build or Buy & Hold strategies.</p>
        </div>
      </section>

      {/* Landmarks */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-dark">Nearby Landmarks</h3>
            <ul className="mt-3 space-y-2 text-grayText">
              <li>• Stella Maris University</li>
              <li>• Tecel Polytechnic</li>
              <li>• Rivers State University</li>
              <li>• Faculty of Agriculture Extension</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-dark">Inspection Location</h3>
            <p className="text-grayText mt-2">Meet at our office: No. 19B Ada George Road, Opposite Father\'s House Church, Port Harcourt.</p>
            <a href="https://www.google.com/maps?q=No.+19B+Ada+George+Road+Port+Harcourt" target="_blank" rel="noreferrer" className="mt-3 inline-block bg-primary text-dark px-4 py-2 rounded-xl">Get Directions</a>
          </div>
        </div>
      </section>

      {/* How to Buy (timeline) */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark">How to Buy</h3>
        <ol className="mt-4 space-y-4">
          <li>
            <strong>1. Inquiry & Shortlist:</strong> Contact our sales team to request details and shortlist plots.
          </li>
          <li>
            <strong>2. Inspection Booking:</strong> Book a site visit at a convenient time for verification.
          </li>
          <li>
            <strong>3. Verification & Allocation:</strong> We verify documents and allocate plot upon payment terms agreement.
          </li>
          <li>
            <strong>4. Documentation & Closing:</strong> Receive guided support through the documentation process and final allocation.
          </li>
        </ol>
      </section>

      {/* What You Get */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-dark">What You Get</h4>
            <ul className="mt-3 text-grayText space-y-2">
              <li>• Receipt / payment confirmation</li>
              <li>• Allocation details (where applicable)</li>
              <li>• Survey / deed support and documentation guidance</li>
              <li>• After-sales support and handover assistance</li>
            </ul>
          </div>

          {/* Gallery preview (small) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-dark">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt={`beulah-${i}`} className="rounded-lg object-cover w-full h-20" />
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
            'Is the land verified?',
            'Can I pay instalment? Yes — flexible plans are available.',
            'Is inspection available?',
            'What documents are provided?',
            'Where exactly is it located?',
            'Is the price negotiable?',
            'How fast is allocation?'
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">We provide clear answers and guided support for each question — contact us for full verification and plan details.</div>
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
const BeulahLayoutPage: React.FC = () => (
  <>
    <BeulahLayout />
    {/* <ContactBar /> */}
  </>
);

export default BeulahLayoutPage;