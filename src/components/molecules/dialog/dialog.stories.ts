import Dialog from "./dialog";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ['success', 'danger', 'warning'],
      control: { type: "select" },
    },
  }
};
export default meta;
type Story = StoryObj<typeof Dialog>;

// Regular
export const Default: Story = {
  args: {
    variant: 'success',
    title: "Success Title",
    buttonName1: "Close",
    buttonName2: "Label",
    children: "Success description whatever you want",
    condition: true,
  },
};