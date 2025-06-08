import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import CTASection from '../components/common/CTASection';

// Data
import { bergenCountyCities } from '../data/citiesData';

const LocationsPage = () => {
  return (
    <>
      <SEO 
        title="Bergen County Sump Pump Services | All Areas Served"
        description="Professional sump pump services throughout Bergen County, NJ. Fast response times, expert technicians, and comprehensive services in all municipalities. Find your local service area."
        keywords="sump pump repair Bergen County, sump pump installation Bergen County, emergency sump pump service Bergen County, sump pump contractor Bergen County, local sump pump service NJ"
        canonicalUrl="/locations"
      />
      
      <PageHeader 
        title="Our Service Areas"
        subtitle="Professional sump pump services throughout Bergen County, New Jersey"
        bgImage="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Serving All Bergen County Communities
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our expert technicians are strategically located throughout Bergen County to provide rapid response for all your sump pump needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {bergenCountyCities.map((city) => (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}`}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group"
              >
                <div className="flex items-start">
                  <MapPin className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary-600 transition-colors">
                      {city.name}, NJ
                    </h3>
                    <p className="text-sm text-secondary-600 line-clamp-2">
                      {city.description || "Professional sump pump services available in this area"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 bg-primary-50 border border-primary-100 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Need Sump Pump Service?
                </h3>
                <p className="text-lg mb-6">
                  Our expert technicians are available 24/7 throughout Bergen County for all your sump pump needs:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                    Emergency repairs and service
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                    New sump pump installations
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                    Preventative maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                    Battery backup systems
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Contact Us Today</h4>
                <p className="mb-6">
                  Get professional sump pump service throughout Bergen County. Available 24/7 for emergencies.
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:9733298158"
                    className="btn btn-accent w-full text-center"
                  >
                    Call: 973-329-8158
                  </a>
                  <Link
                    to="/contact"
                    className="btn btn-primary w-full text-center"
                  >
                    Request Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default LocationsPage;