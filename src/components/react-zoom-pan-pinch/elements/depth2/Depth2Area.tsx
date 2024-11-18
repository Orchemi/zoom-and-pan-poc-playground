import RelativeList from "@/components/react-zoom-pan-pinch/RelativeList";
import { useState } from "react";

const Depth2Area = () => {
  return (
    <div
      className={
        "absolute left-[-20px] top-[100px] h-[500px] w-[260px] bg-blue-300/30"
      }
    >
      <div
        className={
          "flex h-full w-full flex-col items-center justify-center gap-10"
        }
      >
        하위 영역
        <ListCallButton />
      </div>
    </div>
  );
};

const ListCallButton = () => {
  const [showList, setShowList] = useState(false);
  return (
    <button
      className={
        "relative flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
      }
      onClick={() => {
        setShowList(true);
      }}
    >
      <span>+</span>
      {showList && <RelativeList />}
    </button>
  );
};

export default Depth2Area;
