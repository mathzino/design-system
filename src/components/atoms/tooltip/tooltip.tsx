import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import Button, { ESizeButton, EVariantButton } from "../Button/Button";

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
            default: "absolute max-w-sm truncate bg-[#f4f4f4] text-[#151A1E] text-sm  px-3 py-1.5 rounded-lg invisible font-medium ring-1 ring-slate-300 group-hover:visible opacity-0 group-hover:opacity-100 transition -top-[60%] ease-in delay-300",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const parentStyle: string = "group relative top-11 left-28 inline-flex flex-col justify-center items-center cursor-pointer p-[7px] text-xl font-medium";


const Tooltip: React.FC<TooltipProps> = ({ variant, children, ...props }) => {
    return (
        <div className={parentStyle}>
            <span className={cn(tooltipVariants({ variant }))}>{children}</span>
            <Button size={ESizeButton.md} variant={EVariantButton.default} title="Button" />
        </div>
    );
};

export default Tooltip;