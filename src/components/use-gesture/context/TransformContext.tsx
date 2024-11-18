import { createContext } from "react";

// Transform 상태를 공유하기 위한 Context
export const TransformContext = createContext<{
  scale: number;
}>({ scale: 1 });
