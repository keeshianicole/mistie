import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard = ({ name, location, rating, text, service }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-200">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${i < rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'} mr-1`}
          />
        ))}
      </div>
      <p className="text-black mb-4 italic">{text}</p>
      <div className="border-t border-gray-200 pt-4 mt-4">
        <p className="font-semibold text-secondary-900">{name}</p>
        <p className="text-sm text-black">{location}</p>
        <p className="text-xs text-primary-600 mt-1">Service: {service}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;