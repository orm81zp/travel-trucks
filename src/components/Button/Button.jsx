import { Button as ComponentButton } from "@mui/material";
import { SIZES, TYPES, VARIANTS } from "./const";

const Button = ({
  onClick,
  children,
  variant,
  size,
  startIcon,
  type = TYPES.BUTTON,
}) => {
  const clickHandler = (event) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <ComponentButton
      size={size}
      type={type}
      onClick={clickHandler}
      variant={variant}
      startIcon={startIcon}
    >
      {children}
    </ComponentButton>
  );
};

Button.variants = Object.assign({}, VARIANTS);
Button.types = Object.assign({}, TYPES);
Button.sizes = Object.assign({}, SIZES);

export default Button;
