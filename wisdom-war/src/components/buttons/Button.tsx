import React from 'react';

interface ButtonProps {
  text: string;                        // Button label
  onClick: () => void;                // Click handler (optional)
  buttonName: string;                  // CSS class for custom styles (optional)
  type?: 'button' | 'submit' | 'reset'; // Optional button type
}

// Define the Button functional component
const Button: React.FC<ButtonProps> = ({
  text,
  buttonName = '',
  onClick,
  type = 'button',
}) => {
  // Define the button's class names
  const buttonClass = `bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none ${buttonName}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className= {buttonClass}
    >
      {text}
    </button>
  );
};

export default Button;





