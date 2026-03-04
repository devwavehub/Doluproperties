import { Link } from 'react-router-dom';
import doluLogo from '../assets/dolulogowhite.png';

// REAL ICON IMPORTS
import facebookIcon from '../assets/social/facebook.svg';
import instagramIcon from '../assets/social/instagram.svg';
import whatsappIcon from '../assets/social/whatsapp.svg';
import tiktokIcon from '../assets/social/tiktok.svg';
import youtubeIcon from '../assets/social/youtube.svg';

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
    { name: 'Primebrook Estate', path: '/properties/primebrook-estate' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: facebookIcon,
      url: 'https://facebook.com/doluproperties',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      url: 'https://instagram.com/doluproperties',
      color: '#E4405F'
    },
    {
      name: 'WhatsApp',
      icon: whatsappIcon,
      url: 'https://wa.me/234XXXXXXXXXX',
      color: '#25D366'
    },
    {
      name: 'TikTok',
      icon: tiktokIcon,
      url: 'https://tiktok.com/@doluproperties',
      color: '#000000'
    },
    {
      name: 'YouTube',
      icon: youtubeIcon,
      url: 'https://youtube.com/@doluproperties',
      color: '#FF0000'
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <div className="space-y-4">

            <img
              src={doluLogo}
              alt="Dolu Properties"
              className="h-[140px] w-auto object-contain"
            />

            <p className="text-sm leading-relaxed text-gray-400">
              Dolu Properties provides verified lands and premium real estate
              opportunities in Port Harcourt. We help clients invest smartly
              and securely in genuine properties with peace of mind.
            </p>


            {/* SOCIAL ICONS */}
            <div className="pt-4 space-y-3">

              <h4 className="text-white font-semibold text-sm">
                Social Links
              </h4>

              <div className="flex gap-4">

                {socialLinks.map((social) => (

                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="transition transform hover:scale-110"
                  >

                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6"
                    />

                  </a>

                ))}

              </div>

            </div>

          </div>


          {/* Quick Links */}
          <div>

            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">

              {quickLinks.map((link) => (

                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#F4C400] transition text-sm"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* Properties */}
          <div>

            <h4 className="text-lg font-semibold text-white mb-6">
              Properties
            </h4>

            <ul className="space-y-3">

              {properties.map((property) => (

                <li key={property.path}>

                  <Link
                    to={property.path}
                    className="text-gray-400 hover:text-[#F4C400] transition text-sm"
                  >
                    {property.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3">
                <span className="text-[#F4C400]">📞</span>

                <a
                  href="tel:+2347032023029"
                  className="text-gray-400 hover:text-[#F4C400] transition"
                >
                  +234 703 202 3029
                </a>

              </div>


              <div className="flex gap-3">

                <span className="text-[#F4C400]">📧</span>

                <a
                  href="mailto:info@doluproperties.com"
                  className="text-gray-400 hover:text-[#F4C400] transition"
                >
                  info@doluproperties.com
                </a>

              </div>


              <div className="flex gap-3">

                <span className="text-[#F4C400]">📍</span>

                <span className="text-gray-400">
                  Port Harcourt, Rivers State
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">

          © {currentYear} Dolu Properties. All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;