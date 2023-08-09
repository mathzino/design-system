import Tag, { TVariantTag } from "./tag";
import { Meta, StoryObj } from "@storybook/react";
 
const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: TVariantTag,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

// Regular
export const Text: Story = {
  args: {
    variant: TVariantTag.default,
    children: "Default",
  },
};