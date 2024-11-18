import FullPage from "@/components/common/FullPage";
import Link from "next/link";

export default function Home() {
  return (
    <FullPage className={"justify-center"}>
      <section
        className={
          "flex w-[300px] flex-wrap justify-center rounded-2xl border border-red-300 p-10"
        }
      >
        <Link
          href={"/react-zoom-pan-pinch"}
          className={
            "flex w-full items-center justify-center rounded-md bg-white p-4 transition-all hover:opacity-80"
          }
        >
          <button className={"text-red-500"}>React Zoom Pan Pinch</button>
        </Link>
      </section>
    </FullPage>
  );
}
