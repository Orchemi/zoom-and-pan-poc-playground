import { processMockData1 } from "@/components/react-flow/components/process/process.mock";
import ProcessDetail from "@/components/react-flow/components/process/ProcessDetail/ProcessDetail";
import ProcessHeader from "@/components/react-flow/components/process/ProcessHeader";
import ProcessRecruitList from "@/components/react-flow/components/process/ProcessRecruitList";
import { FocusTargetNode } from "@/components/react-flow/nodes/FocusTarget/FocusTarget";
import { CUSTOM_NODE } from "@/components/react-flow/nodes/node.type";
import { createNode } from "@/components/react-flow/nodes/node.util";
import { Node } from "@xyflow/react";

const mainNodes: Node[] = [
  createNode[CUSTOM_NODE.FRAME]({
    id: "main-frame",
    position: { x: -2000, y: 1000 },
    data: {
      style: { width: 2000, height: 1500 },
    },
  }),
  createNode[CUSTOM_NODE.CONTAINER]({
    id: "전형1-container",
    position: { x: 100, y: 40 },
    parentId: "main-frame",
  }),
  createNode[CUSTOM_NODE.CONTAINER]({
    id: "전형1-header",
    position: { x: 0, y: 0 },
    parentId: "전형1-container",
    data: {
      style: { width: 318 },
      children: <ProcessHeader />,
    },
  }),
  createNode[CUSTOM_NODE.CONTAINER]({
    id: "전형1-공고목록",
    position: { x: 0, y: 87 },
    parentId: "전형1-container",
    data: {
      style: { width: 318 },
      children: (
        <ProcessRecruitList recruitList={processMockData1.recruitList} />
      ),
    },
  }),
  createNode[CUSTOM_NODE.CONTAINER]({
    id: "전형1-전형세부",
    position: { x: 0, y: 250 },
    parentId: "전형1-container",
    data: {
      style: { width: 318 },
      children: <ProcessDetail isStart />,
    },
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

export const initialNodes: Node[] = [...mainNodes, ...focusTestNodes];
