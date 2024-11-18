import Canvas from "@/components/use-gesture/Canvas";
import { TransformProvider } from "@/components/use-gesture/context/TransformContext";

export default function Page() {
  return (
    <TransformProvider>
      <Canvas />
    </TransformProvider>
  );
}
