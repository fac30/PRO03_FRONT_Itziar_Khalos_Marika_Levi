import ButtonTemplate from './ButtonTemplate';

const Button1: React.FC = () => {
  return (
    <ButtonTemplate
      text="Explore Quizzes"
      variant="primary"  
      onClick={() => console.log('Explore Quizzes button clicked!')}  // Optional click handler
    />
  );
};

export default Button1;





