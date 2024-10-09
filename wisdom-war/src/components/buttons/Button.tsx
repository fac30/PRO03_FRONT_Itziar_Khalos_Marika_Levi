import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;                          // Button label
  onClick?: () => void;                  // Optional click handler
  path?: string;                         // Optional navigation path
  className?: string;                    // CSS class for custom styles (optional)
  disabled?: boolean;                    // Optional prop to disable the button
  type?: 'button' | 'submit' | 'reset'; // Optional button type
  
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick, 
  path,   
  className = '',
  disabled = false,
  type = 'button',
  
}) => {
  const navigate = useNavigate();

  const buttonClass = `bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none ${className}`;

  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute the provided onClick function if it exists
    }
    if (path) {
      navigate(path); // Navigate to the provided path if it exists
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick} // Use the combined click handler
      className={buttonClass}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
