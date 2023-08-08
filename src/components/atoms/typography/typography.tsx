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
  l18 = "l18",
  l16 = "l16",
  l14 = "l14",
  l12 = "l12",
  l10 = "l10",
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

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  variant?: TVariantTypography;
  fontStyle?: TFontStyle;
  fontWeight?: TFontWeight;
  children?: ReactNode;
}

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-[44px] leading-[82px]",
      h2: "text-4xl leading-[46px]",
      h3: "text-[28px] leading-[38px]",
      h4: "text-2xl leading-[32px]",
      h5: "text-xl leading-[26px]",
      p18: "text-lg leading-[27px]",
      p16: "text-base leading-[24px]",
      p12: "text-xs leading-[18px]",
      p10: "text-[10px] leading-[18px]",
      l18: "text-lg leading-[23px]",
      l16: "text-base leading-[20px]",
      l14: "text-sm leading-[17px]",
      l12: "text-xs leading-[14px]",
      l10: "text-[10px] leading-[14px]",
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
  },
  defaultVariants: {
    variant: "p12",
    fontWeight: "medium",
    fontStyle: "noItalic",
  },
});

const Typography: React.FC<TypographyProps> = ({ variant, fontWeight, fontStyle, children, ...props }) => {
  return <p className={cn(typographyVariants({ variant, fontWeight, fontStyle, }))}>{children}</p>;
};

export default Typography;
