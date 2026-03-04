import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

// ✅ hero background
import heroImg from '../../assets/VILLA ALORA1.jpg';
import heroImg2 from '../../assets/staff.jpg';

/**
 * AnimatedCounter
 * - counts up when the section scrolls into view
 * - no external libraries needed
 */
function AnimatedCounter({
  to,
  duration = 1200,
  suffix = '',
}: {
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;

    const animate = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <span className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const AboutUs = () => {
  const navigate = useNavigate();

  // ✅ Stats config (edit to your real numbers anytime)
  const stats = useMemo(
    () => [
      { label: 'Individuals & Landlords Reached', value: 1000000, suffix: '+' },
      { label: 'Real Estate Agents & Partners', value: 1000, suffix: '+' },
      { label: 'Successful Client Interactions', value: 5000, suffix: '+' },
    ],
    []
  );

  // For triggering count-up only when visible
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-120px' });

  return (
    <div className="w-full bg-bgLight">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-b-3xl">
        <div className="relative h-[420px] sm:h-[520px]">
          <img
            src={heroImg}
            alt="Dolu Properties"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-primary/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full text-center"
            >
              <p className="text-white/80 text-xs font-bold tracking-widest uppercase">
                Dolu Properties
              </p>

              <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                About Dolu Properties
              </h1>

              <p className="mt-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
                A fast-rising company in Port Harcourt, Nigeria, specializing in real estate development,
                real estate education, and integrated business services.
              </p>

              <div className="mt-8 flex justify-center gap-3 flex-wrap">
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-xl bg-primary text-dark px-7 py-3 text-sm font-semibold hover:opacity-95 transition"
                >
                  Speak to Our Team
                </button>
                <button
                  onClick={() => navigate('/properties')}
                  className="rounded-xl border border-white/20 bg-white/10 text-white px-7 py-3 text-sm font-semibold hover:bg-white/15 transition"
                >
                  Browse Listings
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE (SEGMENT) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT - IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm bg-white">
              <img
                src={heroImg2}
                alt="Dolu Properties Team"
                className="w-full h-[380px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent" />
            </div>

            {/* Office card
            <div className="mt-5 rounded-3xl bg-white border border-black/5 p-6 shadow-sm">
              <p className="text-sm font-extrabold text-dark">Office Address</p>
              <p className="mt-2 text-sm text-grayText leading-relaxed">
                No. 19B Ada George Road, Opposite Father&apos;s House Church, Port Harcourt.
              </p>
              <p className="mt-2 text-sm font-semibold text-dark">+234 814 828 1475</p>
            </div> */}
          </div>

          {/* RIGHT - TEXT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">
              Who We Are
            </h2>

            <p className="mt-4 text-grayText leading-relaxed">
              <span className="font-semibold text-dark">Dolu Properties</span> is a fast-rising
              company in Port Harcourt, Nigeria. We specialize in{' '}
              <span className="font-semibold text-dark">
                real estate development, real estate education, and integrated business services
              </span>
              . Our work is built on integrity, clarity, and client confidence helping buyers, investors,
              landlords, and partners make smart property decisions.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'What we do',
                  points: [
                    'Provide verified real estate opportunities',
                    'Guide inspections and decision-making',
                    'Support documentation and closing',
                  ],
                },
                {
                  title: 'How we do it',
                  points: [
                    'Verification-first approach',
                    'Transparent communication',
                    'Professional support system',
                  ],
                },
              ].map((card, idx) => (
                <div key={idx} className="rounded-3xl bg-white border border-black/5 p-7 shadow-sm">
                  <p className="text-sm font-extrabold text-dark">{card.title}</p>
                  <ul className="mt-4 space-y-3 text-sm text-grayText">
                    {card.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="rounded-xl bg-dark text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                Request Info
              </button>
              <button
                onClick={() => navigate('/properties')}
                className="rounded-xl bg-primary text-dark px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                View Properties
              </button>
            </div>
          </div>
        </motion.div>

        {/* MISSION + VISION (BIG FEATURE SEGMENT) */}
        <div className="mt-14">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-dark">Our Mission & Vision</h3>
              {/* <p className="mt-3 text-grayText max-w-2xl leading-relaxed">
                Built on integrity, collaboration, and results — our focus is creating affordable housing solutions
                through verified real estate opportunities.
              </p> */}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* VISION */}
            <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <p className="text-xs font-bold tracking-wider text-dark/70 uppercase">Our Vision</p>
              <h4 className="mt-2 text-xl sm:text-2xl font-extrabold text-dark">
                Affordable housing through opportunities
              </h4>
              <p className="mt-3 text-grayText leading-relaxed">
                Creating affordable housing solutions through real estate opportunities and collaborations.
              </p>
              <div className="mt-6 h-[2px] w-16 bg-primary" />
            </div>

            {/* MISSION */}
            <div className="rounded-3xl bg-dark text-white border border-white/10 shadow-sm p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 pointer-events-none" />
              <p className="text-xs font-bold tracking-wider text-white/70 uppercase">Our Mission</p>
              <h4 className="mt-2 text-xl sm:text-2xl font-extrabold">
                Create access with clarity & support
              </h4>
              <p className="mt-3 text-white/85 leading-relaxed">
                To create affordable housing solutions by providing verified real estate opportunities,
                professional guidance, and strong collaboration with clients and partners.
              </p>
              <div className="mt-6 h-[2px] w-16 bg-primary" />
            </div>
          </div>
        </div>

        {/* OUR SERVICES (FULL SEGMENT) */}
        <div className="mt-14">
          <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 sm:p-10">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-dark">Our Services</h3>
                <p className="mt-3 text-grayText max-w-2xl leading-relaxed">
                  We provide complete real estate solutions from property development to leasing — backed by
                  professional management and guided support.
                </p>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="rounded-xl bg-dark text-white px-5 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                Request a Consultation
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Building Construction & Management',
                  desc: 'Project supervision, planning, execution, and structured delivery with accountability.',
                },
                {
                  title: 'Sales & Development of Land and Houses',
                  desc: 'Verified opportunities for buyers and investors, with guidance from inspection to closing.',
                },
                {
                  title: 'Rental and Leasing',
                  desc: 'Helping clients rent, lease, and manage property assets with clarity and smooth processes.',
                },
              ].map((s) => (
                <div key={s.title} className="rounded-3xl bg-bgLight border border-black/5 p-7">
                  <p className="text-lg font-extrabold text-dark">{s.title}</p>
                  <p className="mt-2 text-sm text-grayText leading-relaxed">{s.desc}</p>
                  <div className="mt-5 h-[2px] w-12 bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOLU REALTORS COMMUNITY (DRC) — FULL PREMIUM SEGMENT */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm bg-white">
          {/* Segment Header */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark to-primary/80" />
            <div className="relative z-10 p-8 sm:p-10">
              <p className="text-xs font-bold tracking-wider text-white/80 uppercase">Community</p>
              <h3 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">
                Dolu Realtors Community (DRC)
              </h3>
              <p className="mt-4 text-white/85 max-w-3xl leading-relaxed">
                A global network of aspiring and professional realtors designed to train, support, and empower
                individuals to become confident, high-performing real estate consultants.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-xl bg-primary text-dark px-7 py-3 text-sm font-semibold hover:opacity-95 transition"
                >
                  Join the Community
                </button>
                <a
                  href="tel:+2347032023029"
                  className="rounded-xl bg-white/10 border border-white/20 text-white px-7 py-3 text-sm font-semibold hover:bg-white/15 transition"
                >
                  Call: +234 703 202 3029
                </a>
              </div>

              <p className="mt-4 text-xs text-white/70">
                Handle: <span className="font-semibold text-white">@dolurealtors</span>
              </p>
            </div>
          </div>

          {/* Segment Content */}
          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Overview */}
              <div className="rounded-3xl bg-bgLight border border-black/5 p-7">
                <p className="text-sm font-extrabold text-dark">About the DRC</p>
                <p className="mt-3 text-sm text-grayText leading-relaxed">
                  The DRC is designed to train, support, and empower individuals helping them build skills,
                  credibility, and strong deal-closing confidence.
                </p>

                <div className="mt-6 rounded-2xl bg-white border border-black/5 p-6">
                  <p className="text-sm font-bold text-dark">Fun Fact</p>
                  <p className="mt-2 text-sm text-grayText leading-relaxed">
                    Realtors who network actively close more deals than those who don’t. Being connected pays!
                  </p>
                </div>

                <div className="mt-4 rounded-2xl bg-white border border-black/5 p-6">
                  <p className="text-sm font-bold text-dark">Did You Know?</p>
                  <p className="mt-2 text-sm text-grayText leading-relaxed">
                    A realtor&apos;s network is more valuable than their office space — connections = opportunities.
                  </p>
                </div>
              </div>

              {/* Who can join */}
              <div className="rounded-3xl bg-white border border-black/5 p-7">
                <p className="text-sm font-extrabold text-dark">Who can join?</p>
                <ul className="mt-5 space-y-3 text-sm text-grayText">
                  {[
                    'Beginners with little or no knowledge of real estate',
                    'Aspiring realtors looking for structure & guidance',
                    'Realtors who want to improve sales, strategy & credibility',
                    'Individuals seeking additional streams of income',
                    'Anyone willing to learn, grow & operate with integrity',
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="rounded-3xl bg-white border border-black/5 p-7">
                <p className="text-sm font-extrabold text-dark">Benefits of being a Dolu Realtor</p>

                <div className="mt-5 space-y-3">
                  {[
                    'Weekly trainings to build real estate and sales skills',
                    'Performance based incentives',
                    'Sponsored bonuses & rewards for top achievers',
                    'Grow into a trusted real estate professional',
                    'Supportive realtor community for learning & growth',
                  ].map((b, i) => (
                    <div key={i} className="rounded-2xl bg-bgLight border border-black/5 p-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <p className="text-sm text-grayText">{b}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-dark text-white p-6">
                  <p className="text-sm font-bold">Why Join the DRC?</p>
                  <p className="mt-2 text-sm text-white/85 leading-relaxed">
                    Success in real estate is faster when you’re trained, supported, connected, and rewarded.
                    DRC gives you knowledge, income opportunity, and belonging.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate('/contact')}
                    className="rounded-xl bg-primary text-dark px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
                  >
                    Get Started
                  </button>
                  <a
                    href="tel:+2347032023029"
                    className="rounded-xl bg-white border border-black/10 text-dark px-6 py-3 text-sm font-semibold hover:bg-black/5 transition"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS (COUNT UP) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          ref={statsRef}
          className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 sm:p-10"
        >
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-dark">Real Impact, Real Reach</h3>
              <p className="mt-3 text-grayText max-w-2xl leading-relaxed">
                Numbers don’t tell the whole story but they show consistency. We keep building trust through
                structured service delivery and client support.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-xl bg-dark text-white px-5 py-3 text-sm font-semibold hover:opacity-95 transition"
            >
              Work With Us
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="rounded-2xl bg-bgLight border border-black/5 p-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-dark">
                  {statsInView ? (
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  ) : (
                    <span>0{s.suffix}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-grayText">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-dark text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Let’s help you choose the right property
              </h3>
              <p className="mt-3 text-white/80 max-w-2xl leading-relaxed">
                Tell us your budget, preferred location, and goal we’ll recommend the best options and guide
                you through the next steps.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/properties')}
                className="rounded-xl bg-primary text-dark px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                Browse Listings
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="rounded-xl border border-white/20 bg-white/10 text-white px-6 py-3 text-sm font-semibold hover:bg-white/15 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;