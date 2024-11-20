//https://reactflow.dev/components/controls/zoom-select

"use client";

import { Panel, PanelProps, useReactFlow, useStore } from "@xyflow/react";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const ZoomSelect = React.forwardRef<
  HTMLDivElement,
  Omit<PanelProps, "children">
>(({ className, ...props }) => {
  const { zoomTo, fitView } = useReactFlow();

  const handleZoomChange = (value: string) => {
    if (value === "best-fit") {
      fitView();
    } else {
      const zoomValue = parseFloat(value);
      if (!isNaN(zoomValue)) {
        zoomTo(zoomValue);
      }
    }
  };

  const { zoomLevels } = useStore((state) => {
    const minZoom = state.minZoom;
    const maxZoom = state.maxZoom;

    const levels = [];
    const zoomIncrement = 50;
    for (
      let i = Math.ceil(minZoom * 100);
      i <= Math.floor(maxZoom * 100);
      i += zoomIncrement
    ) {
      levels.push((i / 100).toString());
    }

    return { zoomLevels: levels };
  });

  return (
    <Panel
      className={cn("bg-primary-foreground flex text-foreground", className)}
      {...props}
    >
      <Select onValueChange={handleZoomChange}>
        <SelectTrigger className="bg-primary-foreground w-[140px]">
          <SelectValue placeholder="Zoom" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="best-fit">Best Fit</SelectItem>
          <div className="mx-2 my-1 border-t" />
          {zoomLevels.map((level) => (
            <SelectItem key={level} value={level}>
              {`${(parseFloat(level) * 100).toFixed(0)}%`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Panel>
  );
});

ZoomSelect.displayName = "ZoomSelect";

export { ZoomSelect };
