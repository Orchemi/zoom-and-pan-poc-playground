import { FocusTargetNode } from "@/components/react-flow/nodes/FocusTarget/FocusTarget";
import { CUSTOM_NODE } from "@/components/react-flow/nodes/node.type";
import { createNode } from "@/components/react-flow/nodes/node.util";
import { Node } from "@xyflow/react";
import { FrameNode } from "./Frame/Frame";

const layerTestNodes: (Node | FrameNode)[] = [
  createNode[CUSTOM_NODE.FRAME]({
    id: "layer-test-frame",
    position: { x: -2000, y: 1000 },
    data: {
      style: { width: 2000, height: 1000 },
    },
  }),
  createNode[CUSTOM_NODE.CONTAINER]({
    id: "layer-test-container-1",
    position: { x: 100, y: 100 },
    data: {
      label: "Container 1",
      children: "hello",
    },
    parentId: "layer-test-frame",
    extent: "parent",
  }),
];

const focusTestNodes: (FocusTargetNode | Node)[] = [
  createNode[CUSTOM_NODE.FRAME]({
    id: "focus-test-frame",
    position: { x: 1000, y: 0 },
  }),
  createNode[CUSTOM_NODE.FOCUS_TARGET]({
    id: "focus-target-1",
    position: { x: 10, y: 10 },
    style: { width: 100, height: 100, background: "rgba(255, 255, 0, 0.3)" },
    parentId: "focus-test-frame",
    data: { source: "Target 1", next: "focus-target-2" },
  }),
  createNode[CUSTOM_NODE.FOCUS_TARGET]({
    id: "focus-target-2",
    position: { x: 810, y: 810 },
    style: { width: 100, height: 100, background: "rgba(255, 0, 0, 0.3)" },
    parentId: "focus-test-frame",
    data: {
      source: "Target 2",
      prev: "focus-target-1",
      next: "focus-target-3",
    },
  }),
  createNode[CUSTOM_NODE.FOCUS_TARGET]({
    id: "focus-target-3",
    position: { x: 210, y: 610 },
    style: { width: 100, height: 100, background: "rgba(0, 255, 0, 0.3)" },
    parentId: "focus-test-frame",
    data: {
      source: "Target 3",
      prev: "focus-target-2",
      next: "focus-target-4",
    },
  }),
  createNode[CUSTOM_NODE.FOCUS_TARGET]({
    id: "focus-target-4",
    position: { x: 810, y: 110 },
    style: { width: 100, height: 100, background: "rgba(255, 0, 255, 0.3)" },
    parentId: "focus-test-frame",
    data: {
      source: "Target 4",
      prev: "focus-target-3",
      next: "focus-target-5",
    },
  }),
  createNode[CUSTOM_NODE.FOCUS_TARGET]({
    id: "focus-target-5",
    position: { x: 210, y: 210 },
    style: { width: 100, height: 100, background: "rgba(0, 255, 255, 0.3)" },
    parentId: "focus-test-frame",
    data: { source: "Target 5", prev: "focus-target-4" },
  }),
];

export const initialNodes: Node[] = [...layerTestNodes, ...focusTestNodes];
