import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick?: () => void;
  text: string;
  type?: string;
  disabled?: boolean;
}

const Button = ({
  actionOnClick,
  text,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled disabled={disabled} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
