import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Error = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return <Input register={register} errorMessage={"must email"} name="email" label="Email" />;
};
export const Default = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return <Input register={register} name="email" label="Email" />;
};
