"use server";
import axios from 'axios';
import { Store } from '../types/store';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
});
const table = 'store';

export async function list() {
  const url = `${table}.json`;
  const res = await instance.get(url);
  return res.data;
}

export async function create(data: Store) {
  const { name } = data;
  const url = `${table}/${name}.json`;
  const res = await instance.put(url, data);
  return res.data;
}


export async function update(id: string, data: Store) {
  const url = `${table}/${id}.json`;
  const res = await instance.put(url, data);
  return res.data;
}
