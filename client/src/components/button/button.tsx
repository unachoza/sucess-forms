const Button = (onClick: any, text: string, size: number): JSX.Element => {
  return (
    <button type="button" onClick={onClick} style={{ scale: size }}>
      {text}
    </button>
  );
};
export default Button;
