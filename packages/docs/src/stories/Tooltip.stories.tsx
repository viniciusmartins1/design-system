import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps, Text } from "@vinitech/react";

export default {
  title: "Overlay/Tooltip",
  component: Tooltip,
  args: {
    content: "21 de Outubro - Indisponível",
    children: (
      <Text
        style={{ width: "100%", textAlign: "center", margin: "10rem 0" }}
        size="lg"
      >
        Tooltip
      </Text>
    ),
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
