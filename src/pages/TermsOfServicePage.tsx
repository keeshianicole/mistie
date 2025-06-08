import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';

const TermsOfServicePage = () => {
  return (
    <>
      <SEO 
        title="Terms of Service | NJ Sump Pump Experts"
        description="Terms of service and conditions for NJ Sump Pump Experts services in Bergen County."
        canonicalUrl="/terms-of-service"
      />
      
      <PageHeader 
        title="Terms of Service"
        subtitle="Our service agreement and policies"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="prose max-w-none">
            <h2>Service Agreement</h2>
            <p>
              By using our services, you agree to these terms and conditions. We provide
              professional sump pump services throughout Bergen County, NJ.
            </p>

            <h2>Service Appointments</h2>
            <p>
              We strive to arrive within the scheduled appointment window. If we're unable
              to meet this commitment, we'll provide a discount on your service fee.
            </p>

            <h2>Warranties and Guarantees</h2>
            <ul>
              <li>1-year warranty on repairs (parts and labor)</li>
              <li>2-year warranty on new installations</li>
              <li>100% satisfaction guarantee</li>
              <li>Emergency service guarantee</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Payment is due upon completion of service. We accept major credit cards,
              checks, and cash. Financing options are available for larger projects.
            </p>

            <h2>Cancellation Policy</h2>
            <p>
              Please provide 24-hour notice for appointment cancellations. Emergency
              service cancellations are handled case-by-case.
            </p>

            <h2>Contact Us</h2>
            <p>
              For questions about these terms, please{' '}
              <Link to="/contact" className="text-primary-600 hover:text-primary-700">
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;