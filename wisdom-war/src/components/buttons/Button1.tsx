// main
import React from 'react';
import ButtonTemplate from './ButtonTemplate';

const Button1: React.FC = () => {
  return (
    <ButtonTemplate
      text="Explore Quizzes"
      variant="primary"  // Set the primary style variant
      onClick={() => console.log('Explore Quizzes')}
      to="./quiz/Question"  // Navigate to the quiz page
    />
  );
};

export default Button1;




