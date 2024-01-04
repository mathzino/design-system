import { cva } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  errorMessage?: string | undefined;
  label?: string;
  name: string;
}

const inputVariants = cva("", {
  variants: {
    status: {
      default: " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      error: " shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export default function Input({ errorMessage, name, label, type }: IInput) {
  if (type === "text-area") {
    return (
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <textarea className={cn(inputVariants({ status: errorMessage ? "error" : "default" }))} id={name} />
        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
      </div>
    );
  }
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input className={cn(inputVariants({ status: errorMessage ? "error" : "default" }))} id={name} type={type} />
      {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
}
