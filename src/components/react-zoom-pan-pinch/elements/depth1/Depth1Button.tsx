// 스크롤하면 확대되어야 한다.

import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"button"> {
  active?: boolean;
}

const Depth1Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, active = false, className, ...buttonProps }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "flex shrink-0 items-center justify-center rounded-lg px-12 py-6 text-white",
          active ? "bg-green-500" : "bg-gray-300",
          className,
        )}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);

Depth1Button.displayName = "Step1Button";

export default Depth1Button;
