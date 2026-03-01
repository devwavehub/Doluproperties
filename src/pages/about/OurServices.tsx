// import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  FileCheck2,
  Search,
  Handshake,
  ClipboardCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import heroImg from '../../assets/VILLA ALORA1.jpg';

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-bgLight">
      {/* HERO (yes, villa style) */}
      <section className="relative h-72 sm:h-96 overflow-hidden rounded-b-3xl">
        <img
          src={heroImg}
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center pt-10 sm:pt-16"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 text-white/90 px-4 py-2 text-sm font-semibold border border-white/15 backdrop-blur">
              What We Do
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white">Our Services</h1>
            <p className="mt-3 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Practical support for buyers, investors, and developers — designed to keep your property
              journey clear, verified, and professionally guided.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark">Premium Real Estate Support</h2>
              <p className="mt-2 text-grayText max-w-2xl leading-relaxed">
                We don’t just “sell land”. We help you choose right, verify properly, and proceed with clarity.
              </p>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="rounded-xl bg-dark text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition inline-flex items-center gap-2"
            >
              Talk to Us <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Property Sales & Listings',
                icon: Home,
                text:
                  'We match you with the right land or home options based on budget, location, and purpose (build, hold, move-in).',
              },
              {
                title: 'Inspection & Shortlisting',
                icon: Search,
                text:
                  'We help you compare options and guide inspections so you can decide based on facts — not guesswork.',
              },
              {
                title: 'Documentation Guidance',
                icon: FileCheck2,
                text:
                  'We explain the documentation process clearly, helping you understand what matters before you proceed.',
              },
              {
                title: 'Estate Development Support',
                icon: Building2,
                text:
                  'For clients considering structured estates, we highlight layout value, access, neighborhood growth, and long-term benefits.',
              },
              {
                title: 'Client Advisory',
                icon: Handshake,
                text:
                  'We advise buyers and investors with practical recommendations that align with your plan and timeline.',
              },
              {
                title: 'Transaction Support',
                icon: ClipboardCheck,
                text:
                  'We keep your process structured — from enquiry to closing — so you always know what’s next.',
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-[#B88F00]" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-grayText leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          {/* HOW IT WORKS STRIP */}
          <div className="mt-12 rounded-3xl bg-white border border-black/5 shadow-sm p-8 sm:p-10">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-dark">How It Works</h3>
              <p className="mt-2 text-grayText max-w-2xl mx-auto leading-relaxed">
                A simple process that keeps everything clear from the first message to final decision.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Tell Us Your Goal',
                  text: 'Buy & build, buy & hold, or move-in — plus budget and preferred location.',
                },
                {
                  step: '02',
                  title: 'We Recommend Options',
                  text: 'We shortlist the best fits and guide inspection steps so you compare properly.',
                },
                {
                  step: '03',
                  title: 'Proceed Confidently',
                  text: 'We guide next steps with clarity so you don’t get stuck or confused.',
                },
              ].map((x, idx) => (
                <div key={idx} className="rounded-2xl bg-bgLight border border-black/5 p-6">
                  <p className="text-sm font-extrabold text-[#B88F00]">{x.step}</p>
                  <h4 className="mt-2 text-lg font-bold text-dark">{x.title}</h4>
                  <p className="mt-2 text-sm text-grayText leading-relaxed">{x.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-bgLight border border-black/5 p-6">
              <p className="text-sm font-bold text-dark">What you get</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-grayText">
                {[
                  'Clear guidance from start to finish',
                  'Better decisions through structured shortlisting',
                  'Transparent communication (no confusion)',
                  'Professional support and coordination',
                ].map((x, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl bg-dark text-white p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-extrabold">Need recommendations based on your budget?</h3>
              <p className="mt-2 text-white/80 max-w-2xl leading-relaxed">
                Send us a message and we’ll suggest the best listings for your goal — and guide you on what to do next.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/properties')}
                className="rounded-xl bg-primary text-dark px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                View Listings
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="rounded-xl border border-white/20 bg-white/10 text-white px-6 py-3 text-sm font-semibold hover:bg-white/15 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurServices;