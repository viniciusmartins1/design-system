import * as Tooltip from "@radix-ui/react-tooltip";
import { styled, keyframes } from "../../styles";

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const TooltipContent = styled(Tooltip.Content, {
  userSelect: "none",
  padding: "$3 $4",
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  fontFamily: "Roboto",
  pointerEvents: "none",
  lineHeight: 1,

  p: {
    color: "$gray100",
    textAlign: "center",
    fontSize: "$sm",
    fontWeight: "$medium",
    lineHeight: "$short",
    margin: 0,
  },

  "&[data-state='delayed-open'][data-side='top']": {
    animation: `${slideUpAndFade} 400ms ease-in`,
  },

  "&[data-state='delayed-open'][data-side='bottom']": {
    animation: `${slideDownAndFade} 400ms ease-in`,
  },

  "&[data-state='delayed-open'][data-side='right']": {
    animation: `${slideRightAndFade} 400ms ease-in`,
  },

  "&[data-state='delayed-open'][data-side='left']": {
    animation: `${slideLeftAndFade} 400ms ease-in`,
  },
});
