import Depth1Button from "@/components/use-gesture/elements/depth1/Depth1Button";
import Depth2Area from "@/components/use-gesture/elements/depth2/Depth2Area";
import { useHash } from "@/shared/route/useHash";
import { memo } from "react";

interface Props {
  id: string;
  depth1Name: string;
}

const Depth1 = ({ id, depth1Name }: Props) => {
  const { get, set } = useHash();
  const hash = get();
  const active = hash === id;

  return (
    <div className={"relative"}>
      <Depth1Button onClick={() => set(id)} active={active}>
        {depth1Name}
      </Depth1Button>
      {active && <Depth2Area />}
    </div>
  );
};

export default memo(Depth1);
