import Button from "src/Components/atoms/Button/Button";
import Toast, { TVariantToast, TPositionToast } from "./toast";
import { Meta, StoryObj } from "@storybook/react";
import { useToast } from "./useToast";

const ButtonAndToast = () => {
  const { open, toast } = useToast();
  return (
    <>
      <Button
        size={"md"}
        variant={"default"}
        children="Open"
        onClick={() => {
          toast(2000);
        }}
      />
      <Toast open={open} />
    </>
  );
};

const meta: Meta<typeof Toast> = {
  title: "Toast",
  // component: Toast,
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
  component: ButtonAndToast,
};
export default meta;
type Story = StoryObj<typeof Toast>;

// Regular
export const Default: Story = {};
