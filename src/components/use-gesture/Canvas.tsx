"use client";

import useCanvas from "@/components/use-gesture/canvas/useCanvas";
import { TransformContext } from "@/components/use-gesture/context/TransformContext";
import Depth1 from "@/components/use-gesture/elements/depth1/Depth1";
import { getId } from "@/shared/unique/createId";
import { useContext, useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";

const Canvas = () => {
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
  const { transform } = useContext(TransformContext);
  const { containerRef, contentRef, bind } = useCanvas();

  useEffect(() => {
    console.log(transform);
  }, [transform]);

  return (
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
          }}
        >
          <div className={"fixed left-0 top-0 z-10"}>
            Current Scale: {transform.scale}
          </div>
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
  );
};

export default Canvas;
