import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;                 // Button label
  to?: string;                  // Path to navigate to (optional)
  onClick?: () => void;         // Click handler (optional)
  className?: string;           // CSS class for custom styles (optional)
  variant?: 'primary' | 'secondary' | 'third';  // Button style variants
}

function ButtonTemplate({ text, to, onClick, className = '', variant = 'primary' }: ButtonProps) {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Define base styles for each variant
  let baseClassName = '';

  switch (variant) {
    case 'primary':
      baseClassName = '';
      break;
    case 'secondary':
      baseClassName = '';
      break;
    case 'third':
      baseClassName = '';
      break;
    default:
      baseClassName = '';
  }

  const handleClick = () => {
    if (to) {
      navigate(to); // If the `to` prop is passed, navigate to the given path
    } else if (onClick) {
      onClick(); // Otherwise, trigger the onClick handler
    }
  };

  return (
    <button className={`${baseClassName} ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ButtonTemplate;



