// 채용 전형

const ProcessHeader = () => {
  return (
    <div className={"flex h-[65px] w-full flex-col items-center"}>
      <button
        className={
          "mb-[10px] flex h-[16px] w-fit items-center rounded-full bg-[#02a5ec]/40 px-[4px] text-[6px] font-[400] leading-none"
        }
      >
        지원 접수
      </button>
      <p className={"text-[6px] font-[400]"}>00/00(월)~00/00(월)</p>
    </div>
  );
};

export default ProcessHeader;
