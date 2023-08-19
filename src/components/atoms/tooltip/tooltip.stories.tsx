import Button, { ESizeButton } from "../Button/Button";
import Tooltip, { TVariantTooltip } from "./tooltip";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

// Regular
export const Default: Story = {
  args: {
    title: "this tooltipp!!",
    variant: "default",
    children: <Button title="check button"></Button>,
  },
};
