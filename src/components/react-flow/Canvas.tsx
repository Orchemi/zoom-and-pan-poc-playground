"use client";

import { boundaryProps } from "@/components/react-flow/boundary.constant";
import CanvasBackground from "@/components/react-flow/CanvasBackground";
import DevTools from "@/components/react-flow/devtools/Devtools";
import { initialEdges } from "@/components/react-flow/edges/edge.config";
import { initialNodes } from "@/components/react-flow/nodes/node.config";
import { nodeTypes } from "@/components/react-flow/nodes/node.type";
import useWheelAction from "@/components/react-flow/useWheelAction";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Controls,
  MiniMap,
  OnEdgesChange,
  OnNodesChange,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { useCallback, useState } from "react";

const CanvasInner = () => {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const [likeFigma, setLikeFigma] = useState(false);
  const { wheelProps } = useWheelAction({
    wheelActionLikeFigma: likeFigma,
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
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        zoomOnDoubleClick={false}
        deleteKeyCode={["Backspace", "Delete"]}
        minZoom={0.2}
        maxZoom={10}
        fitView
        fitViewOptions={{ nodes: [{ id: "main-frame" }], padding: 0.2 }}
        {...boundaryProps}
        {...wheelProps}
        proOptions={{ hideAttribution: true }}
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
      <div>
        <Panel position={"top-center"}>
          <button
            className={
              "rounded-md bg-blue-500 px-3 py-1 text-[14px] text-white"
            }
            onClick={() => {
              setLikeFigma((prev) => !prev);
            }}
          >
            {likeFigma ? "Figma Mode On" : "Figma Mode Off"}
          </button>
        </Panel>
      </div>
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
