import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronDown } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import CTASection from '../components/common/CTASection';

// Data
import { services, getServiceBySlug } from '../data/servicesData';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(serviceSlug || '');

  if (!service) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/services" className="btn btn-primary">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${service.title} | NJ Sump Pump Experts`}
        description={service.fullDescription}
        canonicalUrl={`/services/${service.slug}`}
      />
      
      <PageHeader 
        title={service.title}
        subtitle={service.shortDescription}
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <button 
            onClick={() => navigate('/services')}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to All Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <service.icon size={32} className="text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              
              <p className="text-lg mb-8">
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
              </Link>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">{service.process.title}</h3>
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
      
      <CTASection />
    </>
  );
};

export default ServiceDetailPage;