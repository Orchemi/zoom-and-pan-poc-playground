import FullPage from "@/components/common/FullPage";
import Link from "next/link";

const TmpLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <FullPage>
      <header
        className={
          "absolute top-0 flex h-[56px] w-full items-center gap-10 border border-b-gray-200 bg-white px-10 shadow-sm"
        }
      >
        <Link
          href="/"
          className={"rounded-lg px-4 py-2 transition-colors hover:bg-gray-100"}
        >
          Home
        </Link>
        <Link
          href="/react-zoom-pan-pinch"
          className={"rounded-lg px-4 py-2 transition-colors hover:bg-gray-100"}
        >
          react-zoom-pan-pinch
        </Link>
        <Link
          href="/use-gesture"
          className={"rounded-lg px-4 py-2 transition-colors hover:bg-gray-100"}
        >
          @use-gesture/react
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
