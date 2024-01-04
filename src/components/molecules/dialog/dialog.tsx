import React, { ReactNode, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import Button, { ESizeButton, EVariantButton } from "../../atoms/Button/Button";
import closeIcon from "./assets/close-icon.svg";
import checkIcon from "./assets/check-icon.svg";
import alertIcon from "./assets/alert-icon.svg";
import dangerIcon from "./assets/danger-icon.svg";

export type TVariantDialog = "success" | "danger" | "warning";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dialogVariants> {
   variant?: TVariantDialog;
   title?: string;
   buttonName1?: string;
   buttonName2?: string;
   children?: ReactNode;
   condition?: boolean;
}

export const dialogVariants = cva("absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2 rounded-xl w-[500px] transition-all duration-[400ms]", {
   variants: {},
   defaultVariants: {},
});


const Dialog: React.FC<DialogProps> = ({ variant, title, buttonName1, buttonName2, children, condition = false, ...props }) => {
   const [dialog, setDialog] = useState<boolean>(condition);

   const toggleDialog = () => {
      setDialog(!dialog);
   };

   if (dialog) {
      document.body.classList.add('overflow-y-hidden');
   } else {
      document.body.classList.remove('overflow-y-hidden');
   }

   return (
      <div>
         <div className={`w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-all duration-[400ms] ${dialog ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div onClick={toggleDialog} className={`w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-colors duration-[400ms] ${dialog ? 'bg-[rgba(49,49,49,0.8)]' : 'bg-white'}`}></div>
            <div className={`${cn(dialogVariants({}))} ${dialog ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
               <div className="flex items-start justify-center py-5">
                  <div className={`w-[38px] h-[38px] mt-1 ml-6 flex items-center justify-center rounded-full ${variant === 'success' ? 'bg-[#e1f1e8]' : variant === 'danger' ? 'bg-[#fbe2e2]' : 'bg-[#fffdbf]'}`}>
                     <img src={variant === 'success' ? checkIcon : variant === 'danger' ? dangerIcon : alertIcon} alt="condition-dialog-icon" className='w-6 h-6' />
                  </div>
                  <div className="w-[80%] mt-1 mb-5">
                     <div className="px-5 font-medium text-lg text-[#151A1E]">
                        {title}
                     </div>
                     <div className="px-5 pt-2 font-normal text-sm text-[#7e8085]">
                        {children}
                     </div>
                  </div>
                  <button className="w-8 h-8 mr-4 -mt-1 flex items-center justify-center rounded-lg hover:bg-slate-200" onClick={toggleDialog}>
                     <img src={closeIcon} alt="close-icon" className='w-6 h-6' />
                  </button>
               </div>
               <div className="flex items-center justify-end gap-2 px-6 py-[18px] border-t  border-[#e3e3e3] ">
                  <Button size={ESizeButton.md} variant={EVariantButton.back} children={buttonName1} onClick={toggleDialog} />
                  <Button size={ESizeButton.md} variant={EVariantButton.default} children={buttonName2} onClick={toggleDialog} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dialog;