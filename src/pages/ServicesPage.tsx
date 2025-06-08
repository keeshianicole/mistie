import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import CTASection from '../components/common/CTASection';

// Data
import { services } from '../data/servicesData';

const ServicesPage = () => {
  const { serviceSlug } = useParams();
  
  // If serviceSlug is provided, scroll to that section
  useEffect(() => {
    if (serviceSlug) {
      const element = document.getElementById(serviceSlug);
      if (element) {
        // Add offset for header
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [serviceSlug]);

  return (
    <>
      <SEO 
        title="Bergen County Sump Pump Services"
        description="Expert sump pump repair, installation, maintenance, and emergency services in Bergen County. Available 24/7 with professional technicians and guaranteed satisfaction."
        keywords="sump pump repair near me, sump pump installation near me, cost of sump pump installation in NJ, sump pump replacement cost NJ, battery backup sump pump installation NJ, water-powered backup sump pump NJ, sump pump inspection service NJ"
        canonicalUrl="/services"
      />
      
      <PageHeader 
        title="Our Sump Pump Services"
        subtitle="Professional sump pump solutions throughout Bergen County"
        bgImage="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Sump Pump Solutions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              From emergency repairs to new installations and preventative maintenance, we provide specialized sump pump services tailored to Bergen County's unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="service-card flex flex-col">
                <div className="text-primary-600 mb-4">
                  <service.icon size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary-600 flex-grow mb-4">{service.shortDescription}</p>
                <Link 
                  to={`/services/${service.slug}/`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-auto"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.slug}
          className={`py-20 ${index % 2 === 0 ? 'bg-secondary-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                <div className="flex items-center mb-4">
                  <service.icon size={32} className="text-primary-600 mr-3" />
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                
                <p className="text-lg mb-6">
                  {service.fullDescription}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn btn-primary inline-flex items-center">
                  Request This Service
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className={`${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold mb-2">{service.process.title}</h3>
                    <ul className="space-y-4">
                      {service.process.steps.map((step, i) => (
                        <li key={i} className="flex">
                          <div className="flex-shrink-0 mr-3">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600 font-semibold text-sm">
                              {i + 1}
                            </div>
                          </div>
                          <span className="text-secondary-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {service.faqs.map((faq, i) => (
                        <details key={i} className="group">
                          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>{faq.question}</span>
                            <ChevronDown className="transition group-open:rotate-180" size={20} />
                          </summary>
                          <p className="text-secondary-600 mt-3 group-open:animate-fadeIn">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Why Choose Us */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose NJ Sump Pump Experts?
            </h2>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              We specialize exclusively in sump pump systems, allowing us to provide superior service compared to general contractors or plumbers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary-300 mb-2">01</div>
              <h3 className="text-xl font-semibold mb-2">Specialized Expertise</h3>
              <p className="text-primary-100">
                Unlike general contractors, we focus solely on sump pump systems, giving us deeper knowledge and faster problem-solving capabilities.
              </p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary-300 mb-2">02</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-primary-100">
                Emergency service available around the clock, ensuring you're protected when flooding risks are highest during storms and power outages.
              </p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary-300 mb-2">03</div>
              <h3 className="text-xl font-semibold mb-2">Local Knowledge</h3>
              <p className="text-primary-100">
                Our deep understanding of Bergen County's specific flooding risks, soil conditions, and water table issues informs better solutions.
              </p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary-300 mb-2">04</div>
              <h3 className="text-xl font-semibold mb-2">Complete Solutions</h3>
              <p className="text-primary-100">
                We offer end-to-end services from assessment to installation, repair, and ongoing maintenance, providing comprehensive protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default ServicesPage;