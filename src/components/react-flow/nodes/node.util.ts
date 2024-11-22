import { generateContainerNode } from "@/components/react-flow/nodes/Container/container.util";
import { generateFocusTargetNode } from "@/components/react-flow/nodes/FocusTarget/focusTarget.util";
import { generateFrameNode } from "@/components/react-flow/nodes/Frame/frame.util";
import { CUSTOM_NODE } from "@/components/react-flow/nodes/node.type";

export const createNode = {
  [CUSTOM_NODE.FRAME]: generateFrameNode,
  [CUSTOM_NODE.CONTAINER]: generateContainerNode,
  [CUSTOM_NODE.FOCUS_TARGET]: generateFocusTargetNode,
};
