import { Background, BackgroundVariant } from "@xyflow/react";

const CanvasBackground = () => {
  return (
    <>
      <Background
        id="0"
        bgColor={"#eeeeee"}
        variant={BackgroundVariant.Dots}
        color={"transparent"}
      />

      <Background
        id="1"
        gap={10}
        color="#e5e5e5"
        variant={BackgroundVariant.Lines}
      />

      <Background
        id="2"
        gap={100}
        color="#dddddd"
        variant={BackgroundVariant.Lines}
      />
    </>
  );
};

export default CanvasBackground;
