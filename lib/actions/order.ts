import axios from 'axios';
import { Order, OrderStatus } from '@/lib/types/order';
import * as item from '@/lib/actions/item';
import * as job from '@/lib/actions/jobs';
import * as user from '@/lib/actions/user';
import { equalTo } from 'firebase/database';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
});

export async function list(status?: OrderStatus): Promise<Order[]> {
  const table = 'orders.json';
  const res = await instance.get(table, {
    params: {
      orderBy: '"status"',
      equalTo: '"WAITING"'
    }
  });
  return res.data;
}

export async function create(data: Order) {
  const table = `orders.json`;
  const itemNames = data.items.map(item => item.name);

  for (const item of data.items) {
    if (!itemNames.includes(item.name)) {
      throw new Error(`Item ${item.name} does not exist`);
    }
  }

  // const jobs = await job.list();
  // const jobIds = jobs.map(job => job.batchId);

  // for (const job of data.timeline) {
  //     if (!jobIds.includes(job.batchId)) {
  //         throw new Error(`Job ${job.batchId} does not exist`);
  //     }
  // }

  const res = await instance.post(table, data);

  return res.data;
}

export async function put(orderId: string, data: Order) {
  const table = `orders/${orderId}.json`;
  const items = await item.list();
  const itemNames = items.map(item => item.name);
  for (const item of data.items) {
    if (!itemNames.includes(item.name)) {
      throw new Error(`Item ${item.name} does not exist`);
    }
  }

  // const jobs = await job.list();
  // const jobIds = jobs.map(job => job.batchId);

  // for (const job of data.timeline) {
  //   if (!jobIds.includes(job.batchId)) {
  //     throw new Error(`Job ${job.batchId} does not exist`);
  //   }
  // }

  const res = await instance.put(table, data);
  return res.data;
}

export async function get(id: string) {
  const url = `orders/${id}.json`;
  const res = await instance.get(url);
  return res.data;
}