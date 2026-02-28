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

  // Close menu when navigating
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto py-3">
          {/* Logo - Big and Bold */}
          <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <img
              src={doluLogo}
              alt="Dolu Properties"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Premium Horizontal Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-dark hover:text-primary'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
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
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isPropertiesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${location.pathname.startsWith('/properties') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
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
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${location.pathname.startsWith('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
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
                isActive('/gallery') 
                  ? 'text-primary' 
                  : 'text-dark hover:text-primary'
              }`}
            >
              Gallery
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${isActive('/gallery') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>

            <Link 
              to="/contact" 
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/contact') 
                  ? 'text-primary' 
                  : 'text-dark hover:text-primary'
              }`}
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-dark hover:bg-primary/10 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Spacious Slide-Down Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: -20 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
              exit={{ opacity: 0, height: 0, marginTop: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-primary/10 bg-white overflow-hidden"
            >
              <div className="px-4 py-6 space-y-1">
                {/* Home */}
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className={`block px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/') 
                      ? 'bg-primary text-white' 
                      : 'text-dark hover:bg-primary/10'
                  }`}
                >
                  Home
                </Link>

                {/* Properties Section */}
                <div className="pt-3 pb-2">
                  <p className="px-5 text-xs font-bold text-primary uppercase tracking-wide">Properties</p>
                  <div className="mt-2 space-y-1">
                    {propertiesItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={handleNavClick}
                        className={`block px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-primary text-white'
                            : 'text-dark hover:bg-primary/10'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* About Section */}
                <div className="pt-3 pb-2">
                  <p className="px-5 text-xs font-bold text-primary uppercase tracking-wide">About</p>
                  <div className="mt-2 space-y-1">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={handleNavClick}
                        className={`block px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-primary text-white'
                            : 'text-dark hover:bg-primary/10'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Links */}
                <Link
                  to="/gallery"
                  onClick={handleNavClick}
                  className={`block px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/gallery') 
                      ? 'bg-primary text-white' 
                      : 'text-dark hover:bg-primary/10'
                  }`}
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className={`block px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/contact') 
                      ? 'bg-primary text-white' 
                      : 'text-dark hover:bg-primary/10'
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