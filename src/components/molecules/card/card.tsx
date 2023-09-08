import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import Button, { ESizeButton, EVariantButton } from "../../atoms/Button/Button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  title?: string;
  buttonName1?: string;
  buttonName2?: string;
  children?: ReactNode;
}

export const cardVariants = cva("border-[1px] border-[#e3e3e3] rounded-xl", {
  variants: {},
  defaultVariants: {},
});

const Card: React.FC<CardProps> = ({ title, buttonName1, buttonName2, children, ...props }) => {
  return (
    <div className={cn(cardVariants({}))}>
      <div className="px-6 py-3 font-medium text-base text-[#151A1E]">{title}</div>
      <div className="border-y-[1px] border-[#e3e3e3] px-6 py-5 text-base text-[#151A1E]">{children}</div>
      <div className="flex items-center justify-end gap-2 px-6 py-5">
        <Button size={ESizeButton.md} variant={EVariantButton.back} title={buttonName1} />
        <Button size={ESizeButton.md} variant={EVariantButton.default} title={buttonName2} />
      </div>
    </div>
  );
};

export default Card;
