interface ButtonProps {
  text: string;                 // Button label
  onClick?: () => void;         // Click handler (optional)
  className?: string;           // CSS class for custom styles (optional)
  variant?: 'primary' | 'secondary' | 'third';  // Button style variants
}

function ButtonTemplate({ text, onClick, className = '', variant = 'primary' }: ButtonProps) {

  // Define styles for each variant
  const baseStyles: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: variant === 'primary' ? 'blue' : variant === 'secondary' ? 'gray' : 'green',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '10px',
  };

  let variantStyles: React.CSSProperties = {};

  switch (variant) {
    case 'primary':
      variantStyles = { backgroundColor: 'blue' };
      break;
    case 'secondary':
      variantStyles = { backgroundColor: 'gray' };
      break;
    case 'third':
      variantStyles = { backgroundColor: 'green' };
      break;
    default:
      variantStyles = { backgroundColor: 'blue' };
  }

  return (
    <button style={{ ...baseStyles, ...variantStyles }} className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonTemplate;





