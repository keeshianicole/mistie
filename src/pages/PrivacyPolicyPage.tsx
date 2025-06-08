import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | NJ Sump Pump Experts"
        description="Privacy policy and data protection information for NJ Sump Pump Experts customers in Bergen County."
        canonicalUrl="/privacy-policy"
      />
      
      <PageHeader 
        title="Privacy Policy"
        subtitle="How we protect and handle your information"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="prose max-w-none">
            <h2>Information Collection and Use</h2>
            <p>
              We collect information that you provide directly to us when requesting service,
              creating an account, or communicating with us. This may include:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Service address and details</li>
              <li>Payment information</li>
              <li>Service history and preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about appointments</li>
              <li>Send service reminders and updates</li>
              <li>Process payments</li>
              <li>Respond to your requests</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell or share your personal information with third parties except
              as necessary to provide our services or as required by law.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information
              from unauthorized access, alteration, or disclosure.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our privacy practices, please{' '}
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

export default PrivacyPolicyPage;