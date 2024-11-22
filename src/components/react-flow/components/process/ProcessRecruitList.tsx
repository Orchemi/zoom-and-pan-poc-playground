export interface Recruit {
  id: string;
  name: string;
}

interface Props {
  recruitList: Recruit[];
}

const ProcessRecruitList = ({ recruitList }: Props) => {
  return (
    <div
      className={
        "flex h-[125px] w-full flex-col gap-2 rounded-xl border border-gray-500 p-2"
      }
    >
      <p className={"text-[12px]"}>공고 목록</p>
      {recruitList.map((recruit) => (
        <div
          key={recruit.id}
          className={
            "flex h-5 w-full justify-center rounded-sm border border-gray-400 text-[12px]"
          }
        >
          {recruit.name}
        </div>
      ))}
    </div>
  );
};

export default ProcessRecruitList;
