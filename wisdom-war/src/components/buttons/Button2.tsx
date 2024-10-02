import ButtonTemplate from './ButtonTemplate';

const Button2: React.FC = () => {
  return (
    <ButtonTemplate
      text="Cancel"
      variant="secondary"
      onClick={() => console.log('Cancel')}
    />
  );
};

export default Button2;

