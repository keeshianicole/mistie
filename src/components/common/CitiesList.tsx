import { Link } from 'react-router-dom';
import { bergenCountyCities } from '../../data/citiesData';

interface CitiesListProps {
  limit?: number;
  columns?: 1 | 2 | 3 | 4;
  footerStyle?: boolean;
}

const CitiesList = ({ limit, columns = 3, footerStyle = false }: CitiesListProps) => {
  // Get cities, limit if specified
  const cities = limit ? bergenCountyCities.slice(0, limit) : bergenCountyCities;
  
  // Determine column classes based on columns prop
  let columnClass = 'grid-cols-1';
  if (columns === 2) columnClass = 'grid-cols-1 sm:grid-cols-2';
  if (columns === 3) columnClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  if (columns === 4) columnClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
  
  return (
    <div className={`grid ${columnClass} gap-x-6 gap-y-2`}>
      {cities.map((city) => (
        <Link
          key={city.slug}
          to={`/locations/${city.slug}`}
          className={footerStyle 
            ? "text-secondary-400 hover:text-primary-300 transition-colors text-sm"
            : "text-primary-700 hover:text-primary-800 hover:underline transition-colors"
          }
        >
          {city.name}
        </Link>
      ))}
    </div>
  );
};

export default CitiesList;