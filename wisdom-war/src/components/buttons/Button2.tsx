// next
import React from 'react';
import ButtonTemplate from './ButtonTemplate';

// const Button2: React.FC = () => {
//   return (
//     <ButtonTemplate
//       text="Next Question"
//       className=""
//       onClick={() => console.log('Next')}
//     />
//   );
// };

const Button2: React.FC = () => {
  return (
    <ButtonTemplate
      text="Cancel"
      variant="secondary"  // Set the secondary style variant (underline)
      onClick={() => console.log('Cancel')}
    />
  );
};

export default Button2;
