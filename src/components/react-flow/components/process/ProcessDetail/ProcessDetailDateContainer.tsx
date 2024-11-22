import ProcessDetailTaskItem from "@/components/react-flow/components/process/ProcessDetail/ProcessDetailTaskItem";

interface Props {
  type?: "default" | "start" | "end";
}

const ProcessDetailDateContainer = ({ type = "default" }: Props) => {
  if (type === "start") {
    return (
      <div
        className={
          "flex h-10 w-full items-center justify-center rounded-[7px] border border-[#40C057] bg-[#B5F38E] text-[12px] text-white"
        }
      >
        채용 시작
      </div>
    );
  }

  if (type === "end") {
    return (
      <div
        className={
          "flex h-10 w-full items-center justify-center rounded-[7px] border border-[#B6B6B6] bg-[#EEEEEE] text-[12px] text-[#636363]"
        }
      >
        채용 종료
      </div>
    );
  }

  return (
    <div
      className={
        "z-1 flex w-full flex-col gap-2 rounded-[7px] border border-gray-500 bg-white p-4"
      }
    >
      <div className={"flex w-full gap-2"}>
        <span className={"w-[60px] text-[12px]"}>11/6(수)</span>
        <ul className={"flex w-full flex-col gap-2"}>
          <ProcessDetailTaskItem />
          <ProcessDetailTaskItem />
          <ProcessDetailTaskItem />
          <ProcessDetailTaskItem />
        </ul>
      </div>
      <div className={"flex w-full justify-center"}>
        <button
          className={
            "flex h-4 w-4 items-center justify-center rounded-full bg-[#32363B] text-white"
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProcessDetailDateContainer;
