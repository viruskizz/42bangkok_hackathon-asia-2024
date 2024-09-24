import axios from 'axios';
import { Batch } from "@/lib/types/batch";
import * as orderApi from './order';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
});

export async function list(): Promise<Batch[]> {
  const table = 'batches.json';
  const res = await instance.get(table);
  return res.data;
}

export async function list_waiting_batch(): Promise<Batch[]> {
  const table = 'batches.json';
  const res = await instance.get(table, {
    params: {
      orderBy: '"status"',
      equalTo: '"WAITING"'
    }
  });
  return res.data;
}

export async function create(data: Batch) {
  const table = `batches.json`;
  const res = await instance.post(table, { ...data});
  return res.data;
}

export async function put(batchId: string, data: Batch) {
  const table = `batches/${batchId}.json`;
  const res = await instance.put(table, data);
  return res.data;
}

export async function createSet(orderIds: string[]) {
  for (const orderId of orderIds) {
    const res = await orderApi.get(orderId);
    if (!res) {
      throw new Error(`${orderId} does not existed`);
    }
  }
  return create({ orderIds, status: 'WAITING' });
}

export async function getBatchDetail(id: string) {
  const url = `batches/${id}.json`
  const res = await instance.get(url);
  const batch = res.data;
  const orders = [];
  for (const oid of batch.orderIds) {
    const d = await orderApi.get(oid);
    orders.push({
      id: oid,
      ...d,
    });
  }
  return {
    orderIds: batch.orderIds,
    orders,
  }
}