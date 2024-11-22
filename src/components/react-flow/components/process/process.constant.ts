import { Recruit } from "@/components/react-flow/components/process/ProcessRecruitList";

export const PROCESS_STATUS = {
  COMPLETE: "COMPLETE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  ERROR: "ERROR",
  CANCELED: "CANCELED",
} as const;

export type ProcessStatus = keyof typeof PROCESS_STATUS;

export interface Process {
  status: ProcessStatus;
  recruitList: Recruit[];
}
