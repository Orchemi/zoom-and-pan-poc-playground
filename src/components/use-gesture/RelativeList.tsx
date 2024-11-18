import { TransformContext } from "@/components/use-gesture/context/TransformContext";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

// ScaleInvariantWrapper 컴포넌트
const ScaleInvariantWrapper = ({ children }: { children: React.ReactNode }) => {
  const { scale } = useContext(TransformContext);
  const inverseScale = 1 / scale;

  return <div style={{ transform: `scale(${inverseScale})` }}>{children}</div>;
};

const RelativeList = () => {
  const { scale } = useContext(TransformContext);
  const topPosition = 20 * scale;

  return (
    <ScaleInvariantWrapper>
      <ul
        className={twMerge(
          "absolute left-0 w-20 gap-2 rounded-lg border border-gray-300 bg-white p-1",
          "text-gray-700",
        )}
        style={{ top: `${topPosition}px` }}
      >
        <li className={"rounded-md px-3 py-1 text-[14px] hover:bg-gray-100"}>
          Item 1
        </li>
        <li className={"rounded-md px-3 py-1 text-[14px] hover:bg-gray-100"}>
          Item 2
        </li>
        <li className={"rounded-md px-3 py-1 text-[14px] hover:bg-gray-100"}>
          Item 3
        </li>
      </ul>
    </ScaleInvariantWrapper>
  );
};

export default RelativeList;
