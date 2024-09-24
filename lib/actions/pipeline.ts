"use server";
import axios from 'axios';
import { Pipeline } from '../types/pipeline';
import * as order from './order';
import * as job from './jobs';
import * as user from './user';
import * as batch from './batch';


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
});

export async function list() {
  const url = 'pipelines.json';
  const res = await instance.get(url);
  return res.data;
}

export async function create(): Promise<Pipeline[]> {
  const url = `pipelines.json`;
  const res_array = [];
  // list all waiting batch
  const batches = await batch.list_waiting_batch();
  for (const [key, value] of Object.entries(batches)) {
    //  list waiting orders 
    const orders = await order.list();

    const orderIds = Object.keys(orders);
    for (const [key, value] of Object.entries(orders)) {
      order.put(key, { ...value, status: 'DERIVERING' });
    }


    const type = ['PICKUP', 'DELIVER'];
    const PreJob = {
      station: 'Tokyo',
      status: 'WAITING',
      datetime: new Date().toISOString(),
    }
    const JobForPipeline = type.map((t: any) => {
      return {
        type: t,
        batchId: key,
        ...PreJob,
      }
    });
    // loop create job for all type for this pipeline and get array ID
    const jobIds = await Promise.all(JobForPipeline.map((j: any) => job.create(j)));

    // const JobForPipeline
    const pipeline = {
      datetime: new Date().toISOString(),
      status: 'PENDING',
      batchId: key,
      orderIds,
      jobIds,
    }

    // update batch status
    await batch.put(key, { ...value, status: 'DERIVERING' });

    const res = await instance.post(url, pipeline);
    res_array.push(res.data); 
  }
  return res_array;
}


export async function update(id: string, data: Pipeline) {
  const url = `pipelines/${id}.json`;
  const res = await instance.patch(url, data);
  return res.data;
}
