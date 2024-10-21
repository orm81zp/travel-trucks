import { ButtonGroup as ComponentButtonGroup } from "@mui/material";
import { ORIENTATIONS, SIZES, VARIANTS } from "./const";

const ButtonGroup = ({
  children,
  variant,
  size,
  orientation = ORIENTATIONS.HORIZONTAL,
}) => {
  return (
    <ComponentButtonGroup
      size={size}
      orientation={orientation}
      variant={variant}
    >
      {children}
    </ComponentButtonGroup>
  );
};

ButtonGroup.variants = Object.assign({}, VARIANTS);
ButtonGroup.sizes = Object.assign({}, SIZES);
ButtonGroup.orientations = Object.assign({}, ORIENTATIONS);

export default ButtonGroup;
