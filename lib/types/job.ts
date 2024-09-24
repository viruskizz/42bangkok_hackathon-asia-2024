import { Station } from "./station";
import { User } from "./user";

export type JobType = 'PICKUP' |  'DROPOFF'| 'LOAD' | 'UNLOAD' | 'DERIVER' | 'RECEIVE'
export type JobStatus = 'WAITING' | 'DOING' | 'DONE'
export interface Job {
  type: JobType;
  station: Station;
  user: User;
  status: JobStatus;
  datetime: string;
  batchId: string;
}
