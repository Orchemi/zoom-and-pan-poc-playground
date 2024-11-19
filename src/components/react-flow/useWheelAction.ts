import { SelectionMode } from "@xyflow/react";

interface Props {
  wheelActionLikeFigma?: boolean;
}

const useWheelAction = ({ wheelActionLikeFigma }: Props) => {
  const wheelProps = wheelActionLikeFigma
    ? {
        panOnDrag: [1, 2],
        panOnScroll: true,
        selectionOnDrag: true,
        selectionMode: SelectionMode.Partial,
      }
    : {};

  return { wheelProps };
};

export default useWheelAction;
