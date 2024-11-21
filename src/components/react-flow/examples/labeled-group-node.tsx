// https://reactflow.dev/components/nodes/labeled-group-node

import { BaseNode } from "@/components/react-flow/examples/base-node";
import { Node, NodeProps } from "@xyflow/react";

type LabeledGroupNode = Node<{
  label: string;
}>;

export function LabeledGroupNode({
  data,
  selected,
}: NodeProps<LabeledGroupNode>) {
  return (
    <BaseNode
      selected={selected}
      className="h-full overflow-hidden rounded-sm bg-white bg-opacity-50 p-0"
    >
      {data.label && (
        <div className="w-fit rounded-br-sm bg-gray-200 bg-secondary p-2 text-xs text-card-foreground">
          {data.label}
        </div>
      )}
    </BaseNode>
  );
}

LabeledGroupNode.displayName = "LabeledGroupNode";
