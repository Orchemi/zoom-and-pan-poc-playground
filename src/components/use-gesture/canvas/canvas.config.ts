import { TransformState } from "@/components/use-gesture/canvas/canvas.type";

export const SCALE = {
  MAX: 4,
  MIN: 0.2,
};

export const DEFAULT_TRANSFORM_STATE: TransformState = {
  scale: 1,
  x: 0,
  y: 0,
};
