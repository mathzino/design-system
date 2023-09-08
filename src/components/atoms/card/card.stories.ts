import Card from "./card";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Card>;

// Regular
export const Default: Story = {
  args: {
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores dolorem minima repudiandae ducimus vero accusantium repellat hic. Beatae enim id ab dolorum a corrupti recusandae, suscipit officiis veniam, sequi perspiciatis cumque harum adipisci labore. Eum id ratione velit ipsa facilis at consequuntur mollitia! Ut sed dignissimos doloremque voluptatibus voluptatum cumque totam voluptates illo, quisquam ducimus necessitatibus numquam. Dolore doloremque magni, cupiditate odio tenetur eligendi eius qui minus officia adipisci iure eaque, eos ipsa aperiam quasi quaerat, debitis maiores nesciunt corporis perspiciatis doloribus modi numquam placeat. Odit omnis a, repellendus perferendis ipsa culpa iure provident quo architecto, dolorem pariatur quos!",
  },
};
