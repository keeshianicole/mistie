import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, MapPin, PenTool as Tool, ThumbsUp } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import CTASection from '../components/common/CTASection';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About NJ Sump Pump Experts | Trusted Bergen County Sump Pump Service"
        description="NJ Sump Pump Experts: Bergen County's most trusted sump pump service provider since 2015. Learn about our experienced team, commitment to quality, and comprehensive services."
        keywords="sump pump contractor New Jersey, New Jersey sump pump company, best sump pump installer NJ, sump pump experts Bergen County, professional sump pump service NJ, licensed sump pump contractor NJ"
        canonicalUrl="/about"
      />
      
      <PageHeader 
        title="About NJ Sump Pump Experts"
        subtitle="Bergen County's trusted sump pump service provider since 2015"
        bgImage="https://images.pexels.com/photos/5725202/pexels-photo-5725202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                NJ Sump Pump Experts was founded in 2015 with a simple mission: to provide specialized, reliable sump pump services to homeowners throughout Bergen County, New Jersey.
              </p>
              <p className="mb-6">
                After witnessing the devastating effects of Hurricane Sandy and the subsequent flooding that affected so many Bergen County homes, our founder recognized a critical need in the market. While many plumbers and general contractors offered sump pump services as a small part of their business, few truly specialized in these critical systems.
              </p>
              <p className="mb-6">
                We built our company on the principle that basement flood protection deserves specialized expertise. By focusing exclusively on sump pump systems, we've developed deeper knowledge, faster diagnostic skills, and more effective solutions than generalist competitors.
              </p>
              <p className="mb-6">
                Today, we're proud to be Bergen County's leading sump pump specialists, serving homeowners with prompt, professional service throughout the region. Our team of certified technicians works around the clock to keep basements dry and homes protected from water damage.
              </p>
            </div>
            
            <div>
              <div 
                className="h-96 rounded-lg overflow-hidden bg-cover bg-center"
                style={{ 
                  backgroundImage: "url(https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
                }}
              ></div>
              
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div 
                  className="h-48 rounded-lg overflow-hidden bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url(https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
                  }}
                ></div>
                <div 
                  className="h-48 rounded-lg overflow-hidden bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url(https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the service we provide to our customers throughout Bergen County.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Shield className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-secondary-600">
                We understand that sump pump systems must work flawlessly when needed most. We build reliability into every service we provide, from repairs to installations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Users className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Customer-First Approach</h3>
              <p className="text-secondary-600">
                We prioritize your needs, schedule, and budget. Our team communicates clearly, arrives on time, and treats your home with respect throughout every service call.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Award className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-secondary-600">
                We're committed to performing the highest quality work on every job. Our technicians are continuously trained on the latest techniques and technologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <MapPin className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-secondary-600">
                As a Bergen County company, we understand the specific challenges our local climate and geography present for basement water management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Tool className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Specialization</h3>
              <p className="text-secondary-600">
                Unlike general contractors, we focus exclusively on sump pump systems, allowing us to develop deeper expertise and better solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <ThumbsUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-secondary-600">
                We provide honest assessments, transparent pricing, and never recommend unnecessary services or parts. Your trust is our most valuable asset.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our technicians are the heart of our company, bringing years of specialized experience and dedication to every service call.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="h-64 rounded-lg overflow-hidden bg-cover bg-center mb-4"
                style={{ 
                  backgroundImage: "url(https://images.pexels.com/photos/8961459/pexels-photo-8961459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
                }}
              ></div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-primary-600">Lead Technician</p>
              <p className="text-secondary-600 mt-2">
                With over 15 years of experience in sump pump systems, Mike leads our technical team and specializes in complex installations.
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="h-64 rounded-lg overflow-hidden bg-cover bg-center mb-4"
                style={{ 
                  backgroundImage: "url(https://images.pexels.com/photos/7660328/pexels-photo-7660328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
                }}
              ></div>
              <h3 className="text-xl font-semibold">Sarah Martinez</h3>
              <p className="text-primary-600">Service Manager</p>
              <p className="text-secondary-600 mt-2">
                Sarah ensures our customer service exceeds expectations, coordinating our service team and managing emergency response.
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="h-64 rounded-lg overflow-hidden bg-cover bg-center mb-4"
                style={{ 
                  backgroundImage: "url(https://images.pexels.com/photos/8962161/pexels-photo-8962161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
                }}
              ></div>
              <h3 className="text-xl font-semibold">David Chen</h3>
              <p className="text-primary-600">Senior Technician</p>
              <p className="text-secondary-600 mt-2">
                David specializes in diagnostics and repair, with particular expertise in battery backup systems and smart pump technology.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg">
              Our entire team is fully licensed, insured, and factory-trained on all major sump pump brands and models.
            </p>
          </div>
        </div>
      </section>
      
      {/* Credentials Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Credentials</h2>
              <p className="mb-6">
                At NJ Sump Pump Experts, we maintain the highest standards of professionalism and expertise in our field. Our credentials include:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold">New Jersey Home Improvement Contractor License</span>
                    <p className="text-secondary-600">Fully licensed to perform residential services throughout New Jersey</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold">$2 Million Liability Insurance</span>
                    <p className="text-secondary-600">Comprehensive coverage that exceeds industry standards</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold">Factory Certified Technicians</span>
                    <p className="text-secondary-600">Certified by major manufacturers including Zoeller, Liberty, and Wayne</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold">Better Business Bureau A+ Rating</span>
                    <p className="text-secondary-600">Highest rating for business practices and customer satisfaction</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold">EPA Certified</span>
                    <p className="text-secondary-600">Compliant with all environmental regulations for water management</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold">5-Star Google Reviews</span>
                    <p className="text-secondary-600">Consistently rated 5 stars by our customers throughout Bergen County</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6">Our Service Guarantee</h3>
                <p className="mb-6">
                  We stand behind our work with Bergen County's most comprehensive service guarantees:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary-50 rounded-md border-l-4 border-primary-500">
                    <h4 className="font-semibold mb-1">100% Satisfaction Guarantee</h4>
                    <p className="text-sm">
                      If you're not completely satisfied with our service, we'll make it right or refund your money.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary-50 rounded-md border-l-4 border-primary-500">
                    <h4 className="font-semibold mb-1">1-Year Parts & Labor Warranty</h4>
                    <p className="text-sm">
                      All repairs are backed by a comprehensive warranty covering both parts and labor.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary-50 rounded-md border-l-4 border-primary-500">
                    <h4 className="font-semibold mb-1">New Installation Guarantee</h4>
                    <p className="text-sm">
                      New installations include extended 2-year warranty coverage on all components and workmanship.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary-50 rounded-md border-l-4 border-primary-500">
                    <h4 className="font-semibold mb-1">On-Time Service Guarantee</h4>
                    <p className="text-sm">
                      We'll arrive within our scheduled window or we'll discount your service fee by $50.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default AboutPage;