import { useState, useRef } from 'react';
import { Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CTASection = () => {
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
    alert('Thank you for your request. We will contact you shortly!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section className="bg-primary-900 text-white py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Free Estimate for Your Sump Pump Needs
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Don't wait until it's too late! Get a free estimate for any sump pump service in Bergen County, NJ. 
              Our experts are ready to help with repairs, installations, or maintenance.
            </p>
            <div className="bg-primary-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Phone size={20} className="mr-2" /> 
                Emergency Service Available 24/7
              </h3>
              <p className="mb-4 text-white text-lg">
                Flooded basement? Sump pump failure during a storm? We provide emergency services 
                throughout Bergen County at any hour.
              </p>
              <a 
                href="tel:9733298158" 
                className="btn btn-accent btn-lg w-full text-center"
              >
                Call Now: 973-329-8158
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <div className="flex items-center">
                <div className="bg-primary-700 h-12 w-12 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl font-bold">10+</span>
                </div>
                <span className="text-white">Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-700 h-12 w-12 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl font-bold">24/7</span>
                </div>
                <span className="text-white">Emergency Service</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-700 h-12 w-12 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl font-bold">70+</span>
                </div>
                <span className="text-white">Cities Served</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-secondary-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Get Your Free Estimate</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
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
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
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
                  <label htmlFor="service" className="block text-sm font-medium text-black mb-1">
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
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Message / Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Please describe your sump pump issue or service needs"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Request Free Estimate
              </button>
              
              <p className="text-xs text-black mt-4 text-center">
                By submitting this form, you agree to be contacted regarding your service request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;