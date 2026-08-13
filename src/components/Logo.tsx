import React from 'react';
import iconSvg from '../assets/icon.svg';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto', variant = 'color' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src={iconSvg}
        alt="Obazee Clement Reinigung Logo Icon"
        className={`h-full w-auto max-h-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105 ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
      />
      <div className="flex flex-col leading-none">
        <span className="font-heading font-extrabold tracking-wider text-corporate-blue text-lg uppercase">
          OBAZEE CLEMENT
        </span>
        <span className="font-sans font-semibold tracking-widest text-aqua-vibrant text-xs uppercase flex items-center gap-1">
          REINIGUNG <span className="inline-block w-1.5 h-1.5 rounded-full bg-aqua-vibrant animate-pulse"></span>
        </span>
      </div>
    </div>
  );
};
