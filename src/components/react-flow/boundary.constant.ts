import { ReactFlowProps } from "@xyflow/react";

// 작업 영역의 크기 정의
const CANVAS_WIDTH = 10000;
const CANVAS_HEIGHT = 10000;

// 중앙에서 시작하도록 초기 위치 계산
const INITIAL_X = -CANVAS_WIDTH / 2;
const INITIAL_Y = -CANVAS_HEIGHT / 2;

// 작업 영역 제한 설정
const translateExtent: ReactFlowProps["translateExtent"] = [
  [INITIAL_X, INITIAL_Y], // 좌상단 좌표
  [INITIAL_X + CANVAS_WIDTH, INITIAL_Y + CANVAS_HEIGHT], // 우하단 좌표
];
// 초기 뷰포트 위치 설정 (선택적)
const defaultViewport: ReactFlowProps["defaultViewport"] = {
  x: INITIAL_X + CANVAS_WIDTH / 4,
  y: INITIAL_Y + CANVAS_HEIGHT / 4,
  zoom: 1,
};

export const boundaryProps: Partial<ReactFlowProps> = {
  translateExtent,
  defaultViewport,
};
