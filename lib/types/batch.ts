import { Order } from "./order";

export type BatchStatus = 'WAITING' | 'DERIVERING' | 'DONE';
export interface Batch {
  orderIds: string[];
  status: BatchStatus;
}