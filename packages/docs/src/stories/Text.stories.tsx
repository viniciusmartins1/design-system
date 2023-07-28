import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis eos maxime, repellendus ullam corporis eaque ducimus aliquam libero veniam debitis, officiis odio, voluptatum provident. Vitae ea sed cumque ipsam.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
