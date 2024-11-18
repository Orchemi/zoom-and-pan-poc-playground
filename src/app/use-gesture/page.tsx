"use client";

import { TransformContext } from "@/components/use-gesture/context/TransformContext";
import Depth1 from "@/components/use-gesture/elements/depth1/Depth1";
import { getId } from "@/shared/unique/createId";
import { useGesture } from "@use-gesture/react";
import { useContext, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const CurrentScale = () => {
  const { scale } = useContext(TransformContext);
  return (
    <div className={"fixed left-0 top-0 z-10"}>Current Scale: {scale}</div>
  );
};

export default function Page() {
  const ids = useMemo(
    () => ({
      인재접수: getId(),
      서류평가: getId(),
      역량검사: getId(),
      임원면접: getId(),
      채용종료: getId(),
    }),
    [],
  );

  // Transform 상태 관리
  const MAX_SCALE = 4;
  const MIN_SCALE = 0.2;
  const [transform, setTransform] = useState<{
    scale: number;
    x: number;
    y: number;
    startX?: number;
    startY?: number;
  }>({
    scale: 1,
    x: 0,
    y: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        event.preventDefault();

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
          const newScale = Math.min(
            Math.max(MIN_SCALE, transform.scale - dy * 0.01),
            MAX_SCALE,
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

  return (
    <TransformContext.Provider value={{ scale: transform.scale }}>
      <div
        className={"flex h-full w-full items-center justify-center bg-gray-100"}
      >
        <div
          ref={containerRef}
          className={twMerge("h-full w-full overflow-hidden")}
          {...bind()}
        >
          <div
            ref={contentRef}
            style={{
              transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
              transformOrigin: "0 0",
              width: "10000px",
              height: "10000px",
            }}
          >
            <CurrentScale />
            <section className={"p-20"}>
              <div className={"flex gap-[160px]"}>
                <Depth1 depth1Name={"인재 접수"} id={ids.인재접수} />
                <Depth1 depth1Name={"서류 평가"} id={ids.서류평가} />
                <Depth1 depth1Name={"역량 검사"} id={ids.역량검사} />
                <Depth1 depth1Name={"임원 면접"} id={ids.임원면접} />
                <Depth1 depth1Name={"채용 종료"} id={ids.채용종료} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </TransformContext.Provider>
  );
}
