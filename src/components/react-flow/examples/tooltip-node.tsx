// https://reactflow.dev/components/nodes/tooltip-node

import { BaseNode } from "@/components/react-flow/examples/base-node";
import {
  Handle,
  Node,
  NodeProps,
  NodeToolbar,
  NodeToolbarProps,
  Position,
} from "@xyflow/react";
import { useState } from "react";

export type TooltipNodeType = Node<{
  label: string;
  tooltip?: {
    label: string;
    position?: NodeToolbarProps["position"];
  };
}>;

export function TooltipNode({ data, selected }: NodeProps<TooltipNodeType>) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <BaseNode
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      selected={selected}
    >
      <NodeToolbar
        isVisible={isTooltipVisible || selected}
        className="bg-primary text-primary-foreground rounded-sm p-2"
        position={data.tooltip?.position}
      >
        {data.tooltip?.label}
      </NodeToolbar>
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </BaseNode>
  );
}
