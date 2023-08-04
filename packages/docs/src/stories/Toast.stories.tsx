import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps, Button } from "@vinitech/react";
import { useState } from "react";

export default {
  title: "Form/Toast",
  component: Toast,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      function handleClick(): void {
        setIsOpen(!isOpen);
      }
      return (
        <>
          <Button variant="primary" size="md" onClick={handleClick}>
            Clique para abrir o toast
          </Button>
          {Story({
            args: {
              isOpen,
              title: "Agendamento realizado",
              description: "Quarta-feira, 23 de Outubro às 16h",
              setIsOpenToast: handleClick,
            },
          })}
        </>
      );
    },
  ],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
