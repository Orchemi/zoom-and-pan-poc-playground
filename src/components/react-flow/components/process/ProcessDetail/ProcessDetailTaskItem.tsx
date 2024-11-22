const ProcessDetailTaskItem = () => {
  const item = {
    type: "pen",
    date: "2021-11-06T18:00",
    status: "complete",
    text: "채용 설정 완료",
  };

  return (
    <li
      className={
        "flex w-full items-center gap-1 rounded-sm border border-gray-400 px-1 text-[12px]"
      }
    >
      <div
        className={"h-[10px] w-[10px] shrink-0 rounded-full bg-[#B5F38E]"}
      ></div>
      <span className={"w-12"}>{`${"18:00"}`}</span>
      <div className={"w-full"}>{item.text}</div>
    </li>
  );
};

export default ProcessDetailTaskItem;
