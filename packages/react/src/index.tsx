import { ComponentProps } from "react";

import { styled } from "./styles";

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite300",
  borderRadius: "$sm",
  padding: "$2 $4",
  border: 0,
  fontWeight: "bold",
  color: "$white",

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      big: {
        fontSize: 16,
        padding: "$2 $4",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
