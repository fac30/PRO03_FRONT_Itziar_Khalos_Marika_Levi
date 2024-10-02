import React from 'react';

interface ButtonProps {
  text: string;                        // Button label
  onClick?: () => void;                // Click handler (optional)
  className?: string;                  // CSS class for custom styles (optional)
  disabled?: boolean;                  // Optional prop to disable the button
  type?: 'button' | 'submit' | 'reset'; // Optional button type
}

// Define the Button functional component
const Button: React.FC<ButtonProps> = ({
  text,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  // Define the button's class names
  const buttonClass = `bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className= {buttonClass}             
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;





