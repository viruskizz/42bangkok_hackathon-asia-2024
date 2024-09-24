export type PipelineStatus = 'PENDING' | 'DONE';

export interface Pipeline {
  datetime: string;
  status: PipelineStatus;
  batchId: string;
  orderIds: string[];
  jobIds: string[];
}
