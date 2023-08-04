import { ToastProvider, ToastTitle, ToastClose } from "@radix-ui/react-toast";
import { ComponentProps } from "react";
import { X } from "phosphor-react";
import * as s from "./styles";

export interface ToastProps extends ComponentProps<typeof s.ToastContainer> {
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpenToast: () => void;
}

export function Toast({
  title,
  description,
  isOpen,
  setIsOpenToast,
}: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <s.ToastContainer open={isOpen}>
        <ToastTitle asChild>
          <s.TitleContainer>
            <p>{title}</p>
            <ToastClose aria-label="Close" asChild>
              <X weight="bold" onClick={setIsOpenToast} />
            </ToastClose>
          </s.TitleContainer>
        </ToastTitle>
        <s.ToastDescription>{description}</s.ToastDescription>
      </s.ToastContainer>

      <s.ToastViewPort />
    </ToastProvider>
  );
}
