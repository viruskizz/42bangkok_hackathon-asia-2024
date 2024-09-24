import { Station } from "./station";
import { User } from "./user";

export type JobType = 'PICKUP' | 'DELIVER'
export type JobStatus = 'WAITING' | 'DOING' | 'DONE'
export interface Job {
  type: JobType;
  station: 'Tokyo' | 'Bangkok';
  user: User | null;
  status: JobStatus;
  datetime: string;
  batchId: string;
}
