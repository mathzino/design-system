import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
  title?: string;
  children?: ReactNode;
  open: boolean;
  handleClickOuterModal?: () => void;
}

export const modalVariants = cva("absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-[600px] min-w-[300px] transition-all duration-[400ms]", {
  variants: {},
  defaultVariants: {},
});

const Modal: React.FC<ModalProps> = ({ handleClickOuterModal = () => {}, open = false, title, children, ...props }) => {
  if (open) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div>
      <div className={`w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-all duration-[400ms] ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div onClick={handleClickOuterModal} className={`w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-colors duration-[400ms] ${open ? "bg-[rgba(49,49,49,0.8)]" : "bg-white"}`}></div>
        <div className={`${cn(modalVariants({}))} ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="px-6 py-3 font-medium text-base text-[#151A1E]">{title}</div>
          <div className="border-y-[1px] border-[#e3e3e3] px-6 py-5 text-base text-[#151A1E]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
