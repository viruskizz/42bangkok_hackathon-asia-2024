import axios from 'axios';
import { Job } from '@/lib/types/job';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
  });
  

export async function list() : Promise<Job[]> {
    const table = 'jobs.json';
    const res = await instance.get(table);
    return res.data;
}

export async function create(data: Job){
    const table = `jobs.json`;
    const res = await instance.post(table, data);
    return res.data;
}

export async function put(jobId:string, data: Job){
    const table = `jobs/${jobId}.json`;
    const res = await instance.put(table, data);
    return res.data;
}

export async function set_job_status(jobId:string, status: string){
    const table = `jobs/${jobId}.json`;
    const job = await instance.get(table);
    const res = await instance.put(table, {...job.data, status: status});
    return res.data;
}