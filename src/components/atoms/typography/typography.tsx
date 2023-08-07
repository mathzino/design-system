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
  medium = "medium",
  bold = "bold",
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
      medium: "font-normal",
      bold: "font-bold",
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
  return <p className={cn(typographyVariants({ variant, fontWeight, fontStyle }))}>{children}</p>;
};

export default Typography;
