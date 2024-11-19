import { SCALE } from "@/components/use-gesture/canvas/canvas.config";
import { TransformContext } from "@/components/use-gesture/context/TransformContext";
import { useGesture } from "@use-gesture/react";
import { useContext, useRef } from "react";

const useCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { transform, setTransform } = useContext(TransformContext);

  // Gesture 바인딩
  const bind = useGesture(
    {
      // 드래그 핸들러
      onDrag: ({ movement: [mx, my], first }) => {
        if (first) {
          // 드래그 시작 시 현재 위치 저장
          const startX = transform.x;
          const startY = transform.y;
          setTransform((prev) => ({ ...prev, startX, startY }));
        }

        setTransform((prev) => ({
          ...prev,
          x: (prev.startX || 0) + mx,
          y: (prev.startY || 0) + my,
        }));
      },

      // 휠 핸들러
      onWheel: ({ event, delta: [dx, dy], shiftKey, ctrlKey }) => {
        if (ctrlKey) {
          // 마우스 위치 계산
          const container = containerRef.current;
          if (!container) return;

          const rect = container.getBoundingClientRect();

          // 컨테이너 내에서의 마우스 상대 위치
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          // 현재 transform 상태에서의 마우스 위치
          const mouseX = (x - transform.x) / transform.scale;
          const mouseY = (y - transform.y) / transform.scale;

          // 새로운 scale 계산
          const newScale = Number(
            Math.min(
              Math.max(SCALE.MIN, transform.scale - dy * 0.01),
              SCALE.MAX,
            ).toFixed(1),
          );

          // scale 변화에 따른 위치 조정
          const newX = x - mouseX * newScale;
          const newY = y - mouseY * newScale;

          setTransform({
            x: newX,
            y: newY,
            scale: newScale,
          });
        } else if (shiftKey) {
          setTransform((prev) => ({
            ...prev,
            x: prev.x - dx * 2,
          }));
        } else {
          setTransform((prev) => ({
            ...prev,
            y: prev.y - dy * 2,
          }));
        }
      },
    },
    {
      drag: {
        from: () => [
          transform.x * transform.scale,
          transform.y * transform.scale,
        ],
      },
      wheel: { preventDefault: true },
    },
  );

  return { containerRef, contentRef, bind };
};

export default useCanvas;
