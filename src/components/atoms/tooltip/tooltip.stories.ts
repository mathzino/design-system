import Tooltip, { TVariantTooltip } from "./tooltip";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: TVariantTooltip,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

// Regular
export const Default: Story = {
  args: {
    variant: TVariantTooltip.default,
    children: "Thank you for using eskit UI. Have a nice day!",
  },
};
