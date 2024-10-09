import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;                          
  onClick?: () => void;                  
  path?: string;                         
  className?: string;                    
  disabled?: boolean;                    
  type?: 'button' | 'submit' | 'reset'; 
  quizName?: string; 
                      
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  path,
  className = '',
  disabled = false,
  type = 'button',
  quizName, 
}) => {
  const navigate = useNavigate();

  const buttonClass = `bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none ${className}`;

  const handleClick = () => {
    if (quizName) {
      localStorage.setItem('quizTitle', quizName);
    }
    if (onClick) {
      onClick(); 
    }
    if (path) {
      navigate(path); 
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick} 
      className={buttonClass}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
