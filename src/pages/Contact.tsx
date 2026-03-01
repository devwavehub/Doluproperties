import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, MessageCircle, Globe } from 'lucide-react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honey: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message?: string;
  }>({ type: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (form.honey) return { ok: false, msg: 'Spam detected' };
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      return { ok: false, msg: 'Please fill required fields' };
    }
    return { ok: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      setStatus({ type: 'error', message: v.msg });
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ type: 'error', message: 'Email service not configured. See env.example' });
      return;
    }

    setLoading(true);
    setStatus({ type: null });

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus({ type: 'success', message: 'Message sent — we will contact you shortly.' });
      setForm({ name: '', email: '', phone: '', subject: '', message: '', honey: '' });
    } catch (err) {
      console.error('EmailJS send error:', err);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Correct details from your screenshot
  const phone = '08055489605';
  const whatsapp = '08055489605';
  const email = 'info@doluproperties.com';
  const website = 'doluproperties.com';

  // ✅ Correct address (more exact)
  const address =
    "19B Ada-George Road, opposite Fathers House Church, Mgbuoba, Port Harcourt 500272, Rivers State, Nigeria";

  // ✅ Stronger map pin: include business name + full address
  const MAP_QUERY = useMemo(() => {
    return `Dolu Properties, ${address}`;
  }, [address]);

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

  // ✅ Map iframe
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden rounded-b-2xl">
        <img
          src="/src/assets/VILLA ALORA1.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 pt-24 sm:pt-32 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >
            <span className="inline-block bg-white/10 text-white/90 rounded-full px-3 py-1 text-sm font-medium">
              Get In Touch
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white">Contact Us</h1>
            <p className="mt-2 text-white/90 max-w-2xl mx-auto">
              Have a question or ready to start your property journey? Our team is here to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left - contact cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: 'Phone',
                  subtitle: phone,
                  href: `tel:${phone}`,
                  icon: <Phone className="h-6 w-6 text-primary" />,
                },
                {
                  title: 'WhatsApp',
                  subtitle: whatsapp,
                  href: `https://wa.me/234${whatsapp.replace(/^0/, '')}`,
                  icon: <MessageCircle className="h-6 w-6 text-primary" />,
                },
                {
                  title: 'Email',
                  subtitle: email,
                  href: `mailto:${email}`,
                  icon: <Mail className="h-6 w-6 text-primary" />,
                },
                {
                  title: 'Website',
                  subtitle: website,
                  href: `https://${website}`,
                  icon: <Globe className="h-6 w-6 text-primary" />,
                },
                {
                  title: 'Office',
                  subtitle: address,
                  href: mapSearchUrl,
                  icon: <MapPin className="h-6 w-6 text-primary" />,
                },
              ].map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">{c.icon}</div>
                    <div>
                      <div className="text-dark font-semibold">{c.title}</div>
                      <div className="text-grayText text-sm mt-1">{c.subtitle}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-bgLight rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-dark">Office Hours</h3>
              <p className="text-grayText mt-2">Mon - Sat: 9:00 AM — 6:00 PM</p>
              <p className="text-grayText mt-2">{address}</p>

              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-dark bg-primary/15 px-4 py-2 rounded-xl hover:bg-primary/20 transition"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right - form */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-3">Send us a message</h3>

              {status.type && (
                <div
                  className={`mb-4 px-4 py-3 rounded-lg text-sm ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-100'
                      : 'bg-red-50 text-red-800 border border-red-100'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="hidden" name="honey" value={form.honey} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name *"
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none"
                  />
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  rows={6}
                  className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 bg-dark text-white px-5 py-3 rounded-xl hover:opacity-95 disabled:opacity-60"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : null}
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map card */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-white p-4">
                <h4 className="font-bold text-dark">Visit Our Office</h4>
                <p className="text-grayText text-sm">Drop by our office or book an inspection.</p>
              </div>
              <div className="w-full h-72 sm:h-96">
                <iframe
                  title="office-location"
                  src={mapEmbedSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA strip */}
      <section className="bg-dark text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">Need quick help?</h3>
            <p className="text-gray-200 text-sm">Call, WhatsApp or email our team for an immediate response.</p>
          </div>

          <div className="flex items-center gap-3">
            <a href={`tel:${phone}`} className="bg-primary text-dark px-4 py-2 rounded-xl font-semibold">
              Call
            </a>
            <a
              href={`https://wa.me/234${whatsapp.replace(/^0/, '')}`}
              className="bg-white text-dark px-4 py-2 rounded-xl font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a href={`mailto:${email}`} className="border border-white/20 px-4 py-2 rounded-xl">
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;