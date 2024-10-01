// next

import React from 'react';
import ButtonTemplate from './ButtonTemplate';

const Button2: React.FC = () => {
  return (
    <ButtonTemplate
      text="Next Question"
      className=""
      onClick={() => console.log('Next')}
    />
  );
};

export default Button2;
