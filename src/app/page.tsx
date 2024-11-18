import FullPage from "@/components/common/FullPage";
import Link from "next/link";

export default function Home() {
  return (
    <FullPage className={"justify-center"}>
      <section
        className={
          "flex w-[300px] flex-col flex-wrap justify-center gap-5 rounded-2xl border border-red-300 p-10"
        }
      >
        <Link
          href={"/react-zoom-pan-pinch"}
          className={
            "flex w-full items-center justify-center rounded-md bg-red-500 p-4 transition-all hover:opacity-80"
          }
        >
          <button className={"text-white"}>React Zoom Pan Pinch</button>
        </Link>
        <Link
          href={"/use-gesture"}
          className={
            "flex w-full items-center justify-center rounded-md bg-red-500 p-4 transition-all hover:opacity-80"
          }
        >
          <button className={"text-white"}>@use-gesture/react</button>
        </Link>
      </section>
    </FullPage>
  );
}
