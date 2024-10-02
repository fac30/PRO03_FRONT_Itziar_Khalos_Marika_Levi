import React from 'react';
import ButtonTemplate from './ButtonTemplate';

const Button1: React.FC = () => {
  return (
    <ButtonTemplate
      text="Explore Quizzes"
      variant="primary"  // Primary button style (blue background)
      onClick={() => console.log('Explore Quizzes button clicked!')}  // Optional click handler
    />
  );
};

export default Button1;





