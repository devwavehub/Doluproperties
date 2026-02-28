import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Option A (Vite): put logo here: src/assets/dolulogo.png
import doluLogo from '../assets/dolulogo.png';

const Navigation = () => {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const propertiesItems = [
    { name: 'All Properties', path: '/properties' },
    { name: 'Beulah Layout', path: '/properties/beulah-layout' },
    { name: 'Olive Estate', path: '/properties/olive-estate' },
    { name: 'Oakridge City Estate', path: '/properties/oakridge-city' },
    { name: 'Army Range', path: '/properties/army-range' },
    { name: 'Villa Alora', path: '/properties/villa-alora' },
    { name: 'Primebrook Estate', path: '/properties/primebrook-estate' },
  ];

  const aboutItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about/team' },
    { name: 'Our Services', path: '/about/services' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? 'text-primary bg-primary/10'
        : 'text-gray-700 hover:text-primary hover:bg-primary/10'
    }`;

  return (
    <nav className="sticky top-0 z-50">
      {/* Background bar like the example */}
      <div className="bg-secondary/65 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* ✅ The “pill” container */}
          <div className="bg-white/95 backdrop-blur rounded-full shadow-lg border border-white/30 px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo Only */}
              <Link to="/" className="flex items-center ">
                <img
                  src={doluLogo}
                  alt="Dolu Properties"
                  className="h-[120px] w-auto object-contain"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                <Link to="/" className={navLinkClass('/')}>
                  Home
                </Link>

                {/* Properties Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsPropertiesOpen(true)}
                  onMouseLeave={() => setIsPropertiesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      location.pathname.startsWith('/properties')
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    Properties
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isPropertiesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isPropertiesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 mt-3 w-60 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden"
                      >
                        <div className="py-2">
                          {propertiesItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-4 py-3 text-sm transition-colors ${
                                isActive(item.path)
                                  ? 'bg-primary text-white'
                                  : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      location.pathname.startsWith('/about')
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    About Us
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden"
                      >
                        <div className="py-2">
                          {aboutItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-4 py-3 text-sm transition-colors ${
                                isActive(item.path)
                                  ? 'bg-primary text-white'
                                  : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/gallery" className={navLinkClass('/gallery')}>
                  Gallery
                </Link>

                <Link to="/contact" className={navLinkClass('/contact')}>
                  Contact Us
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-full text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden border-t border-gray-200"
                >
                  <div className="px-2 py-3 space-y-2">
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Home
                    </Link>

                    <div className="px-4 pt-2 text-xs font-semibold text-gray-500">Properties</div>
                    {propertiesItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="px-4 pt-2 text-xs font-semibold text-gray-500">About</div>
                    {aboutItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}

                    <Link
                      to="/gallery"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Gallery
                    </Link>

                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;