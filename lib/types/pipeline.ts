export type PipelineStatus = 'PENDING' | 'DONE';

export interface Pipeline {
  datetime: string;
  status: PipelineStatus;
  jobIds: string[];
}
