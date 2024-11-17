import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"main">;

const FullPage = ({ children, className, ...mainProps }: Props) => {
  return (
    <main
      className={twMerge(
        "flex min-h-[100vh] w-full flex-col items-center",
        className,
      )}
      {...mainProps}
    >
      {children}
    </main>
  );
};

export default FullPage;
