import { Droplet } from 'lucide-react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo = ({ className = "h-8 w-auto", isWhite = false }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Droplet 
        className={`${isWhite ? 'text-white' : 'text-primary-600'}`} 
        fill={isWhite ? '#ffffff' : '#0284c7'} 
        size={32} 
      />
    </div>
  );
};

export default Logo;