import { FocusTargetNode } from "@/components/react-flow/nodes/FocusTarget/FocusTarget";
import {
  CUSTOM_NODE,
  NodeRequiredOptions,
} from "@/components/react-flow/nodes/node.type";

export type GenerateFocusTargetOptions = Partial<FocusTargetNode> &
  NodeRequiredOptions;

export const generateFocusTargetNode = (
  options: GenerateFocusTargetOptions,
): FocusTargetNode => {
  const { data } = options;
  const { source = "", prev, next } = data ?? {};

  return {
    type: CUSTOM_NODE.FOCUS_TARGET,
    data: {
      source,
      prev,
      next,
    },
    draggable: false,
    ...options,
  };
};
