import { Node, NodeProps, useReactFlow } from "@xyflow/react";
import { CSSProperties, useCallback } from "react";
import { twMerge } from "tailwind-merge";

export const FOCUS_TARGET_WIDTH = 100;
export const FOCUS_TARGET_HEIGHT = 100;

export type FocusTargetNode = Node<FocusTargetData, "focus-target">;

export type FocusTargetData = {
  source: string;
  prev?: string;
  next?: string;
};

const style = {
  width: FOCUS_TARGET_WIDTH,
  height: FOCUS_TARGET_HEIGHT,
} satisfies CSSProperties;

export function FocusTarget({ data }: NodeProps<FocusTargetNode>) {
  const { fitView } = useReactFlow();

  const moveToFocusTarget = useCallback((id: string) => {
    fitView({ nodes: [{ id }], duration: 200, padding: 2 });
  }, []);

  return (
    <div
      className={
        "focus-target nodrag flex flex-col items-center justify-center gap-2 border-2 border-black"
      }
      style={style}
    >
      {data.source}
      <div className={"flex gap-2"}>
        <button
          disabled={!data.prev}
          className={twMerge(
            "flex h-6 w-6 items-center justify-center rounded-full border border-black bg-white",
            data.prev
              ? "cursor-pointer"
              : "border-gray-300 bg-gray-50 text-gray-300",
          )}
          onClick={() => moveToFocusTarget(data.prev!)}
        >
          ←
        </button>
        <button
          disabled={!data.next}
          className={twMerge(
            "flex h-6 w-6 items-center justify-center rounded-full border border-black bg-white",
            data.next
              ? "cursor-pointer"
              : "border-gray-300 bg-gray-50 text-gray-300",
          )}
          onClick={() => moveToFocusTarget(data.next!)}
        >
          →
        </button>
      </div>
    </div>
  );
}
