import Typography, { TFontStyle, TFontWeight, TVariantTypography } from "./typography";
import { Meta, StoryObj } from "@storybook/react";
 
const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: TVariantTypography,
      control: { type: "select" },
    },
    fontStyle: {
      options: TFontStyle,
      control: { type: "radio" },
    },
    fontWeight: {
      options: TFontWeight,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Typography>;

// Regular
export const Text: Story = {
  args: {
    variant: TVariantTypography.h1,
    fontStyle: TFontStyle.italic,
    fontWeight: TFontWeight.medium,
    children: "tes",
  },
};
