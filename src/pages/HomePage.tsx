import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Award, PenTool as Tool, Wrench, Timer, Droplets, Zap, Battery } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';
import CTASection from '../components/common/CTASection';
import BlogPreview from '../components/common/BlogPreview';
import CitiesList from '../components/common/CitiesList';

// Data
import { services } from '../data/servicesData';
import { getFeaturedPosts } from '../data/blogData';

const HomePage = () => {
  const featuredPosts = getFeaturedPosts(3);
  
  return (
    <>
      <SEO 
        title="Bergen County Sump Pump Repair, Installation & Maintenance Services"
        description="Professional sump pump services in Bergen County, NJ. We offer expert repair, installation, maintenance, and emergency services available 24/7. Call for a free estimate today!"
        keywords="sump pump repair New Jersey, sump pump installation New Jersey, sump pump service New Jersey, emergency sump pump repair NJ, basement waterproofing, water damage prevention, sump pump maintenance New Jersey, battery backup sump pump installation NJ"
        canonicalUrl="/"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/5217459/pexels-photo-5217459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative container-custom py-16 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Bergen County's Premier Sump Pump Experts
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-primary-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Professional sump pump repair, installation, and maintenance services throughout Bergen County, NJ. Available 24/7 for emergencies.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/contact" className="btn btn-accent btn-lg">
                  Get Free Estimate
                </Link>
                <Link to="/services" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-800">
                  Explore Our Services
                </Link>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-primary-800 text-2xl font-semibold mb-4">
                  Emergency Sump Pump Service Available 24/7
                </h2>
                <p className="mb-4 text-black">
                  Experiencing a sump pump failure or basement flooding? Don't wait - our emergency team is ready to help right away.
                </p>
                <a 
                  href="tel:9733298158" 
                  className="btn btn-accent w-full text-center text-lg"
                >
                  Call Now: 973-329-8158
                </a>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-secondary-900 font-semibold mb-3">
                    Why Choose Us:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ShieldCheck className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-secondary-900">Fully licensed and insured professionals</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-secondary-900">24/7 emergency service throughout Bergen County</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-secondary-900">5-star rated service with 100% satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-accent-500 text-white rounded-full h-24 w-24 flex items-center justify-center text-center p-2 font-bold shadow-lg transform rotate-12">
                <div>
                  <div className="text-sm">Fast</div>
                  <div className="text-lg">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="bg-primary-800 py-8 border-t border-primary-700">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-primary-200">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-primary-200">Emergency Service</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">70+</p>
                <p className="text-primary-200">Bergen County Towns</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-primary-200">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Sump Pump Services
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              From emergency repairs to new installations and regular maintenance, we provide comprehensive sump pump services throughout Bergen County, NJ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={<service.icon size={36} />}
                link={service.slug}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-primary inline-flex items-center">
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose NJ Sump Pump Experts?
              </h2>
              <p className="text-lg text-black mb-8">
                We specialize exclusively in sump pump services throughout Bergen County. Our focused expertise allows us to provide faster, more reliable service than general plumbers or handymen.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Tool size={24} />
                    </div>
                  </div>
                  <div className="text-secondary-900">
                    <h3 className="text-xl font-semibold mb-2">Specialized Expertise</h3>
                    <p className="text-black mb-4">
                      Unlike general contractors, we focus solely on sump pump systems, giving us deeper knowledge and faster problem-solving skills.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Timer size={24} />
                    </div>
                  </div>
                  <div className="text-secondary-900">
                    <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                    <p className="text-black">
                      Our strategically located service teams provide fast response throughout Bergen County, especially important for emergency situations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <Wrench size={24} />
                    </div>
                  </div>
                  <div className="text-secondary-900">
                    <h3 className="text-xl font-semibold mb-2">Fully Stocked Service Vehicles</h3>
                    <p className="text-black">
                      Our trucks carry complete inventories of pumps, parts, and specialized tools, allowing us to complete most repairs in a single visit.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <ShieldCheck size={24} />
                    </div>
                  </div>
                  <div className="text-secondary-900">
                    <h3 className="text-xl font-semibold mb-2">Guaranteed Satisfaction</h3>
                    <p className="text-black">
                      We stand behind our work with industry-leading warranties and a 100% satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-primary-50 rounded-lg border border-primary-100">
                <Droplets className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Flood Prevention</h3>
                <p className="text-black">
                  Our proactive maintenance and quality installations help prevent costly basement flooding and water damage.
                </p>
              </div>
              
              <div className="p-6 bg-primary-50 rounded-lg border border-primary-100">
                <Clock className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-black">
                  Sump pump emergencies don't follow business hours. Our team is available around the clock, every day of the year.
                </p>
              </div>
              
              <div className="p-6 bg-primary-50 rounded-lg border border-primary-100">
                <Battery className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Backup Solutions</h3>
                <p className="text-black">
                  We install reliable battery backup systems that keep your basement protected during power outages.
                </p>
              </div>
              
              <div className="p-6 bg-primary-50 rounded-lg border border-primary-100">
                <Zap className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Fast Troubleshooting</h3>
                <p className="text-black">
                  Our diagnostic expertise allows us to quickly identify issues and implement effective solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              We're proud to maintain a 5-star rating across Bergen County for our sump pump services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Michael Stevens"
              location="Hackensack, NJ"
              rating={5}
              text="Called them during a major storm when our sump pump failed. They arrived within an hour and had everything fixed before any significant water damage occurred. Incredibly responsive and professional service."
              service="Emergency Repair"
            />
            
            <TestimonialCard
              name="Jennifer Rodriguez"
              location="Paramus, NJ"
              rating={5}
              text="Had them install a new sump pump system with battery backup. The technician explained everything clearly, installed it perfectly, and left the work area spotless. Very impressed with their knowledge and professionalism."
              service="New Installation"
            />
            
            <TestimonialCard
              name="David Chen"
              location="Ridgewood, NJ"
              rating={5}
              text="I've been using their annual maintenance service for three years now. They're always on time, thorough, and help keep our system running perfectly. Worth every penny for the peace of mind."
              service="Annual Maintenance"
            />
          </div>
        </div>
      </section>
      
      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving All of Bergen County, NJ
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our service technicians are strategically located throughout Bergen County to provide fast response times to all municipalities.
            </p>
          </div>
          
          <div className="bg-secondary-50 border border-secondary-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Our Service Areas Include:</h3>
            <CitiesList columns={3} />
            
            <div className="mt-8 text-center">
              <Link to="/locations" className="btn btn-primary">
                View All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sump Pump Resources & Tips
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Learn more about maintaining and protecting your sump pump system with our expert advice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <BlogPreview key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog" className="btn btn-primary inline-flex items-center">
              View All Articles
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default HomePage;