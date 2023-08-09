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
      default: "inline bg-[#f4f4f4] rounded-lg text-2xl text-[#151A1E] font-medium px-3.5 py-1",
      danger: "inline bg-[#fdeeee] rounded-lg text-2xl text-[#E53E3E] font-medium px-3.5 py-1",
      success: "inline bg-[#edf7f2] rounded-lg text-2xl text-[#38A169] font-medium px-3.5 py-1",
      warning: "inline bg-[#fffdd4] rounded-lg text-2xl text-[#B2AC00] font-medium px-3.5 py-1",
      orange:"inline bg-[#ffeee6] rounded-lg text-2xl text-[#FF4A00] font-medium px-3.5 py-1",
      small: "inline bg-[#e8f4fc] rounded-lg text-base text-[#007EDB] font-medium px-2 py-0.5",
      base: "inline bg-[#e8f4fc] rounded-lg text-lg text-[#007EDB] font-medium px-2.5 py-0.5",
      primary: "inline bg-[#e8f4fc] rounded-lg text-2xl text-[#007EDB] font-medium px-3.5 py-1",
      secondary: "inline bg-[#eee9f4] rounded-lg text-2xl text-[#430B88] font-medium px-3.5 py-1",
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