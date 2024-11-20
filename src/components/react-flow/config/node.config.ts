import { Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "parent1",
    position: { x: 0, y: 0 },
    style: { width: 400, height: 400 },
    type: "group",
    data: {},
  },
  {
    id: "child1",
    position: { x: 10, y: 10 },
    data: { label: "Child1" },
    type: "",
    parentId: "parent1",
    extent: "parent",
  },
  {
    id: "child2",
    position: { x: 200, y: 100 },
    data: { label: "Child2" },
    type: "",
    extent: "parent",
    parentId: "parent1",
  },
];
