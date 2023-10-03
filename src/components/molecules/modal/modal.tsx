import React, { ReactNode, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import Button, { ESizeButton, EVariantButton } from "../../atoms/Button/Button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
   title?: string;
   buttonName1?: string;
   buttonName2?: string;
   children?: ReactNode;
   condition?: boolean;
}

export const modalVariants = cva("absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-[600px] min-w-[300px] transition-all duration-[400ms]", {
   variants: {},
   defaultVariants: {},
});


const Modal: React.FC<ModalProps> = ({ title, buttonName1, buttonName2, children, condition=true, ...props }) => {
   const [modal, setModal] = useState<boolean>(condition);

   const toggleModal = () => {
      setModal(!modal);
   };

   if (modal) {
      document.body.classList.add('overflow-y-hidden');
   } else {
      document.body.classList.remove('overflow-y-hidden');
   }

   return (
      <div>
         <div className={`w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-all duration-[400ms] ${modal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div onClick={toggleModal} className={`w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-colors duration-[400ms] ${modal ? 'bg-[rgba(49,49,49,0.8)]' : 'bg-white'}`}></div>
            <div className={`${cn(modalVariants({}))} ${modal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
               <div className="px-6 py-3 font-medium text-base text-[#151A1E]">
                  {title}
               </div>
               <div className="border-y-[1px] border-[#e3e3e3] px-6 py-5 text-base text-[#151A1E]">
                  {children}
               </div>
               <div className="flex items-center justify-end gap-2 px-6 py-5">
                  <Button size={ESizeButton.md} variant={EVariantButton.back} children={buttonName1} onClick={toggleModal} />
                  <Button size={ESizeButton.md} variant={EVariantButton.default} children={buttonName2} />
               </div>
            </div>
         </div>
      </div>

   );
};

export default Modal;