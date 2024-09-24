import axios, { Axios } from "axios";
import { Order } from "@/lib/types/order";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
});

export async function list(): Promise<Order[]> {
    const table = "orders.json";
    const res = await instance.get(table);
    return res.data;
}

export async function create(data: Order) {
    const table = `orders.json`;
    const res = await instance.post(table, data);
    return res.data;
}

export async function put(orderId: string , data: Order) {
    const table = `orders/${orderId}.json`;
    const res = await instance.put(table, data);
    return res.data;
}
