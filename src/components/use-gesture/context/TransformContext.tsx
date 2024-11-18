"use client";

import { DEFAULT_TRANSFORM_STATE } from "@/components/use-gesture/canvas/canvas.config";
import { TransformState } from "@/components/use-gesture/canvas/canvas.type";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface Props {
  transform: TransformState;
  setTransform: Dispatch<SetStateAction<TransformState>>;
}

// Transform 상태를 공유하기 위한 Context
export const TransformContext = createContext<Props>({
  transform: DEFAULT_TRANSFORM_STATE,
  setTransform: (prev) => {},
});

export const TransformProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [transform, setTransform] = useState<TransformState>(
    DEFAULT_TRANSFORM_STATE,
  );

  return (
    <TransformContext.Provider value={{ transform, setTransform }}>
      {children}
    </TransformContext.Provider>
  );
};
