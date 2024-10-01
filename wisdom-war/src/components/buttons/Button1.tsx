// main

import React from 'react';
import ButtonTemplate from './ButtonTemplate';

const Button1: React.FC = () => {
  return (
    <ButtonTemplate
      text="Play Quiz"
      className=""
      onClick={() => console.log('Play Quiz')}
    />
  );
};

export default Button1;



