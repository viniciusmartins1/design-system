import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React, { ComponentProps } from "react";
import { TooltipContent } from "./styles";

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  children: React.ReactNode;
  content: string;
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <TooltipPrimitive.Provider>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipContent side="top" {...props}>
              <p>{content}</p>
              <TooltipPrimitive.Arrow width={11} height={5} />
            </TooltipContent>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    </div>
  );
}
