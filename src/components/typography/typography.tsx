import React from "react";

type props = {
    variant: string;
    size: number;
    children: string;
};

const Typography = ({ variant, size, children }: props) => {
    return (
        <p className={`${variant} ${size}`}>
            {children}
        </p>
    );
}

export default Typography;