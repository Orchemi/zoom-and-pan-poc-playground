// https://reactflow.dev/components/nodes/labeled-group-node

import { BaseNode } from "@/components/base-node";
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
        <div className="bg-secondary text-card-foreground w-fit rounded-br-sm bg-gray-200 p-2 text-xs">
          {data.label}
        </div>
      )}
    </BaseNode>
  );
}

LabeledGroupNode.displayName = "LabeledGroupNode";
