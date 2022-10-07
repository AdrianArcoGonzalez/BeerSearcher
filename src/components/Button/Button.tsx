import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
}

const Button = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return <ButtonStyled onClick={actionOnClick}>{text}</ButtonStyled>;
};

export default Button;
