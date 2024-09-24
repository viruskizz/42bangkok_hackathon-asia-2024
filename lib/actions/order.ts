import axior from 'axios';
import { Order } from '@/lib/types/order';
import * as item from '@/lib/actions/item';
import * as job from '@/lib/actions/jobs';
import * as user from '@/lib/actions/user';


export async function list() : Promise<Order[]> {
    const table = 'orders.json';
    const res = await axior.get(table);
    return res.data;
}

export async function create(data: Order){
    const table = `orders.json`;
    const items = await item.list();
    const itemNames = items.map(item => item.name);
    
    for (const item of data.items) {
        if (!itemNames.includes(item.name)) {
            throw new Error(`Item ${item.name} does not exist`);
        }
    }
    
    const jobs = await job.list();
    const jobIds = jobs.map(job => job.batchId);
    
    for (const job of data.timeline) {
        if (!jobIds.includes(job.batchId)) {
            throw new Error(`Job ${job.batchId} does not exist`);
        }
    }
    
    const res = await axior.post(table, data);
    
    return res.data;
}

export async function put(orderId: string, data: Order){
    const table = `orders/${orderId}.json`;
    const items = await item.list();
    const itemNames = items.map(item => item.name);
    for (const item of data.items) {
        if (!itemNames.includes(item.name)) {
            throw new Error(`Item ${item.name} does not exist`);
        }
    }

    const jobs = await job.list();
    const jobIds = jobs.map(job => job.batchId);

    for (const job of data.timeline) {
        if (!jobIds.includes(job.batchId)) {
            throw new Error(`Job ${job.batchId} does not exist`);
        }
    }

    const res = await axior.put(table, data);
    return res.data;
}