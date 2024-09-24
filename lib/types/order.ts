import { Item } from "./item";
import { Job } from "./job";

export type OrderStatus = 'WAITING' | 'DERIVERING' | 'DONE';
export interface Order {
  id?: string;
  username: string;
  store: string;
  items: Item[];
  price: number;
  datetime: string;
  origin: string;
  destination: string;
  timeline?: Job[];
  status: OrderStatus;
}