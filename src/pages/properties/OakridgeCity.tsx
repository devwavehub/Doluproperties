import React from 'react';
import { motion } from 'framer-motion';
import ContactBar from '../../components/ContactBar';
import oakridgeImg from '../../assets/OAKRIDGE CITY ESTATE.jpg';
import gallery from '../../gallery/oakridge-city';

// Oakridge City Estate landing page — premium real-estate landing
const OakridgeCity: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero: split layout (image right on desktop) */}
      <section className="container mx-auto px-4 py-12 bg-blue-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600">Oakridge City Estate</h1>
            <p className="text-grayText mt-2">Omagwa – Isiokpo — Plot size: 460SQM</p>
            {/* blue accent page */}

            {/* Pricing chip */}
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-blue-100 rounded-xl px-4 py-2 shadow-sm border border-blue-200">
                <div className="text-sm text-grayText">Price</div>
                <div className="font-bold text-blue-600">₦5,000,000</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">Book Inspection</a>
              <a href="https://wa.me/2347012345678" className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">Chat on WhatsApp</a>
              <a href="tel:+2347012345678" className="bg-blue-600 text-white px-4 py-2 rounded-xl">Call Now</a>
              <a href={oakridgeImg} target="_blank" rel="noreferrer" className="border border-gray-200 px-4 py-2 rounded-xl">Download Flyer</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <img src={oakridgeImg} alt="Oakridge City Estate" className="rounded-3xl shadow-xl border border-gray-100 max-w-full w-[520px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Estate Features Row */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Gate House', desc: 'Modern security entrance' },
            { title: 'Perimeter Fence', desc: 'Secure boundary' },
            { title: 'Well Designed Layout', desc: 'Maximum space utilization' },
            { title: 'Good Road Network', desc: 'Easy access throughout' },
            { title: 'Swimming Pool', desc: 'Leisure facility' },
            { title: 'Neighborhood Center', desc: 'Community hub' },
            { title: 'Individual Fence', desc: 'Plot privacy' },
            { title: 'Supermarket', desc: 'Shopping convenience' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{f.title}</div>
              <div className="text-grayText text-sm mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About This Estate */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-dark">About Oakridge City Estate</h2>
          <p className="text-grayText mt-3">Oakridge City Estate is a premium residential development in Omagwa – Isiokpo offering 460SQM plots in a fully developed and secured environment. The estate features modern infrastructure including a swimming pool, neighborhood center, supermarket, and well-maintained road networks. This is an ideal investment for families and business owners seeking a balanced community with excellent amenities and strong accessibility.</p>
        </div>
      </section>

      {/* Landmarks */}
      <section className="bg-bgLight py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-dark">Nearby Landmarks</h3>
            <ul className="mt-3 space-y-2 text-grayText">
              <li>• Omagwa Station Market</li>
              <li>• Omagwa Secondary School</li>
              <li>• Wigwe University</li>
              <li>• Port Harcourt International Airport</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-dark">Documentation</h3>
            <ul className="mt-3 space-y-2 text-grayText">
              <li>• Deed of Conveyance</li>
              <li>• Registered Survey Plan</li>
              <li>• Right of Allocation</li>
              <li>• Full verification support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Buy (timeline) */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-dark">How to Buy</h3>
        <ol className="mt-4 space-y-4">
          <li>
            <strong>1. Inquiry & Shortlist:</strong> Explore available plots and contact our sales team for details.
          </li>
          <li>
            <strong>2. Inspection Booking:</strong> Schedule a site visit to tour the estate and see the property firsthand.
          </li>
          <li>
            <strong>3. Verification & Allocation:</strong> We verify documents and prepare allocation upon payment agreement.
          </li>
          <li>
            <strong>4. Documentation & Closing:</strong> Complete the documentation process with guided support and receive final allocation.
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
              <li>• Allocation certificate</li>
              <li>• Registered survey plan and deed</li>
              <li>• Estate access and amenities rights</li>
              <li>• After-sales support</li>
            </ul>
          </div>

          {/* Gallery preview (small) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-dark">Gallery Preview</h4>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt={`oakridge-${i}`} className="rounded-lg object-cover w-full h-20" />
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
            'Is the estate fully developed?',
            'What payment plans are available?',
            'How secure is the estate?',
            'Are the documents complete and verified?',
            'Can I resell my plot?',
            'What are the access restrictions?',
            'Are utilities available?',
            'How far is it from the airport?'
          ].map((q) => (
            <div key={q} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-dark">{q}</div>
              <div className="text-grayText text-sm mt-2">Oakridge City Estate offers full security, complete documentation, and convenient amenities. Contact us for specific details on availability and terms.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-3">
          <a href="https://wa.me/2347012345678" className="bg-blue-600 text-white px-4 py-2 rounded-full">WhatsApp</a>
          <a href="tel:+2347012345678" className="bg-primary text-dark px-4 py-2 rounded-full">Call</a>
        </div>
      </div>
    </div>
  );
};

// Export page with contactbar footer
const OakridgeCityPage: React.FC = () => (
  <>
    <OakridgeCity />
    <ContactBar />
  </>
);

export default OakridgeCityPage;
