import axior from 'axios';
import { Order } from '@/lib/types/order';

export async function list() : Promise<Order[]> {
    const table = 'orders.json';
    const res = await axior.get(table);
    return res.data;
}

export async function create(data: Order){
    const table = `orders.json`;
    const res = await axior.post(table, data);
    return res.data;
}

export async function put(orderId: string, data: Order){
    const table = `orders/${orderId}.json`;
    const res = await axior.put(table, data);
    return res.data;
}