"use client";

import CanvasBackground from "@/components/react-flow/CanvasBackground";
import useWheelAction from "@/components/react-flow/useWheelAction";
import {
  addEdge,
  Connection,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { useCallback } from "react";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const CanvasInner = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const { wheelProps } = useWheelAction({
    wheelActionLikeFigma: true,
  });

  return (
    <div style={{ width: "calc(100vw - 230px)", height: "calc(100vh - 56px)" }}>
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
        bgColor={"white"}
        nodeColor={"gray"}
        maskColor={"lightgray"}
        zoomable={true}
        pannable={true}
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
