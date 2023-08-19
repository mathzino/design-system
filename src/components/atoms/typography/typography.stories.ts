import Typography, { EFontStyle, EFontWeight, EVariantTypography } from "./typography";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: EVariantTypography,
      control: { type: "select" },
    },
    fontStyle: {
      options: EFontStyle,
      control: { type: "radio" },
    },
    fontWeight: {
      options: EFontWeight,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Typography>;

// Regular
export const Text: Story = {
  args: {
    variant: "h1",
    fontStyle: "italic",
    fontWeight: "medium",
    children: "tes",
  },
};
