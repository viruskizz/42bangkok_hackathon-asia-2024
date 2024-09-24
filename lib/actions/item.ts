import axios, { Axios } from "axios";
import { Item } from "@/lib/types/item";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
});

export async function list(): Promise<Item[]> {
    const table = "items.json";
    const res = await instance.get(table);
    return res.data;
}

export async function create(data: Item) {
    const table = `items.json`;
    const res = await instance.post(table, data);
    return res.data;
}

export async function put(orderId: string , data: Item) {
    const table = `items/${orderId}.json`;
    const res = await instance.put(table, data);
    return res.data;
}
