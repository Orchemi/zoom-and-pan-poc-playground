import { FocusTargetNode } from "@/components/react-flow/nodes/FocusTarget";
import { Node } from "@xyflow/react";
import { FrameNode } from "./Frame";

const layerTestNodes: (Node | FrameNode)[] = [
  {
    id: "layer-test-frame",
    position: { x: -1000, y: 1000 },
    type: "frame",
    data: {},
  },
];

const focusTestNodes: (FocusTargetNode | Node)[] = [
  {
    id: "focus-test-frame",
    position: { x: 1000, y: 0 },
    type: "frame",
    data: {},
  },
  {
    id: "focus-target-1",
    type: "focus-target",
    position: { x: 10, y: 10 },
    style: { width: 100, height: 100, background: "rgba(255, 255, 0, 0.3)" },
    parentId: "focus-test-frame",
    draggable: false,
    data: { source: "Target 1", next: "focus-target-2" },
  },
  {
    id: "focus-target-2",
    type: "focus-target",
    position: { x: 810, y: 810 },
    style: { width: 100, height: 100, background: "rgba(255, 0, 0, 0.3)" },
    parentId: "focus-test-frame",
    draggable: false,
    data: {
      source: "Target 2",
      prev: "focus-target-1",
      next: "focus-target-3",
    },
  },
  {
    id: "focus-target-3",
    type: "focus-target",
    position: { x: 210, y: 610 },
    style: { width: 100, height: 100, background: "rgba(0, 255, 0, 0.3)" },
    parentId: "focus-test-frame",
    draggable: false,
    data: {
      source: "Target 3",
      prev: "focus-target-2",
      next: "focus-target-4",
    },
  },
  {
    id: "focus-target-4",
    type: "focus-target",
    position: { x: 810, y: 110 },
    style: { width: 100, height: 100, background: "rgba(255, 0, 255, 0.3)" },
    parentId: "focus-test-frame",
    draggable: false,
    data: {
      source: "Target 4",
      prev: "focus-target-3",
      next: "focus-target-5",
    },
  },
  {
    id: "focus-target-5",
    type: "focus-target",
    position: { x: 210, y: 210 },
    style: { width: 100, height: 100, background: "rgba(0, 255, 255, 0.3)" },
    parentId: "focus-test-frame",
    draggable: false,
    data: { source: "Target 5", prev: "focus-target-4" },
  },
];

export const initialNodes: Node[] = [
  ...layerTestNodes,
  ...focusTestNodes,
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
  {
    id: "independent1",
    position: { x: 500, y: 0 },
    data: { label: "Independent1" },
    type: "",
  },
];
