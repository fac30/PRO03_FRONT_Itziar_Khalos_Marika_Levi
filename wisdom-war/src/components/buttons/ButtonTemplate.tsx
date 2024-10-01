import React from 'react';

interface ButtonProps {
  text: string;                 // Button label
  onClick?: () => void;         // Click handler (optional)
  className?: string;           // CSS class for custom styles (optional)
}

function ButtonTemplate({ text, onClick, className = '' }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonTemplate;

