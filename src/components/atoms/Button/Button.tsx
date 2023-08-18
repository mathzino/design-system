// import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import Typography, { TFontWeight, TVariantTypography } from "../typography/typography";
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority";

// Define the props interface
export enum ESizeButton {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum EVariantButton {
  default = "default",
  outline = "outline",
  back = "back",
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
      default: "px-2.5 bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300",
      outline: "border-blue-500 border-2 text-blue-500",
      back: "border-slate-500 border-2 text-slate-500 hover:bg-slate-600 hover:border-slate-600 hover:text-white active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300",
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
