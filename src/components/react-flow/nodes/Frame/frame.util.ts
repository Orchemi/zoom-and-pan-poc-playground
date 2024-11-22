import { FrameNode } from "@/components/react-flow/nodes/Frame/Frame";
import {
  CUSTOM_NODE,
  NodeRequiredOptions,
} from "@/components/react-flow/nodes/node.type";

export type GenerateFrameNodeOptions = Partial<FrameNode> & NodeRequiredOptions;

export const generateFrameNode = (
  options: GenerateFrameNodeOptions,
): FrameNode => {
  const { data } = options;
  const { source = "", style = {} } = data ?? {};

  return {
    type: CUSTOM_NODE.FRAME,
    data: {
      source,
      style,
    },
    draggable: false,
    ...options,
  };
};
