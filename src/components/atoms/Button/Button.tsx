// import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import Typography, { TFontWeight, TVariantTypography } from "../typography/typography";
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority";

// Define the props interface
enum ESizeButton {
  sm = "sm",
  md = "md",
  lg = "lg",
}

enum EVariantButton {
  default = "default",
  outline = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ESizeButton;
  title?: string;
  variant?: EVariantButton;
}

const buttonVariants = cva("rounded-lg  px-2 flex items-center py-1", {
  variants: {
    size: {
      sm: "h-6",
      md: "h-9",
      lg: "h-11",
    },
    variant: {
      default: "bg-blue-500 text-white",
      outline: "border-blue-500  border-2 text-blue-500",
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(({ title, children, size, variant, ...props }, ref) => {
  let variantTypography: TVariantTypography;
  if (size === ESizeButton.sm) {
    variantTypography = TVariantTypography.l10;
  } else if (size === ESizeButton.md) {
    variantTypography = TVariantTypography.l16;
  } else {
    variantTypography = TVariantTypography.l18;
  }

  return (
    <button ref={ref} className={cn(buttonVariants({ size, variant }))} {...props}>
      <Typography variant={variantTypography} fontWeight={TFontWeight.semiBold}>
        {title}
      </Typography>
    </button>
  );
});

export default Button;
