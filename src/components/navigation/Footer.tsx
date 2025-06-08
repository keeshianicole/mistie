import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';
import CitiesList from '../common/CitiesList';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Logo className="h-10 w-auto" isWhite={true} />
              <span className="ml-2 text-lg font-bold text-white">
                NJ Sump Pump Experts
              </span>
            </Link>
            <p className="text-primary-100 mb-4">
              Your trusted sump pump service provider in Bergen County, NJ. We offer professional repair, installation, maintenance, and emergency services.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:9733298158" 
                className="flex items-center text-white hover:text-primary-300 transition-colors"
              >
                <Phone size={16} className="mr-2" />
                973-329-8158
              </a>
              <a 
                href="mailto:info@njsumppumpexperts.com" 
                className="flex items-center text-white hover:text-primary-300 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                info@njsumppumpexperts.com
              </a>
              <div className="flex items-start text-primary-100">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Serving all of Bergen County, NJ</span>
              </div>
              <div className="flex items-start text-primary-100">
                <Clock size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>24/7 Emergency Services Available</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/sump-pump-repair" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Sump Pump Repair
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/sump-pump-installation" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Sump Pump Installation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/sump-pump-maintenance" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Sump Pump Maintenance
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/emergency-sump-pump-service" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Emergency Sump Pump Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/battery-backup-installation" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Battery Backup Installation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-primary-100 hover:text-primary-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-1" />
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              Service Areas
            </h4>
            <p className="text-primary-100 mb-2">We serve all cities in Bergen County, including:</p>
            <div className="text-xs">
              <CitiesList limit={10} footerStyle={true} />
              <Link to="/locations" className="text-primary-300 hover:text-primary-400 mt-2 inline-block">
                View All Locations →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-primary-800 text-primary-200 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} NJ Sump Pump Experts. All Rights Reserved.</p>
            <div className="mt-2 md:mt-0">
              <Link to="/privacy-policy" className="text-primary-200 hover:text-white mr-4">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-primary-200 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;