import { ContainerNode } from "@/components/react-flow/nodes/Container/Container";
import {
  CUSTOM_NODE,
  NodeRequiredOptions,
} from "@/components/react-flow/nodes/node.type";

export type GenerateContainerOptions = Partial<ContainerNode> &
  NodeRequiredOptions;

export const generateContainerNode = (
  options: GenerateContainerOptions,
): ContainerNode => {
  const { data } = options;
  const { children } = data ?? {};

  return {
    type: CUSTOM_NODE.CONTAINER,
    data: {
      children,
      ...data,
    },
    draggable: false,
    ...options,
  };
};
