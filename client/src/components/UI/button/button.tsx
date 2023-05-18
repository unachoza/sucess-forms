import { text } from "stream/consumers";
import "./button.css"
const Button = (onClick: any, text: string, size: number): JSX.Element => {
  return (
    <button type="button" onClick={onClick} style={{ scale: size }}>
      {text}
    </button>
  );
};
export default Button;


/*properties
 text
 color
 outline
 onClick */