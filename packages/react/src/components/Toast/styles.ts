import * as Toast from "@radix-ui/react-toast";
import { styled, keyframes } from "../../styles";

const slideIn = keyframes({
  from: {
    transform: "translateX(calc(100% + 25px))",
  },
  to: {
    transform: "translateX(0)",
  },
});

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const ToastContainer = styled(Toast.Root, {
  background: "$gray800",
  borderRadius: "$sm",
  padding: "$5",
  fontFamily: "$default",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="end"]': {
    animation: `${hide} 100ms ease-out`,
  },
});

export const TitleContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  p: {
    margin: 0,
    color: "$white",
    fontSize: "$xl",
    fontWeight: "bold",
    lineHeight: "$base",
    alignSelf: "center",
  },

  svg: {
    color: "$gray200",
    fontSize: "$xl",
    alignSelf: "flex-start",
    cursor: "pointer",

    "&:hover": {
      color: "$white",
    },
  },
});

export const ToastDescription = styled(Toast.Description, {
  marginTop: "$1",
  color: "$gray200",
  fontSize: "$sm",
  fontWeight: "$regular",
  lineHeight: "$base",
});

export const ToastViewPort = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: "$6",
  gap: "$3",
  width: "24rem",
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});