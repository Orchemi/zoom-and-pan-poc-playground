import {
  Process,
  PROCESS_STATUS,
} from "@/components/react-flow/components/process/process.constant";

export const mockRecruitList = [
  {
    id: "1",
    name: "공고A",
  },
  {
    id: "2",
    name: "공고A",
  },
  {
    id: "3",
    name: "공고A",
  },
];

export const processMockData1: Process = {
  status: PROCESS_STATUS.COMPLETE,
  recruitList: mockRecruitList,
};
