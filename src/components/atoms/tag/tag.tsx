import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
 
export enum TVariantTag {
  default = "default",
  danger = "danger",
  success = "success",
  warning = "warning",
  orange = "orange",
  small = "small",
  base = "base",
  primary = "primary",
  secondary = "secondary",
}

interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {
  variant?: TVariantTag;
  children?: ReactNode;
}

export const tagVariants = cva("", {
  variants: {
    variant: {
      default: "inline bg-[#f4f4f4] rounded-lg text-xs text-[#151A1E] font-medium px-2.5 pt-1 pb-1.5",
      danger: "inline bg-[#fdeeee] rounded-lg text-xs text-[#E53E3E] font-medium px-2.5 pt-1 pb-1.5",
      success: "inline bg-[#edf7f2] rounded-lg text-xs text-[#38A169] font-medium px-2.5 pt-1 pb-1.5",
      warning: "inline bg-[#fffdd4] rounded-lg text-xs text-[#B2AC00] font-medium px-2.5 pt-1 pb-1.5",
      orange:"inline bg-[#ffeee6] rounded-lg text-xs text-[#FF4A00] font-medium px-2.5 pt-1 pb-1.5",
      small: "inline bg-[#e8f4fc] rounded-lg text-[10px] text-[#007EDB] font-medium px-2 pt-0.5 pb-1",
      base: "inline bg-[#e8f4fc] rounded-lg text-[11px] text-[#007EDB] font-medium px-2.5 pt-0.5 pb-1",
      primary: "inline bg-[#e8f4fc] rounded-lg text-xs text-[#007EDB] font-medium px-2.5 pt-1 pb-1.5",
      secondary: "inline bg-[#eee9f4] rounded-lg text-xs text-[#430B88] font-medium px-2.5 pt-1 pb-1.5",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Tag: React.FC<TagProps> = ({ variant, children, ...props }) => {
  return <div className={cn(tagVariants({ variant }))}>{ children }</div>;
};

export default Tag;