import { useEffect, useState } from "react";

interface IUseToast {
  open: boolean;
  toast: (timer: number) => void;
}

export const useToast = (): IUseToast => {
  const [open, setOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(2000);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, timer);
  }, [open]);

  const toast = (timer: number) => {
    setTimer(timer);
    setOpen(true);
  };

  return { open, toast };
};
