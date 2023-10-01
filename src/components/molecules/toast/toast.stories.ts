import Toast, { TVariantToast, TPositionToast } from "./toast";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
   title: "Toast",
   component: Toast,
   tags: ["autodocs"],
   argTypes: {
      variant: {
         options: TVariantToast,
         control: { type: "select" },
      },
      position: {
         options: TPositionToast,
         control: { type: "select" },
      },
   },
};
export default meta;
type Story = StoryObj<typeof Toast>;

// Regular
export const Default: Story = {
   // args: {
   //    variant: "success",
   //    position: "middle",
   // },
};