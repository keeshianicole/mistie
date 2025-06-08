import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="service-card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black flex-grow mb-4">{description}</p>
      <Link 
        to={`/services/${link}`}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-auto"
      >
        Learn More
        <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;