import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Logo
import doluLogo from '../assets/dolulogo.png';

const Navigation = () => {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Mobile dropdowns
  const [isMobilePropertiesOpen, setIsMobilePropertiesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePropertiesOpen(false);
    setIsMobileAboutOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Normal navbar height */}
        <div className="flex items-center justify-between h-[70px]">

          {/* ✅ Big logo without increasing navbar */}
          <Link
            to="/"
            className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200"
            onClick={handleNavClick}
          >
            <img
              src={doluLogo}
              alt="Dolu Properties"
              className="h-[90px] sm:h-[110px] w-auto object-contain"
            />
          </Link>

          {/* ================= Desktop Nav ================= */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/') ? 'text-primary' : 'text-dark hover:text-primary'
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>

            {/* Properties Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsPropertiesOpen(true)}
              onMouseLeave={() => setIsPropertiesOpen(false)}
            >
              <button
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 relative group ${
                  location.pathname.startsWith('/properties')
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                }`}
              >
                Properties
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isPropertiesOpen ? 'rotate-180' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname.startsWith('/properties')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isPropertiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-2xl border border-primary/10 overflow-hidden"
                  >
                    <div className="py-2">
                      {propertiesItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-5 py-3 text-sm font-medium transition-all duration-200 ${
                            isActive(item.path)
                              ? 'bg-primary/15 text-primary border-l-4 border-primary'
                              : 'text-dark hover:bg-primary/5 border-l-4 border-transparent'
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
              className="relative group"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 relative group ${
                  location.pathname.startsWith('/about')
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                }`}
              >
                About Us
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isAboutOpen ? 'rotate-180' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname.startsWith('/about')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-48 bg-white rounded-xl shadow-2xl border border-primary/10 overflow-hidden"
                  >
                    <div className="py-2">
                      {aboutItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-5 py-3 text-sm font-medium transition-all duration-200 ${
                            isActive(item.path)
                              ? 'bg-primary/15 text-primary border-l-4 border-primary'
                              : 'text-dark hover:bg-primary/5 border-l-4 border-transparent'
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

            <Link
              to="/gallery"
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/gallery') ? 'text-primary' : 'text-dark hover:text-primary'
              }`}
            >
              Gallery
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/gallery') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>

            <Link
              to="/contact"
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/contact') ? 'text-primary' : 'text-dark hover:text-primary'
              }`}
            >
              Contact Us
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                  isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          </div>

          {/* ================= Mobile Button ================= */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2.5 text-dark hover:bg-primary/10 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ================= Mobile Menu (Scrollable + Dropdowns) ================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-primary/10 bg-white max-h-[80vh] overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-1">
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className={`block px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/') ? 'bg-primary text-white' : 'text-dark hover:bg-primary/10'
                  }`}
                >
                  Home
                </Link>

                {/* ✅ Properties Dropdown (Mobile) */}
                <div className="pt-1">
                  <button
                    onClick={() => setIsMobilePropertiesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-5 py-3 rounded-lg text-sm font-semibold text-dark hover:bg-primary/10 transition"
                    type="button"
                  >
                    Properties
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isMobilePropertiesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobilePropertiesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 pl-2 space-y-1"
                      >
                        {propertiesItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={handleNavClick}
                            className={`block px-5 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                              isActive(item.path)
                                ? 'bg-primary text-white'
                                : 'text-dark hover:bg-primary/10'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ✅ About Dropdown (Mobile) */}
                <div className="pt-1">
                  <button
                    onClick={() => setIsMobileAboutOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-5 py-3 rounded-lg text-sm font-semibold text-dark hover:bg-primary/10 transition"
                    type="button"
                  >
                    About Us
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isMobileAboutOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 pl-2 space-y-1"
                      >
                        {aboutItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={handleNavClick}
                            className={`block px-5 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                              isActive(item.path)
                                ? 'bg-primary text-white'
                                : 'text-dark hover:bg-primary/10'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/gallery"
                  onClick={handleNavClick}
                  className={`block px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/gallery') ? 'bg-primary text-white' : 'text-dark hover:bg-primary/10'
                  }`}
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className={`block px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/contact') ? 'bg-primary text-white' : 'text-dark hover:bg-primary/10'
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;