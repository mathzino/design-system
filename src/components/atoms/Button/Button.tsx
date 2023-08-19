// import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Typography, { TVariantTypography } from "../typography/typography";
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority";

export type TSizeButton = "sm" | "md" | "lg";

export type TVariantButton = "default" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSizeButton;
  children?: ReactNode;
  variant?: TVariantButton;
}

const buttonVariants = cva("rounded-lg  px-2 flex items-center py-1 justify-center", {
  variants: {
    size: {
      sm: "h-6 min-w-[16px]",
      md: "h-9 min-w-[80px]",
      lg: "h-11 min-w-[100px]",
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
  if (size === "sm") {
    variantTypography = "l10";
  } else if (size === "md") {
    variantTypography = "l16";
  } else {
    variantTypography = "l18";
  }

  return (
    <button ref={ref} className={cn(buttonVariants({ size, variant }))} {...props}>
      <Typography variant={variantTypography} fontWeight={"semibold"}>
        {children}
      </Typography>
    </button>
  );
});

export default Button;
