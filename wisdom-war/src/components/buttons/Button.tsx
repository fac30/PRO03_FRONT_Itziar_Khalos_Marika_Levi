import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;                        // Button label
  path: string;                        // Navigation path
  className?: string;                  // CSS class for custom styles (optional)
  disabled?: boolean;                  // Optional prop to disable the button
  type?: 'button' | 'submit' | 'reset'; // Optional button type
}

// Define the Button functional component
const Button: React.FC<ButtonProps> = ({
  text,
  path,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const navigate = useNavigate(); // Use the navigation hook

  // Define the button's class names
  const buttonClass = `bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none ${className}`;

  return (
    <button
      type={type}
      onClick={() => navigate(path)}  // Navigate to the provided path on click
      className={buttonClass}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;





