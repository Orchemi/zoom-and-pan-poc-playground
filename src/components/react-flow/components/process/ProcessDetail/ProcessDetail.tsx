import ProcessDetailDateContainer from "@/components/react-flow/components/process/ProcessDetail/ProcessDetailDateContainer";
import ProcessDetailDatesEdge from "@/components/react-flow/components/process/ProcessDetail/ProcessDetailDatesEdge";

interface Props {
  isStart?: boolean;
  isEnd?: boolean;
}

const ProcessDetail = ({ isStart, isEnd }: Props) => {
  return (
    <div className={"relative w-full"}>
      <div className={"z-1 flex w-full flex-col gap-4"}>
        {isStart && <ProcessDetailDateContainer type={"start"} />}
        <ProcessDetailDateContainer />
        <ProcessDetailDateContainer />
        <ProcessDetailDateContainer />
        {isEnd && <ProcessDetailDateContainer type={"end"} />}
      </div>
      <ProcessDetailDatesEdge />
    </div>
  );
};

export default ProcessDetail;
