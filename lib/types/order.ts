import { Item } from "./item";
import { Job } from "./job";
import { User } from "./user";

export interface Order {
  id: string;
  user: User;
  store: string;
  items: Item[];
  price: number;
  datetime: string;
  origin: string;
  destination: string;
  timeline: Job[];
}