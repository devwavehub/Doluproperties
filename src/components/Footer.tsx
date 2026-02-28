import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Music,} from 'lucide-react';
import doluLogo from '../assets/dolulogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const properties = [
    { name: 'Beulah Layout', path: '/properties/beulah-layout' },
    { name: 'Olive Estate', path: '/properties/olive-estate' },
    { name: 'Oakridge City Estate', path: '/properties/oakridge-city' },
    { name: 'Army Range', path: '/properties/army-range' },
    { name: 'Villa Alora', path: '/properties/villa-alora' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/doluproperties',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/doluproperties',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/234XXXXXXXXXX',
    },
    { name: 'TikTok', icon: Music, url: 'https://tiktok.com/@doluproperties' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-bold text-white mb-6">Dolu Properties</h3> */}
            <img
              src={doluLogo}
              alt="Dolu Properties"
              className="h-[150px] w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Dolu Properties provides verified lands and premium real estate
              opportunities in Port Harcourt. We help clients invest smartly and
              securely in genuine properties with peace of mind.
            </p>
            {/* Social Links */}
            <div className="pt-4 space-y-3">
              <h4 className="text-white font-semibold text-sm">Social Links</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      title={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Properties</h4>
            <ul className="space-y-3">
              {properties.map((property) => (
                <li key={property.path}>
                  <Link
                    to={property.path}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {property.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-primary">📞</span>
                <a
                  href="tel:+234XXXXXXXXXX"
                  className="text-gray-400 hover:text-primary transition-colors break-all"
                >
                  +234 XXX XXX XXXX
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">📧</span>
                <a
                  href="mailto:info@doluproperties.com"
                  className="text-gray-400 hover:text-primary transition-colors break-all"
                >
                  info@doluproperties.com
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">📍</span>
                <span className="text-gray-400">
                  Port Harcourt, Rivers State
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Dolu Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
