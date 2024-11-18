"use client";

import Depth1 from "@/components/elements/depth1/Depth1";
import { getId } from "@/shared/unique/createId";
import {
  TransformComponent,
  TransformWrapper,
  useTransformComponent,
} from "react-zoom-pan-pinch";
import { twMerge } from "tailwind-merge";

const CurrentScale = () => {
  return useTransformComponent(({ state }) => {
    return (
      <div className={"fixed left-0 top-0 z-10"}>
        Current Scale: {state.scale}
      </div>
    );
  });
};

export default function Page() {
  const 인재접수_id = getId();
  const 서류평가_id = getId();
  const 역량검사_id = getId();
  const 임원면접_id = getId();
  const 채용종료_id = getId();

  return (
    <div
      className={"flex h-full w-full items-center justify-center bg-gray-100"}
    >
      <div className={twMerge("h-full w-full overflow-hidden")}>
        <TransformWrapper
          initialScale={1}
          minScale={0.2}
          maxScale={4}
          panning={{
            velocityDisabled: true,
          }}
        >
          <TransformComponent
            // 화면에 보이는 영역
            wrapperStyle={{
              width: "100%",
              maxWidth: "100%",
              height: "100%",
              overflow: "hidden",
            }}
            // 하위 영역이 위치하는 전체 캔버스 영역
            contentStyle={{
              width: "10000px",
              height: "10000px",
            }}
          >
            <CurrentScale />
            <section className={"p-20"}>
              <div className={"flex gap-[160px]"}>
                <Depth1 depth1Name={"인재 접수"} id={인재접수_id} />
                <Depth1 depth1Name={"서류 평가"} id={서류평가_id} />
                <Depth1 depth1Name={"역량 검사"} id={역량검사_id} />
                <Depth1 depth1Name={"임원 면접"} id={임원면접_id} />
                <Depth1 depth1Name={"채용 종료"} id={채용종료_id} />
              </div>
            </section>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
