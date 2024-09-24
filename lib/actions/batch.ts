import axios from 'axios';
import { Batch } from "@/lib/types/batch";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
});

export async function list() : Promise<Batch[]> {
    const table = 'batches.json';
    const res = await instance.get(table);
    return res.data;
}

export async function create(data: Batch){
    const table = `batches.json`;
    const res = await instance.post(table, data);
    return res.data;
}

export async function put(batchId: string, data: Batch){
    const table = `batches/${batchId}.json`;
    const res = await instance.put(table, data);
    return res.data;
}