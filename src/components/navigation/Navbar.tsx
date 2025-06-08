import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="NJ Sump Pump Experts Home">
          <Logo className="h-10 w-auto" />
          <span className="ml-2 text-lg font-bold text-primary-800 hidden sm:block">
            NJ Sump Pump Experts
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-primary-700 border-b-2 border-primary-500 py-1'
                  : 'text-black hover:text-primary-600 transition-colors py-1'
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href="tel:9733298158" 
            className="btn btn-primary flex items-center ml-2"
          >
            <Phone size={18} className="mr-2" />
            <span className="font-medium">973-329-8158</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <a 
            href="tel:9733298158" 
            className="mr-6 text-primary-700 font-semibold flex items-center"
            aria-label="Call us"
          >
            <Phone size={20} />
          </a>
          <button 
            onClick={toggleMenu}
            className="text-secondary-800 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-fade-in">
            <div className="container-custom py-4 flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-black hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a 
                href="tel:9733298158" 
                className="block py-2 px-4 text-primary-700 font-semibold border-t border-gray-100 mt-2 pt-4"
              >
                <Phone size={18} className="inline mr-2" />
                973-329-8158
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;