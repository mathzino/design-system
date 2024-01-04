// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "default",
    children: "Button",
    onClick: () => {
      console.log("hello");
    },
  },
};
