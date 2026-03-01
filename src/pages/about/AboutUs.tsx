import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
 
  CheckCircle2,
  // Users,
  
} from 'lucide-react';

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
            {/* HERO (CENTERED + SIMPLE) */}
      <section className="relative overflow-hidden rounded-b-3xl">
        <div className="relative h-[360px] sm:h-[460px]">
          <img
            src={heroImg}
            alt="Dolu Properties"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-primary/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full text-center"
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                About Us
              </h1>

              <p className="mt-3 text-white/90 max-w-2xl mx-auto leading-relaxed">
                We help buyers and investors secure verified properties in Port Harcourt with clear guidance and trusted support.
              </p>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-xl bg-primary text-dark px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
                >
                  Speak to Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* WHO WE ARE (SIDE IMAGE + TEXT) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT - IMAGE (placeholder for staff group photo) */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm bg-white">
              {/* ✅ Replace this image later with your staff group photo */}
              <img
                src={heroImg2}
                alt="Dolu Properties Team"
                className="w-full h-[360px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/19 to-transparent" />
            </div>

            {/* <div className="mt-4 rounded-2xl bg-white border border-black/50 p-5 shadow-lg">
              <p className="text-sm font-semibold  flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Team-driven. Client-first. Process-focused.
              </p>
              <p className="mt-2 text-sm text-grayText leading-relaxed">
                (You’ll replace this image with a full company/team group picture later.)
              </p>
            </div> */}
          </div>

          {/* RIGHT - TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark">Who We Are</h2>
            <p className="mt-3 text-grayText leading-relaxed">
              Dolu Properties is a real estate brand focused on helping Nigerians make confident property
              decisions. We simplify the journey by presenting clear information, offering support during
              inspections, and guiding documentation steps so clients don’t feel lost.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'What we do',
                  points: [
                    'Recommend listings that match your budget and goal',
                    'Support inspections and decision-making',
                    'Guide documentation steps clearly',
                  ],
                },
                {
                  title: 'How we do it',
                  points: [
                    'Verification-first approach',
                    'Transparent communication',
                    'Professional team support',
                  ],
                },
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
                  <p className="text-sm font-bold text-dark">{card.title}</p>
                  <ul className="mt-3 space-y-2 text-sm text-grayText">
                    {card.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mission / Vision */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-dark text-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-white/80">Our Mission</p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  To make property ownership simple, secure, and accessible through verified listings,
                  transparent guidance, and professional support.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
                <p className="text-sm font-semibold text-dark">Our Vision</p>
                <p className="mt-2 text-sm leading-relaxed text-grayText">
                  To become a leading trusted real estate brand known for integrity, customer confidence,
                  and sustainable community development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* STATS (COUNT UP) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div
          ref={statsRef}
          className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 sm:p-10"
        >
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-2xl font-extrabold text-dark">Real Impact, Real Reach</h3>
              <p className="mt-2 text-grayText max-w-2xl leading-relaxed">
                Numbers don’t tell the whole story — but they show consistency. We keep building trust through
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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-extrabold">Let’s help you choose the right property</h3>
              <p className="mt-2 text-white/80 max-w-2xl leading-relaxed">
                Tell us your budget, preferred location, and goal — we’ll recommend the best options and
                guide you through the next steps.
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