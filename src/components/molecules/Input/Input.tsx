import { cva } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { cn } from "../../../lib/utils";

interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  register: UseFormRegister<any>;
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

export default function Input({ register, errorMessage, name, label, type }: IInput) {
  if (type == "text-area") {
    return (
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <textarea {...register(name)} className={cn(inputVariants({ status: errorMessage ? "error" : "default" }))} id={name} />
        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
      </div>
    );
  }
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input {...register(name)} className={cn(inputVariants({ status: errorMessage ? "error" : "default" }))} id={name} type={type} />
      {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
}
