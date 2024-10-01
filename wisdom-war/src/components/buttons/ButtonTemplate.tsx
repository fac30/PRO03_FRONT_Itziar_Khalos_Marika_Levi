import React from 'react';

interface ButtonProps {
  text: string;                 // Button label
  onClick?: () => void;         // Click handler (optional)
  className?: string;           // CSS class for custom styles (optional)
  variant?: 'primary' | 'secondary' | 'third';  // Button style variants
  iconRight?: React.ReactNode;  // Optional icon to be placed on the right
}

function ButtonTemplate({ text, onClick, className = '', variant = 'primary', iconRight }: ButtonProps) {
  // Define base styles for each variant
  let baseClassName = '';

  switch (variant) {
    case 'primary':
      baseClassName = '';
      break;
    case 'secondary':
      baseClassName = '';
      break;
    case 'icon':
      baseClassName = '';
      break;
    default:
      baseClassName = '';
  }

  return (
    <button className={`${baseClassName} ${className}`} onClick={onClick}>
      {text}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
}

export default ButtonTemplate;


