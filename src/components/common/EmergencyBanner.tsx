import { Phone, AlertTriangle } from 'lucide-react';

const EmergencyBanner = () => {
  return (
    <div className="bg-accent-600 text-white py-2 px-4">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left">
        <div className="flex items-center">
          <AlertTriangle size={18} className="mr-2" />
          <span className="font-medium">24/7 Emergency Sump Pump Services Available</span>
        </div>
        <a 
          href="tel:9733298158" 
          className="flex items-center text-white font-bold hover:text-accent-100 transition-colors mt-1 sm:mt-0"
        >
          <Phone size={18} className="mr-1" />
          <span>973-329-8158</span>
        </a>
      </div>
    </div>
  );
};

export default EmergencyBanner;