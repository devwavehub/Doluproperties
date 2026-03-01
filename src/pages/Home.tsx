import { motion } from 'framer-motion';
import villaAlora2 from '../assets/VILLA ALORA2.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { galleryImages } from '../data/galleryImages';

import {
  ShieldCheck,
  MapPin,
  BadgeCheck,
  Briefcase,
  PhoneCall,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import { properties } from '../data/properties';
import { agents } from '../data/agents';

const Home = () => {
  const navigate = useNavigate();

  // search form state
  const [type, setType] = useState('any');
  const [city, setCity] = useState('any');
  const [beds, setBeds] = useState('any');
  const [budget, setBudget] = useState('any');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    const params: Record<string, string> = {};
    if (type && type !== 'any') params.type = type;
    if (city && city !== 'any') params.city = city;
    if (beds && beds !== 'any') params.beds = beds;
    if (budget && budget !== 'any') params.budget = budget;

    setTimeout(() => {
      navigate({ pathname: '/search', search: new URLSearchParams(params).toString() });
    }, 400);
  };

  // const featuredLeft = useMemo(
  //   () => properties.filter((p) => ['beulah-layout', 'villa-alora'].includes(p.slug)),
  //   []
  // );

  // const featuredSlider = useMemo(
  //   () => properties.filter((p) => !['beulah-layout', 'villa-alora'].includes(p.slug)),
  //   []
  // );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
{/* =============== HERO + SEARCH =============== */}
<section className="relative w-full min-h-[100vh] overflow-hidden">
  <img
    src={villaAlora2}
    alt="Dolu Properties"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* overlays */}
  <div className="absolute inset-0 bg-[#F4C400]/15" />
  <div className="absolute inset-0 bg-black/45" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">
    {/* LEFT CONTENT (unchanged) */}
    <div className="max-w-3xl">
      {/* badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur border border-white/15">
        <BadgeCheck className="h-4 w-4 text-[#F4C400]" />
        Rivers State Real Estate • Verified Listings
      </div>

      {/* headline */}
      <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
        Welcome To{' '}
        <span className="text-[#F4C400]">Dolu Properties</span>
      </h1>

      {/* subtext */}
      <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
        Invest smart with Dolu Properties. Our verified lands in Port Harcourt offer security,
        appreciation, and peace of mind guaranteed.
      </p>

      {/* trust bullets */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
        {[
          { label: 'Verified Documentation', icon: ShieldCheck },
          { label: 'Prime Locations', icon: MapPin },
          { label: 'Transparent Guidance', icon: Briefcase },
        ].map((t, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-3 text-sm text-white backdrop-blur"
          >
            <t.icon className="h-4 w-4 text-[#F4C400]" />
            <span className="text-white/90">{t.label}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => {
            document.getElementById('featured-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="rounded-xl bg-[#F4C400] px-5 py-3 text-sm font-semibold text-black shadow hover:opacity-95 transition inline-flex items-center gap-2"
        >
          Explore Properties <ArrowRight className="h-4 w-4" />
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 transition"
        >
          Speak to an Agent
        </button>
      </div>
    </div>

    {/* ✅ Search card (NOW truly centered in the hero) */}
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-3xl rounded-2xl bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur border border-black/5">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <p className="text-sm font-semibold text-dark">Quick Property Search</p>
            <p className="text-xs text-grayText">
              Filter by category, location, bedrooms and budget.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">
              Looking For
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
            >
              <option value="any">Any</option>
              <option value="buy_build">Buy & Build</option>
              <option value="buy_hold">Buy & Hold</option>
              <option value="move_in">Buy & Move In</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">
              Location
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
            >
              <option value="any">All Cities</option>
              <option value="portharcourt">Port Harcourt</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">
              Bedrooms
            </label>
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
            >
              <option value="any">Any</option>
              {[...Array(11).keys()].map((n) => (
                <option key={n} value={n.toString()}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">
              Budget
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F4C400]/60"
            >
              <option value="any">Any</option>
              <option value="1.5m">1.5M</option>
              <option value="5m">5M</option>
              <option value="12m">12M</option>
              <option value="18m">18M</option>
              <option value="90m">90M</option>
              <option value="120m">120M</option>
            </select>
          </div>

          <div>
            <button
              onClick={handleSearch}
              className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-95 transition flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Search'
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-[#F4C400]" />
            Verified estates only
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-[#F4C400]" />
            Clear pricing & documentation
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-[#F4C400]" />
            Agent support from inquiry to closing
          </span>
        </div>
      </div>
    </div>

    {/* quick stats band (unchanged) */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { k: '100%', v: 'Verification First', d: 'Every listing is screened before publication.' },
        { k: 'Port Harcourt', v: 'Strategic Locations', d: 'Estates positioned for growth and access.' },
        { k: 'Guided', v: 'End-to-End Support', d: 'From selection to documentation and closing.' },
      ].map((s, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-5 text-white"
        >
          <p className="text-sm text-white/80">{s.k}</p>
          <p className="mt-1 text-lg font-semibold">{s.v}</p>
          <p className="mt-1 text-sm text-white/80 leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* =============== FEATURED LISTINGS (4 PREMIUM CARDS) =============== */}
<section id="featured-section" className="py-18 sm:py-20 ">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-dark">
        Featured Opportunities
      </h2>

      <p className="mt-3 text-grayText max-w-2xl mx-auto leading-relaxed">
        Carefully selected estates with strong location value,
        clear documentation, and flexible options for buyers
        and investors.
      </p>
    </div>


    {/* 4 GRID LAYOUT */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {properties.slice(0,4).map((p) => (

        <div
          key={p.id}
          onClick={() => navigate(`/properties/${p.slug}`)}
          className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[380px] sm:h-[420px]"
        >

          <img
            src={p.gallery[0]}
            alt={p.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-5">

            <span className="text-xs text-white/80 uppercase tracking-wide">
              {p.category.replace('_', ' ')}
            </span>

            <h3 className="text-lg font-semibold text-white mt-1">
              {p.name}
            </h3>

            <span className="text-sm text-white/85">
              {p.priceLabel}
            </span>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* =============== BUY & BUILD (BIGGER IMAGES) =============== */}
      <section className="py-18 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">Buy & Build</h2>
              <p className="mt-2 text-grayText max-w-2xl leading-relaxed">
                Land options that allow immediate development or phased construction.
                Ideal for homeowners, developers, and strategic investors.
              </p>
            </div>

            <button
              onClick={() => navigate('/search?type=buy_build')}
              className="rounded-xl border border-black/10 bg-black text-white px-5 py-3 text-sm font-semibold hover:opacity-95 transition"
            >
              View Buy & Build
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter((p) => p.category === 'buy_build')
              .slice(0, 3)
              .map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/properties/${p.slug}`)}
                  className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border border-black/5"
                >
                  <img src={p.gallery[0]} alt={p.name} className="w-full h-[300px] object-cover" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-dark">{p.name}</h3>
                    <p className="text-sm text-grayText mt-1">{p.locationArea}</p>
                    <p className="text-sm text-primary mt-2 font-semibold">{p.priceLabel}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* =============== BUY & HOLD (3 PREMIUM CARDS) =============== */}
<section className="py-18 sm:py-20 bg-bgLight">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-dark">Buy & Hold</h2>
        <p className="mt-2 text-grayText max-w-2xl leading-relaxed">
          Secure land in strategic areas and hold for appreciation. A smart path for
          long-term wealth building and resale advantage.
        </p>
      </div>

      <button
        onClick={() => navigate('/search?type=buy_hold')}
        className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5 transition"
      >
        View Buy & Hold
      </button>
    </div>

    {/* 3 GRID CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties
        .filter((p) => p.category === 'buy_hold')
        .slice(0, 3)
        .map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/properties/${p.slug}`)}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border border-black/5"
          >
            <img
              src={p.gallery[0]}
              alt={p.name}
              className="w-full h-[320px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-dark">{p.name}</h3>
              <p className="text-sm text-grayText mt-1">{p.locationArea}</p>
              <p className="text-sm text-primary mt-2 font-semibold">{p.priceLabel}</p>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>

      {/* =============== WHY CHOOSE DOLU (PRO) =============== */}
      <section className="py-18 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100 -z-10" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">Why Clients Choose Dolu</h2>
              <p className="mt-3 text-grayText leading-relaxed">
                Real estate decisions need clarity and confidence. Our approach prioritizes
                documentation, transparency, and guidance — so you can invest with peace of mind.
              </p>

              <div className="mt-6 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
                <p className="text-sm font-semibold text-dark">What you get</p>
                <ul className="mt-3 space-y-2 text-sm text-grayText">
                  {[
                    'Clear documentation checks before you commit',
                    'Structured support from inquiry to closing',
                    'Properties in locations positioned for growth',
                    'No surprise fees — everything explained upfront',
                  ].map((x, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F4C400] mt-0.5" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Verified Listings',
                  icon: ShieldCheck,
                  description:
                    'Listings are reviewed to confirm ownership status and documentation before they go live.',
                },
                {
                  title: 'Prime Locations',
                  icon: MapPin,
                  description:
                    'We focus on estates with strong access, neighborhood growth, and long-term resale advantage.',
                },
                {
                  title: 'Transparent Process',
                  icon: BadgeCheck,
                  description:
                    'From pricing to paperwork, you get clear guidance so you know exactly what you’re paying for.',
                },
                {
                  title: 'Investment Support',
                  icon: Briefcase,
                  description:
                    'We help you compare options and choose what matches your plan — build now, hold, or move in.',
                },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="h-11 w-11 rounded-xl bg-[#F4C400]/15 flex items-center justify-center">
                    <pillar.icon className="h-5 w-5 text-[#B88F00]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-dark">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-grayText leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============== HOW IT WORKS =============== */}
      <section className="py-18 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">How It Works</h2>
            <p className="mt-3 text-grayText max-w-2xl mx-auto leading-relaxed">
              A simple process designed to keep everything clear — from property selection to documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Search & Shortlist',
                text: 'Use filters to pick the right category, budget and location. Save your top options.',
              },
              {
                step: '02',
                title: 'Inspection & Verification',
                text: 'We guide inspections and help confirm the key details so you understand what you’re buying.',
              },
              {
                step: '03',
                title: 'Documentation & Closing',
                text: 'We walk you through payment structure, paperwork and final steps until you close confidently.',
              },
            ].map((s, idx) => (
              <div key={idx} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#B88F00]">{s.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-grayText leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== GALLERY (SLIDER + DOTS) =============== */}
<section className="py-18 sm:py-20 bg-bgLight">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    {/* centered heading */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-dark">Gallery</h2>
      <p className="mt-2 text-grayText max-w-2xl mx-auto leading-relaxed">
        A quick look at some of our estates, environments, and property moments.
      </p>
    </div>

    {/* slider */}
    <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm bg-white pb-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {(galleryImages.length ? galleryImages : properties.slice(0, 6).map(p => p.gallery[0])).map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4">
              <div className="rounded-2xl overflow-hidden bg-bgLight border border-black/5">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-[260px] sm:h-[300px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* optional button to full gallery */}
    <div className="mt-8 flex justify-center">
      <button
        onClick={() => navigate('/gallery')}
        className="rounded-xl bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
      >
        View Full Gallery
      </button>
    </div>
  </div>
</section>

      {/* =============== CTA STRIP =============== */}
      <section className="py-14 bg-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to make a smart property move?</h3>
              <p className="mt-2 text-white/80 max-w-2xl leading-relaxed">
                Talk to our team for recommendations based on your budget and property goal.
                We’ll guide you from selection to closing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+2340000000000"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4C400] px-5 py-3 text-sm font-semibold text-black hover:opacity-95 transition"
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>

              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <a
                href="mailto:info@doluproperties.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============== AGENTS =============== */}
      <section className="py-18 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">Meet Our Agents</h2>
              <p className="mt-2 text-grayText max-w-2xl leading-relaxed">
                Our experienced agents are here to guide you through every step of finding, buying, or investing in your perfect property.
              </p>
            </div>
            <button
              onClick={() => navigate('/team')}
              className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5 transition"
            >
              View Team
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.slice(0, 3).map((a) => (
              <div
                key={a.slug}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-black/5 flex flex-col items-center text-center"
              >
                <img src={a.photo} alt={a.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                <h3 className="text-lg font-semibold text-dark">{a.name}</h3>
                <p className="text-sm text-grayText mb-4">{a.title}</p>
                <button
                  onClick={() => navigate(`/team/${a.slug}`)}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== TESTIMONIALS (polished) =============== */}
      <section className="py-18 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">Client Feedback</h2>
            <p className="mt-3 text-grayText max-w-2xl mx-auto leading-relaxed">
              A few words from clients and investors who completed transactions with our guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: 'They explained every cost upfront and kept their word. The staff were professional and friendly, and my land documents came faster than expected. I’ve already referred two of my friends!',
                name: 'Chika Onuoha',
                role: 'Client',
                avatar: '/src/assets/placeholders/testimonial1.jpeg',
              },
              {
                text: 'I couldn’t be in Port Harcourt physically, but Dolu Properties handled the process for me. They shared video updates, receipts, and photos every step of the way. I got my documents without stress...100% trustworthy team.',
                name: 'Mrs Gift Nwafor.',
                role: 'Investor',
                avatar: '/src/assets/placeholders/testimonial2.jpeg',
              },
              {
                text: 'Before buying, their agent walked me through how to confirm property authenticity and legal details. I really appreciated that. You can tell they care more about people than just making sales.',
                name: 'Adesuwa Olumide',
                role: 'Client',
                avatar: '/src/assets/placeholders/testimonial3.jpeg',
              },
            ].map((t, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-black/5">
                <p className="text-sm text-grayText leading-relaxed">“{t.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-dark">{t.name}</p>
                    <p className="text-xs text-grayText">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;