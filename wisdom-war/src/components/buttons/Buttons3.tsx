// cancel
import React from 'react';
import ButtonTemplate from './ButtonTemplate';

const Button3: React.FC = () => {
  return (
    <ButtonTemplate
      text="Next"
      variant="third"  // Set the icon style variant
      onClick={() => console.log('Next')}
    />
  );
};

export default Button3;
