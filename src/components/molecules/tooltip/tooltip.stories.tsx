import Tooltip from "./tooltip";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint harum pariatur excepturi voluptate aliquid nostrum consequatur accusamus esse dicta.",
    children: "this tooltip component!!",
  },
};
