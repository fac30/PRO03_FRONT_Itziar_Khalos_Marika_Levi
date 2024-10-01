// cancel
import React from 'react';
import ButtonTemplate from './ButtonTemplate';

// const Button3: React.FC = () => {
//   return (
//     <ButtonTemplate
//       text="Cancel"
//       className=""
//       onClick={() => console.log('Cancel clicked')}
//     />
//   );
// };

const Button3: React.FC = () => {
  return (
    <ButtonTemplate
      text="Next"
      variant="third"  // Set the icon style variant
      iconRight={< ""/>}  // Pass the icon for the right side
      onClick={() => console.log('Next')}
    />
  );
};

export default Button3;
