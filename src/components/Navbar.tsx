import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Tax Services', path: '/services/tax' },
      { name: 'Corporate Services', path: '/services/corporate' },
    ],
  },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Links', path: '/links' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+923336479447" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Phone size={14} />
              <span>0333-6479447</span>
            </a>
            <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Mail size={14} />
              <span>alfacorporateandtaxconsultants@gmail.com</span>
            </a>
          </div>
          <div className="text-gray-300">
            3-Fane Road, Office No 3, Ground Floor, Tehreem Building, Lahore
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/uploads/upload_1.jpg"
                alt="ALFA Logo"
                className="h-14 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-secondary leading-tight">ALFA</h1>
                <p className="text-xs text-primary font-medium">Corporate & Tax Consultants</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname.startsWith(link.path)
                          ? 'text-primary'
                          : 'text-secondary hover:text-primary'
                      }`}>
                        {link.name}
                        <ChevronDown size={14} />
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                          >
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="block px-4 py-2.5 text-sm text-secondary hover:bg-orange-50 hover:text-primary transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary bg-orange-50'
                          : 'text-secondary hover:text-primary hover:bg-orange-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/admin"
                className="ml-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-primary hover:bg-orange-50 transition-colors"
                title="Admin Panel"
              >
                <Shield size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-secondary hover:bg-orange-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <>
                        <div className="px-4 py-2 text-sm font-semibold text-secondary">
                          {link.name}
                        </div>
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-8 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'text-primary bg-orange-50'
                            : 'text-secondary hover:bg-orange-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <a href="tel:+923336479447" className="flex items-center gap-2 px-4 py-2 text-sm text-secondary">
                    <Phone size={14} className="text-primary" />
                    0333-6479447
                  </a>
                  <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="flex items-center gap-2 px-4 py-2 text-sm text-secondary">
                    <Mail size={14} className="text-primary" />
                    alfacorporateandtaxconsultants@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
