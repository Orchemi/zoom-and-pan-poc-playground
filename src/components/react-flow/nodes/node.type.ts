import { Container } from "@/components/react-flow/nodes/Container/Container";
import { FocusTarget } from "@/components/react-flow/nodes/FocusTarget/FocusTarget";
import { Frame } from "@/components/react-flow/nodes/Frame/Frame";
import { XYPosition } from "@xyflow/react";

export type NodeRequiredOptions = {
  id: string;
  position: XYPosition;
};

export const CUSTOM_NODE = {
  FOCUS_TARGET: "focusTarget",
  FRAME: "frame",
  CONTAINER: "container",
} as const;

export type CustomNode = (typeof CUSTOM_NODE)[keyof typeof CUSTOM_NODE];

export const nodeTypes = {
  [CUSTOM_NODE.FOCUS_TARGET]: FocusTarget,
  [CUSTOM_NODE.FRAME]: Frame,
  [CUSTOM_NODE.CONTAINER]: Container,
};
