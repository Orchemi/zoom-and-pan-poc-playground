// https://reactflow.dev/components/nodes/placeholder-node

import { BaseNode } from "@/components/react-flow/examples/base-node";
import { Handle, Node, NodeProps, Position, useReactFlow } from "@xyflow/react";

type PlaceholderNodeData = Node<{
  label: string;
}>;

export function PlaceholderNode({
  data,
  id,
  selected,
}: NodeProps<PlaceholderNodeData>) {
  const { setNodes, setEdges } = useReactFlow();

  const handleClick = () => {
    setEdges((edges) =>
      edges.map((edge) =>
        edge.target === id ? { ...edge, animated: false } : edge,
      ),
    );

    setNodes((nodes) => {
      const updatedNodes = nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: { ...node.data, label: "New Node" },
            type: "default",
          };
        }
        return node;
      });
      return updatedNodes;
    });
  };

  return (
    <BaseNode
      id={id}
      selected={selected}
      className="bg-card w-[150px] border-dashed border-gray-400 p-2 text-center text-gray-400 shadow-none"
      onClick={handleClick}
    >
      {data.label}
      <Handle
        type="target"
        style={{ visibility: "hidden" }}
        position={Position.Top}
        isConnectable={false}
      />
      <Handle
        type="source"
        style={{ visibility: "hidden" }}
        position={Position.Bottom}
        isConnectable={false}
      />
    </BaseNode>
  );
}

PlaceholderNode.displayName = "PlaceholderNode";
