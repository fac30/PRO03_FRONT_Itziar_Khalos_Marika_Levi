// cancel

import React from 'react';
import ButtonTemplate from './ButtonTemplate';

const Button3: React.FC = () => {
  return (
    <ButtonTemplate
      text="Cancel"
      className=""
      onClick={() => console.log('Cancel clicked')}
    />
  );
};

export default Button3;
