"use server";
import axios from 'axios';
import { Pipeline } from '../types/pipeline';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
});

export async function list() {
  const url = 'pipelines.json';
  const res = await instance.get(url);
  return res.data;
}

export async function create(data: any) {
  const url = `pipelines.json`;
  const res = await instance.post(url, data);
  return res.data;
}


export async function update(id: string, data: Pipeline) {
  const url = `pipelines/${id}.json`;
  const res = await instance.patch(url, data);
  return res.data;
}
