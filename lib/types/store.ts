import { Item } from "./item";
import { Station } from "./station";

export interface Store {
  name: string;
  stations: Station[];
  items: Item[];
}