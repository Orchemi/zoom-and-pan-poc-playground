import FullPage from "@/components/common/FullPage";

const TmpLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <FullPage>
      <header
        className={
          "absolute top-0 h-[56px] w-full border border-b-gray-200 bg-white shadow-sm"
        }
      ></header>
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
