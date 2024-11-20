import { FOCUS_TARGET_WIDTH, FocusTargetData } from "./FocusTarget";

export const focusTargetToElements = (
  initial: string,
  focusTargets: Record<string, FocusTargetData>,
) => {
  const stack = [{ id: initial, position: { x: 0, y: 0 } }];
  const visited = new Set<string>();
  const nodes = [];
  const edges = [];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const data = focusTargets[id];
    const node = { id, type: "focus-target", position, data };

    nodes.push(node);
    visited.add(id);

    if (data.prev && !visited.has(data.prev)) {
      const nextPosition = {
        x: position.x - FOCUS_TARGET_WIDTH,
        y: position.y,
      };

      stack.push({ id: data.prev, position: nextPosition });
      edges.push({ id: `${id}->${data.prev}`, source: id, target: data.prev });
    }
  }

  return { nodes, edges };
};
