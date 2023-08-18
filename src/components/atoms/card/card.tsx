import React, { ReactNode } from "react";
import Button, { ESizeButton, EVariantButton } from "../Button/Button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

const topStyle: string = "border-[1px] border-[#d4d4d4] rounded-t-xl px-6 py-3 font-medium text-[#151A1E]";
const middleStyle: string = "border-x-[1px] border-[#d4d4d4] px-6 pt-5 pb-5 text-[#151A1E]";
const bottomStyle: string = "flex items-center justify-end gap-2 border-[1px] border-[#d4d4d4] rounded-b-xl px-6 py-5";


const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <div>
            <div className={topStyle}>Card Title</div>
            <div className={middleStyle}>{children}</div>
            <div className={bottomStyle}>
                <Button size={ESizeButton.md} variant={EVariantButton.outline} title="Label" />
                <Button size={ESizeButton.md} variant={EVariantButton.default} title="Label" />
            </div>
        </div>
    );
};

export default Card;