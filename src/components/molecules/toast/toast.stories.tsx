import Toast from "./toast";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "success", "danger"],
      control: { type: "select" },
    },
    position: {
      options: ["left", "middle", "right"],
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Toast>;

// Regular
export const Default: Story = {};
