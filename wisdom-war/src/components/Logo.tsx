// src/components/Logo.tsx
import React from 'react';
import { RiIeFill } from 'react-icons/ri'; // Importing a quiz icon from Remix Icon
import './Logo.css'; // Optional: for additional styling

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <RiIeFill size={40} className="text-main-color" /> {/* Icon */}
      <h1 className="text-2xl font-bold text-main-color">Wisdom War</h1> {/* Title */}
    </div>
  );
};

export default Logo;
