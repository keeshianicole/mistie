import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Star, CheckCircle, PhoneCall, ArrowLeftIcon } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import CTASection from '../components/common/CTASection';
import BlogPreview from '../components/common/BlogPreview';

// Data
import { getCityBySlug, getNearbyCities, City } from '../data/citiesData';
import { getFeaturedPosts } from '../data/blogData';

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const navigate = useNavigate();
  
  const city = getCityBySlug(citySlug || '');
  const nearbyCities = city ? getNearbyCities(city.slug, 5) : [];
  const featuredPosts = getFeaturedPosts(2);

  const getUniqueContent = (city: City) => {
    const waterManagementTips = [
      (city.floodRisk || 'moderate').includes('high') ? 
        "Regular sump pump maintenance is critical in high-risk flood areas" :
        "Preventative maintenance helps ensure system reliability",
      (city.waterTable || 'normal').includes('high') ?
        "Battery backup systems are essential due to the high water table" :
        "Consider a backup system for added protection",
    ];

    return {
      intro: `${city.name} homeowners face unique challenges when it comes to basement water management. ${city.description || 'Our team provides expert sump pump services tailored to local conditions.'}`,
      floodRisk: `${city.name}'s ${city.floodRisk || 'varying flood risk levels'} requires specialized attention to basement water protection.`,
      commonIssues: city.commonIssues || [
        "Aging sump pump systems",
        "Storm-related flooding",
        "Power outage concerns"
      ],
      landmarks: city.landmarks?.length ? 
        `Our service area includes ${city.landmarks.join(', ')}, and all surrounding neighborhoods.` :
        `Our service area covers all neighborhoods in ${city.name}.`,
      waterTable: `With ${city.waterTable || 'local water table conditions'}, proper sump pump system design and maintenance is essential.`,
      tips: waterManagementTips,
    };
  };
  
  if (!city) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
        <p className="mb-8">The city page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          Return to Homepage
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <SEO 
        title={`Sump Pump Services in ${city.name}, NJ`}
        description={`Professional sump pump repair, installation, and maintenance services in ${city.name}, Bergen County, NJ. 24/7 emergency service available.`}
        canonicalUrl={`/locations/${city.slug}`}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="container-custom relative z-10">
          <button 
            onClick={() => navigate('/locations')}
            className="inline-flex items-center text-white hover:text-primary-300 transition mb-6"
          >
            <ArrowLeftIcon size={16} className="mr-2" />
            All Service Areas
          </button>
          
          <div className="flex items-center mb-4">
            <MapPin size={24} className="text-accent-400 mr-2" />
            <span className="text-primary-200 text-lg font-medium">Bergen County, NJ</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sump Pump Services in {city.name}, NJ
          </h1>
          
          <p className="text-xl text-primary-100 max-w-3xl mb-8">
            Professional sump pump repair, installation, maintenance, and emergency services for {city.name} homeowners. Available 24/7 throughout Bergen County.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9733298158" className="btn btn-accent btn-lg inline-flex items-center">
              <PhoneCall size={18} className="mr-2" />
              Call For Service: 973-329-8158
            </a>
            <Link 
              to="/contact" 
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-800"
            >
              Request Free Estimate
            </Link>
          </div>
          
          <div className="mt-12 bg-primary-800/60 rounded-lg p-6 max-w-md">
            <div className="flex items-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-accent-400 fill-accent-400 mr-1"
                />
              ))}
              <span className="ml-2 text-lg font-medium">5-Star Rated Service</span>
            </div>
            {/* Major cities testimonials */}
            {city.name === "Hackensack" ? (
              <>
                <p className="text-primary-100 italic">
                  "Their emergency response was incredible. They came out at 2 AM during a severe thunderstorm when our basement started flooding. Professional, efficient, and saved us from major water damage."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Michael Chen, Hackensack Resident
                </p>
              </>
            ) : city.name === "Paramus" ? (
              <>
                <p className="text-primary-100 italic">
                  "Best sump pump service in Bergen County! They installed a new system with battery backup that's been working flawlessly. Their attention to detail and expertise is unmatched."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Jennifer Martinez, Paramus Resident
                </p>
              </>
            ) : city.name === "Fort Lee" ? (
              <>
                <p className="text-primary-100 italic">
                  "After years of basement flooding issues, they finally solved our problem with a properly sized sump pump system. Their knowledge of Fort Lee's specific challenges made all the difference."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — David Kim, Fort Lee Resident
                </p>
              </>
            ) : city.name === "Ridgewood" ? (
              <>
                <p className="text-primary-100 italic">
                  "Fantastic maintenance service! They caught a failing pump before it could cause any problems. Their preventative approach has saved us thousands in potential water damage."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Sarah Thompson, Ridgewood Resident
                </p>
              </>
            ) : city.name === "Teaneck" ? (
              <>
                <p className="text-primary-100 italic">
                  "They installed a battery backup system that kept our basement dry during Hurricane Ida when many neighbors had flooding. Worth every penny for the peace of mind."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Robert Patel, Teaneck Resident
                </p>
              </>
            ) : city.name === "Englewood" ? (
              <>
                <p className="text-primary-100 italic">
                  "The most reliable sump pump service I've ever used. Their response time is amazing, and their technicians really know their stuff. Highly recommend!"
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Maria Rodriguez, Englewood Resident
                </p>
              </>
            ) : city.name === "Mahwah" ? (
              <>
                <p className="text-primary-100 italic">
                  "Living in a hilly area of Mahwah, we needed a specialized solution. They designed and installed a custom system that handles our unique drainage challenges perfectly."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — James Wilson, Mahwah Resident
                </p>
              </>
            ) : city.name === "Rutherford" ? (
              <>
                <p className="text-primary-100 italic">
                  "When our old sump pump failed, they responded within an hour. The team was professional, knowledgeable, and installed a new system that's much quieter than our old one."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Emily Davis, Rutherford Resident
                </p>
              </>
            ) : city.name === "Fair Lawn" ? (
              <>
                <p className="text-primary-100 italic">
                  "We've used their maintenance service for two years now. They're always thorough, punctual, and take the time to explain everything. Great preventative care!"
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Thomas Anderson, Fair Lawn Resident
                </p>
              </>
            ) : city.name === "Garfield" ? (
              <>
                <p className="text-primary-100 italic">
                  "After the last major storm, they upgraded our system with a more powerful pump and battery backup. Now we never worry about flooding, even during power outages."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Lisa Nguyen, Garfield Resident
                </p>
              </>
            ) : city.name === "Bergenfield" ? (
              <>
                <p className="text-primary-100 italic">
                  "Excellent diagnostic skills! They quickly identified why our pump was cycling too frequently and fixed the issue the same day. Very impressed with their expertise."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Richard Taylor, Bergenfield Resident
                </p>
              </>
            ) : city.name === "Dumont" ? (
              <>
                <p className="text-primary-100 italic">
                  "They installed our sump pump system five years ago, and it's been flawless. Annual maintenance keeps everything running perfectly. Great long-term investment!"
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Amanda Foster, Dumont Resident
                </p>
              </>
            ) : city.name === "Glen Rock" ? (
              <>
                <p className="text-primary-100 italic">
                  "The most knowledgeable sump pump team I've worked with. They understood the unique challenges of our older home and provided the perfect solution."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — William Hayes, Glen Rock Resident
                </p>
              </>
            ) : city.name === "River Edge" ? (
              <>
                <p className="text-primary-100 italic">
                  "Being close to the Hackensack River, we needed reliable flood protection. Their system has kept our basement dry through several major storms."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — Patricia Morgan, River Edge Resident
                </p>
              </>
            ) : (
              <>
                <p className="text-primary-100 italic">
                  "Highly professional service from start to finish. They really understand {city.name}'s specific drainage challenges and installed the perfect system for our needs."
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  — {(() => {
                    const names = [
                      "Michael Stevens",
                      "Rachel Wong",
                      "Daniel Miller",
                      "Sophie Bennett",
                      "Anthony Parker",
                      "Elena Santos",
                      "Christopher Lee",
                      "Olivia Chen"
                    ];
                    return names[Math.floor(Math.random() * names.length)];
                  })()}, {city.name} Resident
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Expert Sump Pump Services in {city.name}, New Jersey
              </h2>
              
              <p className="text-lg mb-6">
                {getUniqueContent(city).intro}
              </p>
              
              <p className="mb-6">
                {getUniqueContent(city).floodRisk} Our team offers comprehensive sump pump solutions tailored to local conditions, including professional repairs, new system installations, preventative maintenance, emergency services, and battery backup systems.
              </p>
              
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100 mb-8">
                <h3 className="text-xl font-semibold mb-4">Common Sump Pump Issues in {city.name}</h3>
                
                <div className="space-y-4">
                  {getUniqueContent(city).commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-lg">{issue}</h4>
                      <p className="text-secondary-600">
                        Our experienced technicians are equipped to address these challenges with proven solutions.
                      </p>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Why {city.name} Homeowners Choose Us
              </h3>
              
              <p className="mb-6">
                {city.name} residents trust NJ Sump Pump Experts for all their sump pump needs because of our:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Local Expertise</h4>
                  <p className="text-sm text-secondary-600">
                    Deep understanding of {city.name}'s specific drainage challenges and flood risks.
                  </p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Rapid Response</h4>
                  <p className="text-sm text-secondary-600">
                    Quick service throughout {city.name}, typically arriving within 60-90 minutes for emergencies.
                  </p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Specialized Knowledge</h4>
                  <p className="text-sm text-secondary-600">
                    Unlike general contractors, we focus exclusively on sump pump systems.
                  </p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Quality Guarantees</h4>
                  <p className="text-sm text-secondary-600">
                    All our work in {city.name} is backed by comprehensive satisfaction guarantees.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Common Sump Pump Issues in {city.name}, NJ
              </h3>
              
              <p className="mb-6">
                {city.name} homes often experience these common sump pump problems that require professional attention:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Pump failure during heavy rainfall or snowmelt</li>
                <li>Unusual noises indicating mechanical issues</li>
                <li>Insufficient pumping capacity for water volume</li>
                <li>Switch malfunctions causing improper cycling</li>
                <li>Discharge line clogs or freezing in winter</li>
                <li>Power outages disabling primary pumps during storms</li>
              </ul>
              
              <p className="mb-6">
                Our technicians are experts at quickly diagnosing and resolving these issues for {city.name} homeowners, often in a single visit.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-8">
                <h3 className="text-xl font-semibold mb-4">Emergency Sump Pump Service in {city.name}</h3>
                <p className="mb-4">
                  Experiencing a sump pump emergency in {city.name}? Our rapid response team is available 24/7 to help prevent or minimize water damage to your home.
                </p>
                <a 
                  href="tel:9733298158" 
                  className="btn btn-accent w-full text-center"
                >
                  Call Now: 973-329-8158
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Sump Pump Installation in {city.name}, NJ
              </h3>
              
              <p className="mb-6">
                When installing a new sump pump system in your {city.name} home, we consider several critical factors:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Proper Sizing</h4>
                  <p className="text-secondary-600">
                    We assess your home's specific needs to install a correctly sized pump that can handle your water volume without overworking.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Quality Components</h4>
                  <p className="text-secondary-600">
                    We install only professional-grade pumps and components designed for reliability in {city.name}'s conditions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Backup Systems</h4>
                  <p className="text-secondary-600">
                    We strongly recommend battery backup systems for {city.name} homes to provide protection during power outages.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Proper Discharge</h4>
                  <p className="text-secondary-600">
                    We ensure water is discharged properly according to {city.name} codes and in a way that prevents recirculation.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Service Area Coverage
              </h3>
              
              <p className="mb-4">
                In addition to {city.name}, we provide sump pump services throughout Bergen County, including these nearby communities:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 mb-8">
                {nearbyCities.map(nearbyCity => (
                  <Link
                    key={nearbyCity.slug}
                    to={`/locations/${nearbyCity.slug}`}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {nearbyCity.name}, NJ
                  </Link>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Contact Us for {city.name} Sump Pump Services
              </h3>
              
              <p className="mb-6">
                Whether you need emergency repair, routine maintenance, or a new sump pump installation in {city.name}, our team is ready to help. Contact us today for prompt, professional service throughout Bergen County.
              </p>
              
              {/* Local Resources Section */}
              {city.outboundLinks && city.outboundLinks.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Local {city.name} Resources
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Learn more about {city.name} and local water management resources through these trusted sources:
                  </p>
                  <div className="space-y-6">
                    {city.outboundLinks.map((link, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-primary-600 hover:text-primary-700"
                        >
                          {link.title} →
                        </a>
                        <p className="text-secondary-600 mt-1">
                          {link.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9733298158" className="btn btn-primary inline-flex items-center">
                  <PhoneCall size={18} className="mr-2" />
                  Call: 973-329-8158
                </a>
                <Link to="/contact" className="btn btn-outline border-primary-600">
                  Request Free Estimate
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Free Estimate</h3>
                  <p className="mb-4 text-secondary-600">
                    Request a free estimate for sump pump services in {city.name}, NJ.
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center mb-4">
                    Request Estimate
                  </Link>
                  <p className="text-sm text-center text-secondary-500">
                    Or call us directly at <a href="tel:9733298158" className="font-semibold text-primary-600">973-329-8158</a>
                  </p>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                      <Link to="/services/sump-pump-repair/" className="hover:text-primary-600">
                        Sump Pump Repair
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                      <Link to="/services/sump-pump-installation/" className="hover:text-primary-600">
                        Sump Pump Installation
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                      <Link to="/services/sump-pump-maintenance/" className="hover:text-primary-600">
                        Sump Pump Maintenance
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                      <Link to="/services/emergency-sump-pump-service/" className="hover:text-primary-600">
                        Emergency Service
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                      <Link to="/services/battery-backup-installation/" className="hover:text-primary-600">
                        Battery Backup Installation
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Service Area</h3>
                  <p className="mb-2 text-secondary-600">
                    We serve all of Bergen County, including:
                  </p>
                  <div className="grid grid-cols-1 gap-y-1 text-sm mb-4">
                    {nearbyCities.slice(0, 6).map(nearbyCity => (
                      <Link
                        key={nearbyCity.slug}
                        to={`/locations/${nearbyCity.slug}`}
                        className="text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        {nearbyCity.name}, NJ
                      </Link>
                    ))}
                  </div>
                  <Link to="/locations" className="text-primary-600 text-sm hover:underline">
                    View All Service Areas →
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Recent Articles</h3>
                  <div className="space-y-4">
                    {featuredPosts.map(post => (
                      <div key={post.id} className="flex items-start">
                        <div 
                          className="w-16 h-16 rounded-md bg-cover bg-center flex-shrink-0 mr-3"
                          style={{ backgroundImage: `url(${post.image})` }}
                        ></div>
                        <div>
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="font-medium hover:text-primary-600 transition line-clamp-2 text-sm"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-secondary-500 mt-1">
                            {post.readTime} min read
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/blog" className="text-primary-600 text-sm hover:underline block mt-4">
                    View All Articles →
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

export default CityPage;