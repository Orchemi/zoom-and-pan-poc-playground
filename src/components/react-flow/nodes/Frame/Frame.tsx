import { Node, NodeProps } from "@xyflow/react";
import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

export type FrameNode = Node<FrameData, "frame">;

export type FrameData = {
  source: string;
  style?: CSSProperties;
};

export const FRAME_WIDTH = 1000;
export const FRAME_HEIGHT = 1000;
const defaultStyle = {
  width: FRAME_WIDTH,
  height: FRAME_HEIGHT,
  background: "white",
} satisfies CSSProperties;

export function Frame({ data, selected }: NodeProps<FrameNode>) {
  return (
    <div
      className={twMerge(
        "frame flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-black",
        selected ? "border-red-400 shadow-lg" : "",
      )}
      style={{
        ...defaultStyle,
        ...data.style,
      }}
    >
      {data.source}
    </div>
  );
}
