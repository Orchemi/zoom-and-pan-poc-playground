import { Node, NodeProps } from "@xyflow/react";
import React, { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

export type ContainerNode = Node<ContainerData, "container">;

export type ContainerData = {
  label?: string;
  style?: CSSProperties;
  children: React.ReactNode;
};

const defaultStyle = {} satisfies CSSProperties;

export function Container({ data, selected }: NodeProps<ContainerNode>) {
  return (
    <div
      className={twMerge(
        "frame h-full w-full",
        selected ? "shadow-[inset_0_0_0_1px_#f5f5f5]" : "",
      )}
      style={{
        ...defaultStyle,
        ...data.style,
      }}
    >
      {data.children}
    </div>
  );
}
