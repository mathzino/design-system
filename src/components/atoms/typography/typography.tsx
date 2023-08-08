import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
 
export enum TVariantTypography {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  p18 = "p18",
  p16 = "p16",
  p12 = "p12",
  p10 = "p10",
}
export enum TFontStyle {
  italic = "italic",
  noItalic = "noItalic",
}
export enum TFontWeight {
  light = "light",
  medium = "medium",
  semiBold = "semibold",
  bold = "bold",
  extraBold = "extrabold",
  black = "black",
}
export enum TLineHeight {
  none = "none",
  tight = "tight",
  snug = "snug",
  normal = "normal",
  relaxed = "relaxed",
  loose = "loose",
}

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  variant?: TVariantTypography;
  fontStyle?: TFontStyle;
  fontWeight?: TFontWeight;
  lineHeight?: TLineHeight;
  children?: ReactNode;
}

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-[44px]",
      h2: "text-4xl",
      h3: "text-[28px]",
      h4: "text-2xl",
      h5: "text-xl",
      p18: "text-lg",
      p16: "text-base",
      p12: "text-xs",
      p10: "text-[10px]",
    },
    fontWeight: {
      light: "font-light",
      medium: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    fontStyle: { italic: "italic", noItalic: "not-italic" },
    lineHeight: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  defaultVariants: {
    variant: "p12",
    fontWeight: "medium",
    fontStyle: "noItalic",
  },
});

const Typography: React.FC<TypographyProps> = ({ variant, fontWeight, fontStyle, lineHeight, children, ...props }) => {
  return <p className={cn(typographyVariants({ variant, fontWeight, fontStyle, lineHeight }))}>{children}</p>;
};

export default Typography;
