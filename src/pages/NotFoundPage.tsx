import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, Phone } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="Sorry, the page you're looking for cannot be found. Please visit our homepage or contact us for immediate sump pump service in Bergen County."
        keywords="sump pump service NJ, emergency sump pump repair, basement flood prevention, sump pump installation Bergen County"
        canonicalUrl="/404"
      />
      
      <div className="min-h-[70vh] flex items-center justify-center py-16">
        <div className="container-custom text-center px-6">
          <div className="mb-8 flex justify-center">
            <AlertCircle size={80} className="text-primary-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-12">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary inline-flex items-center">
              <Home size={18} className="mr-2" />
              Return to Homepage
            </Link>
            
            <a href="tel:9733298158" className="btn btn-secondary inline-flex items-center">
              <Phone size={18} className="mr-2" />
              Call Us: 973-329-8158
            </a>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Looking for something specific?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link 
                to="/services" 
                className="p-4 bg-primary-50 rounded-lg border border-primary-100 hover:bg-primary-100 transition"
              >
                Our Services
              </Link>
              
              <Link 
                to="/contact" 
                className="p-4 bg-primary-50 rounded-lg border border-primary-100 hover:bg-primary-100 transition"
              >
                Contact Us
              </Link>
              
              <Link 
                to="/blog" 
                className="p-4 bg-primary-50 rounded-lg border border-primary-100 hover:bg-primary-100 transition"
              >
                Blog Articles
              </Link>
              
              <Link 
                to="/about" 
                className="p-4 bg-primary-50 rounded-lg border border-primary-100 hover:bg-primary-100 transition"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;