"use server";
import axios from 'axios';
import { Station } from '../types/station';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
});
const table = 'stations';

export async function list() {
  const url = `${table}.json`;
  const res = await instance.get(url);
  return res.data;
}

export async function create(data: Station) {
  const { name } = data;
  const url = `${table}/${name}.json`;
  const res = await instance.put(url, data);
  return res.data;
}


export async function update(id: string, data: Station) {
  const url = `${table}/${id}.json`;
  const res = await instance.patch(url, data);
  return res.data;
}
