"use client";

import CanvasBackground from "@/components/react-flow/CanvasBackground";
import useWheelAction from "@/components/react-flow/useWheelAction";
import {
  addEdge,
  Connection,
  ConnectionLineType,
  Controls,
  Edge,
  MiniMap,
  Node,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { useCallback } from "react";

const initialNodes: Node[] = [
  {
    id: "parent1",
    position: { x: 0, y: 0 },
    style: { width: 400, height: 200 },
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
    position: { x: 10, y: 100 },
    data: { label: "Child2" },
    type: "",
    extent: "parent",
    parentId: "parent1",
  },
];
const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "child1",
    target: "child2",
    type: ConnectionLineType.SmoothStep,
  },
];

const CanvasInner = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const { wheelProps } = useWheelAction({
    wheelActionLikeFigma: false,
  });

  return (
    <div
      style={{
        width: "calc(100vw - 230px)",
        height: "calc(100vh - 56px)",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        deleteKeyCode={["Backspace", "Delete"]}
        fitView
        fitViewOptions={{
          padding: 20,
          includeHiddenNodes: true,
        }}
        minZoom={0.1}
        maxZoom={10}
        {...wheelProps}
      />
      <Controls
        style={{ background: "white" }}
        orientation={"horizontal"}
        position={"bottom-center"}
      />
      <MiniMap
        style={{ left: "unset" }}
        position={"bottom-left"}
        bgColor={"white"}
        nodeColor={"gray"}
        maskColor={"rgba(0,0,0,0.2)"}
        zoomable
        pannable
      />
      <CanvasBackground />
    </div>
  );
};

const Canvas = () => {
  return (
    <ReactFlowProvider>
      <CanvasInner />
    </ReactFlowProvider>
  );
};

export default Canvas;
