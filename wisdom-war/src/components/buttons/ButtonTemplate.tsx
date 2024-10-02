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
  const navigate = useNavigate();

  // Define styles for each variant
  const baseStyles: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  let variantStyles: React.CSSProperties = {};

  switch (variant) {
    case 'primary':
      variantStyles = { backgroundColor: 'blue' };
      break;
    case 'secondary':
      variantStyles = { backgroundColor: 'gray' };
      break;
    case 'third':
      variantStyles = { backgroundColor: 'green' };
      break;
    default:
      variantStyles = { backgroundColor: 'blue' };
  }

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button style={{ ...baseStyles, ...variantStyles }} className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ButtonTemplate;




