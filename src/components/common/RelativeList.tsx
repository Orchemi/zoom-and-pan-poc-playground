import {
  useTransformComponent,
  useTransformContext,
} from "react-zoom-pan-pinch";
import { twMerge } from "tailwind-merge";

// RelativeList 컴포넌트를 scale 영향을 받지 않도록 감싸는 컴포넌트
const ScaleInvariantWrapper = ({ children }: { children: React.ReactNode }) => {
  return useTransformComponent(({ state }) => {
    const inverseScale = 1 / state.scale;

    return (
      <div style={{ transform: `scale(${inverseScale})` }}>{children}</div>
    );
  });
};

// 확대/축소의 영향을 받지 않는 컴포넌트

const RelativeList = () => {
  const { transformState } = useTransformContext();
  const { scale } = transformState;
  const inverseScale = 1 / scale;
  const topPosition = 40 * inverseScale;

  return (
    <ScaleInvariantWrapper>
      <ul
        className={twMerge(
          "absolute left-0 w-20 gap-2 rounded-lg border border-gray-300 bg-white p-1",
          `top-[${topPosition}px]`,
          "text-gray-700",
        )}
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
