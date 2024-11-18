import { v4 } from "uuid";

export type UuidV4Id = string;
export const getId = (): UuidV4Id => {
  return v4();
};
