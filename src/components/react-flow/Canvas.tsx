"use client";

import CanvasBackground from "@/components/react-flow/CanvasBackground";
import { initialEdges } from "@/components/react-flow/config/edge.config";
import { initialNodes } from "@/components/react-flow/config/node.config";
import DevTools from "@/components/react-flow/devtools/Devtools";
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
        position: "relative",
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
      <DevTools />
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
