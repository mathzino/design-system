import React, { useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import Button, { ESizeButton, EVariantButton } from "../../atoms/Button/Button";
import successIcon from "../toast/assets/icon-success.svg";
import errorIcon from "../toast/assets/icon-eror.svg";
import loadingIcon from "../toast/assets/icon-loading.svg";
import successCloseIcon from "../toast/assets/icon-close-success.svg";
import errorCloseIcon from "../toast/assets/icon-close-eror.svg";

export enum TVariantToast {
  default = "default",
  danger = "danger",
  success = "success",
}
export enum TPositionToast {
  left = "left",
  middle = "middle",
  right = "right",
}

interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  variant?: TVariantToast;
  position?: TPositionToast;
  open: boolean;
}

export const toastVariants = cva("", {
  variants: {
    variant: {
      default: "w-[160px] bg-[#f0f0f1] text-[#151A1E]",
      danger: "w-[378px] bg-[#fbe3e3] text-[#e53e3e]",
      success: "w-[185px] bg-[#e2f1e9] text-[#38a169]",
    },
    position: {
      left: "left-5",
      middle: "left-1/2 right-0 -translate-x-1/2",
      right: "right-5",
    },
  },
  defaultVariants: {
    variant: "success",
    position: "middle",
  },
});

const Toast: React.FC<ToastProps> = ({ open, variant, position, ...props }) => {
  return (
    <div>
      <div className={`h-fit top-[34px] bottom-0 fixed -translate-y-1/2 rounded-xl transition-all duration-[400ms] z-40 ${cn(toastVariants({ variant, position }))} ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex items-center justify-center gap-2 mx-[9px] my-1.5">
          <img src={variant === "success" ? successIcon : variant === "danger" ? errorIcon : loadingIcon} alt="condition-toast-icon" className={`w-6 h-6 ${variant === "default" ? "animate-spin" : ""}`} />
          <p className="text-xl mb-[2px] font-medium">{variant === "success" ? "Succeed" : variant === "danger" ? "Oops, something went wrong" : "Loading..."}</p>
          <button className={`ml-2 flex items-center justify-center w-8 h-8 rounded-full ${variant === "default" ? "invisible w-0 h-0 ml-0" : variant === "success" ? "hover:bg-[#ccdad2]" : "hover:bg-[#ffaeae]"}`}>
            <img src={variant === "success" ? successCloseIcon : variant === "danger" ? errorCloseIcon : ""} alt="close-icon" className="w-6 h-6 p-0 z-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
