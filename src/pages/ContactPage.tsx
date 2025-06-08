import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Components
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        'service_txp59d7',
        'template_slgd6s9',
        formRef.current,
        '0AjrITVqX6e-BLcxM'
      );

      // Send a copy to Rose Miller
      await emailjs.send(
        'service_txp59d7',
        'template_slgd6s9',
        {
          to_email: 'rosemiller045@gmail.com',
          ...formData
        },
        '0AjrITVqX6e-BLcxM'
      );
    } catch (error) {
      console.error('Failed to send email:', error);
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you shortly!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <>
      <SEO 
        title="Contact NJ Sump Pump Experts | 24/7 Emergency Service Available"
        description="Contact Bergen County's leading sump pump experts for immediate service, free estimates, and 24/7 emergency repairs. Serving all Bergen County communities with professional sump pump solutions."
        keywords="emergency sump pump repair NJ, sump pump service Bergen County, 24/7 sump pump repair NJ, sump pump contractor near me, basement flooding emergency service NJ, sump pump installation estimate NJ"
        canonicalUrl="/contact"
      />
      
      <PageHeader 
        title="Contact NJ Sump Pump Experts"
        subtitle="Get in touch for sump pump services throughout Bergen County"
      />
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-secondary-600 mb-1">For service requests and inquiries:</p>
                    <a href="tel:9733298158" className="text-primary-600 font-medium">973-329-8158</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-secondary-600 mb-1">Send us an email:</p>
                    <a href="mailto:info@njsumppumpexperts.com" className="text-primary-600 font-medium">info@njsumppumpexperts.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Service Area</h3>
                    <p className="text-secondary-600">
                      We proudly serve all towns and municipalities throughout Bergen County, New Jersey.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Clock size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                    <p className="text-secondary-600 mb-1">Regular service hours:</p>
                    <p className="text-secondary-800">Monday - Friday: 7:00 AM - 8:00 PM</p>
                    <p className="text-secondary-800">Saturday: 8:00 AM - 5:00 PM</p>
                    <p className="text-secondary-800">Sunday: By appointment</p>
                    <p className="text-accent-600 font-semibold mt-2">
                      Emergency service available 24/7
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-primary-50 rounded-lg border border-primary-100">
                <h3 className="text-xl font-semibold mb-3">Emergency Service</h3>
                <p className="mb-4">
                  Experiencing a sump pump emergency? Don't wait! Our emergency team is available 24/7 throughout Bergen County.
                </p>
                <a 
                  href="tel:9733298158" 
                  className="btn btn-accent w-full text-center"
                >
                  Call Our Emergency Line: 973-329-8158
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-1">
                        Service Needed*
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a Service</option>
                        <option value="repair">Sump Pump Repair</option>
                        <option value="installation">Sump Pump Installation</option>
                        <option value="maintenance">Sump Pump Maintenance</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="backup">Battery Backup Installation</option>
                        <option value="estimate">Free Estimate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Message / Details*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Please describe your sump pump needs or questions..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                  
                  <p className="text-xs text-secondary-500 mt-4 text-center">
                    By submitting this form, you agree to be contacted regarding your service request.
                  </p>
                </form>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Contact Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">How quickly can you respond to my service request?</h4>
                    <p className="text-secondary-600">
                      For standard service requests, we typically schedule appointments within 24-48 hours. Emergency service is available with same-day response throughout Bergen County.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Do you offer free estimates?</h4>
                    <p className="text-secondary-600">
                      Yes, we provide free estimates for new installations and major repairs. Diagnostic fees may apply for troubleshooting existing systems but are credited toward repair costs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">What areas do you serve?</h4>
                    <p className="text-secondary-600">
                      We service all towns and municipalities throughout Bergen County, including Hackensack, Paramus, Fort Lee, Ridgewood, and all surrounding areas.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">How can I request emergency service?</h4>
                    <p className="text-secondary-600">
                      For emergency sump pump service, simply call our emergency line at 973-329-8158. This line is monitored 24/7, and we dispatch technicians immediately for flooding situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              NJ Sump Pump Experts proudly serves all of Bergen County, with technicians strategically located throughout the region to provide fast response times.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193175.28647764967!2d-74.11736548595298!3d40.93362612433659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa8500ee3b15%3A0xc8f99403063a500!2sBergen%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1657304121272!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bergen County Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;