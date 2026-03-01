// import React from 'react';
import { motion } from 'framer-motion';
import { agents } from '../../data/agents';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ShieldCheck, Users, Briefcase } from 'lucide-react';

import heroImg from '../../assets/VILLA ALORA1.jpg';

const OurTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* HERO (premium like Gallery/Contact) */}
      <section className="relative h-72 sm:h-96 overflow-hidden rounded-b-2xl">
        <img src={heroImg} alt="Our Team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full pt-10 sm:pt-16"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-2 text-sm font-medium border border-white/15 backdrop-blur">
              <Users className="h-4 w-4 text-white" />
              Meet The People Behind Dolu Properties
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white">Our Team</h1>

            <p className="mt-3 text-white/90 max-w-3xl mx-auto leading-relaxed">
              A focused team of professionals committed to verified listings, transparent guidance,
              and helping you make confident property decisions in Port Harcourt and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-bgLight">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14"
        >
          {/* Value strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                title: 'Verification First',
                text: 'We prioritize documentation checks and clarity before any commitment.',
                icon: ShieldCheck,
              },
              {
                title: 'Client-Focused Support',
                text: 'We guide you from inquiry, inspection and negotiation to closing.',
                icon: Briefcase,
              },
              {
                title: 'Trusted Professionals',
                text: 'A team built on integrity, market knowledge and service excellence.',
                icon: Users,
              },
            ].map((x, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/15 flex items-center justify-center">
                  <x.icon className="h-5 w-5 text-[#B88F00]" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-dark">{x.title}</h3>
                <p className="mt-2 text-sm text-grayText leading-relaxed">{x.text}</p>
              </div>
            ))}
          </div>

          {/* Team grid */}
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">Leadership & Agents</h2>
              <p className="mt-2 text-grayText max-w-2xl leading-relaxed">
                Tap a profile to learn more about responsibilities, background, and how each team
                member supports your property journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((a) => {
              const hasWhatsApp = !!a.whatsapp;
              const hasPhone = !!a.phone;
              const hasEmail = !!a.email;

              return (
                <div
                  key={a.slug}
                  className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-lg transition"
                >
                  {/* Image header */}
                  <div className="relative h-60">
                    <img
                      src={a.photo}
                      alt={a.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs text-white border border-white/15 backdrop-blur">
                        {a.title}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-white">{a.name}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-sm text-grayText leading-relaxed line-clamp-3">
                      {a.bio}
                    </p>

                    {/* Quick actions */}
                    {(hasWhatsApp || hasPhone || hasEmail) && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {hasPhone && (
                          <a
                            href={`tel:${a.phone}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-bgLight px-3 py-2 text-xs font-semibold text-dark hover:bg-black/5 transition"
                          >
                            <Phone className="h-4 w-4" />
                            Call
                          </a>
                        )}

                        {hasWhatsApp && (
                          <a
                            href={`https://wa.me/${String(a.whatsapp).replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-bgLight px-3 py-2 text-xs font-semibold text-dark hover:bg-black/5 transition"
                          >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                          </a>
                        )}

                        {hasEmail && (
                          <a
                            href={`mailto:${a.email}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-bgLight px-3 py-2 text-xs font-semibold text-dark hover:bg-black/5 transition"
                          >
                            <Mail className="h-4 w-4" />
                            Email
                          </a>
                        )}
                      </div>
                    )}

                    <div className="mt-5 flex items-center justify-between">
                      <button
                        onClick={() => navigate(`/team/${a.slug}`)}
                        className="rounded-xl bg-dark text-white px-4 py-2.5 text-sm font-semibold hover:opacity-95 transition"
                      >
                        View Profile
                      </button>

                      <span className="text-xs text-grayText">
                        {a.responsibilities?.length ?? 0} Focus Areas
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl bg-dark text-white p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold">Need help choosing the right property?</h3>
              <p className="mt-2 text-white/80 max-w-2xl leading-relaxed">
                Our team can recommend options based on your budget, preferred location, and goal
                (build now, hold, or move in). Book an inspection or send a message today.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-xl bg-primary text-dark px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
            >
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurTeam;