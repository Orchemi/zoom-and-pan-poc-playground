import { ConnectionLineType, Edge } from "@xyflow/react";

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "child1",
    target: "child2",
    type: ConnectionLineType.SmoothStep,
  },
];
