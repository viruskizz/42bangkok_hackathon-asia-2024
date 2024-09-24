"use server";
import axios from "axios";
export type { User } from "../types/user";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
});

export async function list() {
  const table = "users.json";
  const res = await instance.get(table);
  return res.data;
}

export async function create(data: any) {
  const table = `users.json`;
  const res = await instance.post(table, data);
  return res.data;
}

export async function put(data: any) {
  const { name } = data;
  const table = `users/${name}.json`;
  const res = await instance.put(table, data);
  return res.data;
}
