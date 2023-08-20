import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export type TVariantTooltip = "default";

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tooltipVariants> {
  variant?: TVariantTooltip;
  children?: ReactNode;
  className?: string;
  title?: string;
}

export const tooltipVariants = cva(
  "absolute max-w-sm truncate bg-[#f4f4f4] text-[#151A1E] text-sm  px-3 py-1.5 rounded-lg invisible font-medium ring-1 ring-slate-300 group-hover:visible opacity-0 group-hover:opacity-100 transition  ease-in delay-300 -top-4",
  {
    variants: {},
    defaultVariants: {},
  }
);

const Tooltip: React.FC<TooltipProps> = ({ className, title, children, ...props }) => {
  return (
    <div className={"group  inline-flex flex-col justify-center items-center cursor-pointer p-[7px] text-xl font-medium"}>
      <span className={cn(tooltipVariants({}))}>{title}</span>
      {children}
    </div>
  );
};

export default Tooltip;