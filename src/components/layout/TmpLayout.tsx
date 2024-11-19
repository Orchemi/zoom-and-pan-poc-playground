import FullPage from "@/components/common/FullPage";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Page = "home" | "react-zoom-pan-pinch" | "use-gesture" | "react-flow";
interface Props {
  currentPage: Page;
}

const TmpLayout = ({ children, currentPage }: PropsWithChildren<Props>) => {
  return (
    <FullPage>
      <header
        className={
          "absolute top-0 flex h-[56px] w-full items-center gap-10 border border-b-gray-200 bg-white px-10 shadow-sm"
        }
      >
        <Link
          href="/"
          className={twMerge(
            "rounded-lg px-4 py-2 transition-colors",
            currentPage === "home"
              ? "bg-blue-100 hover:bg-blue-50"
              : "bg-transparent hover:bg-gray-100",
          )}
        >
          Home
        </Link>
        <Link
          href="/react-zoom-pan-pinch"
          className={twMerge(
            "rounded-lg px-4 py-2 transition-colors",
            currentPage === "react-zoom-pan-pinch"
              ? "bg-blue-100 hover:bg-blue-50"
              : "bg-transparent hover:bg-gray-100",
          )}
        >
          react-zoom-pan-pinch
        </Link>
        <Link
          href="/use-gesture"
          className={twMerge(
            "rounded-lg px-4 py-2 transition-colors",
            currentPage === "use-gesture"
              ? "bg-blue-100 hover:bg-blue-50"
              : "bg-transparent hover:bg-gray-100",
          )}
        >
          @use-gesture/react
        </Link>
        <Link
          href="/react-flow"
          className={twMerge(
            "rounded-lg px-4 py-2 transition-colors",
            currentPage === "react-flow"
              ? "bg-blue-100 hover:bg-blue-50"
              : "bg-transparent hover:bg-gray-100",
          )}
        >
          react-flow
        </Link>
      </header>
      <div className={"flex w-full"}>
        <aside
          className={
            "left-0 h-[100vh] w-[230px] shrink-0 border border-r-gray-200"
          }
        ></aside>
        <main
          className={"mt-[56px] h-[calc(100vh-56px)] w-[calc(100vw-230px)]"}
        >
          {children}
        </main>
      </div>
    </FullPage>
  );
};

export default TmpLayout;
