"use server";
import axios from 'axios';
import { Route } from 'next';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
});
const table = 'route';

export async function list() {
  const url = `${table}.json`;
  const res = await instance.get(url);
  return res.data;
}

export async function create(data: Route) {
  const url = `${table}.json`;
  const res = await instance.post(url, data);
  return res.data;
}


export async function update(id: string, data: Route) {
  const url = `${table}/${id}.json`;
  const res = await instance.patch(url, data);
  return res.data;
}
