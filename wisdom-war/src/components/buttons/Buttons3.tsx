import ButtonTemplate from './ButtonTemplate';

const Button3: React.FC = () => {
  return (
    <ButtonTemplate
      text="Next"
      variant="third"
      onClick={() => console.log('Next')}
    />
  );
};

export default Button3;

