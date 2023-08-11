import Breadcrumbs from "./Breadcrumb";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// Regular
export const Default: Story = {
  render: (args) => <Breadcrumbs {...args} />,
  args: {
    breadcrumbs: [
      { label: "Home", path: "home" },
      { label: "User", path: "user" },
      { label: "Detail", path: "detail" },
    ],
  },
};
