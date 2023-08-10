import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export enum TVariantTooltip {
    default = "default",
}

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tooltipVariants> {
    variant?: TVariantTooltip;
    children?: ReactNode;
}

export const tooltipVariants = cva("", {
    variants: {
        variant: {
            //   dengan ring
            default: "absolute bg-[#f4f4f4] text-[#151A1E] whitespace-nowrap px-3 py-1.5 rounded-lg invisible font-medium ring-1 ring-slate-300 group-hover:visible opacity-0 group-hover:opacity-100 transition -top-[70%] ease-in delay-300",

            //   tanpa ring
            //   default: "absolute bg-[#f4f4f4] text-[#151A1E] whitespace-nowrap px-3 py-1.5 rounded-lg invisible font-medium group-hover:visible opacity-0 group-hover:opacity-100 transition -top-[70%] ease-in delay-300",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const parentStyle: string = "group relative inline-flex flex-col justify-center items-center top-11 left-5 cursor-pointer p-[7px] text-xl font-medium";
const buttonStyle: string = "bg-blue-500 text-white px-3.5 pt-1 pb-2 rounded-lg hover:bg-blue-600";


const Tooltip: React.FC<TooltipProps> = ({ variant, children, ...props }) => {
    return (
        <div className={parentStyle}>
            <span className={cn(tooltipVariants({ variant }))}>{children}</span>
            <span className={buttonStyle}>Hover me!</span>
        </div>
    );
};

export default Tooltip;