import { Button } from "@mui/material";

/**
 * text
 * size : small[default] medium large
 * variant : contained[default] outlined text
 */
export default function Btn({ text, size, variant }) {
  let buttonText = "button";
  let buttonSize = "small";
  let buttonVariant = "contained";

  if (text.trim().length > 0) buttonText = text?.trim();
  if (size) buttonSize = size;
  if (variant) buttonVariant = variant;

  return (
    <Button variant={buttonVariant} size={buttonSize}>
      {buttonText}
    </Button>
  );
}
