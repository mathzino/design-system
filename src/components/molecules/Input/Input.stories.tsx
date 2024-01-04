import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Error: Story = {
  args: {
    errorMessage: "must email",
    name: "email",
    label: "Email",
  },
};
