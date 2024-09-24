"use client"
import { useState } from 'react';
import * as batch from '@/lib/actions/batch';
import * as order from '@/lib/actions/order';
import * as store from '@/lib/actions/store';
import { DateTime } from "luxon";

export default function Page() {
  const [data, setData] = useState<string>();

  const listBatchs = async () => {
    const batches = await batch.list();
    const data = [];
    for(const b of Object.keys(batches)) {
      data.push(
        await batch.getBatchDetail(b),
      )
    }
    setData(JSON.stringify(data, null, 2));
  }
  const createBatch = async () => {
    const orders = await order.list('WAITING');
    console.log(Object.keys(orders));
    const orderIds = Object.keys(orders);
    const data = await batch.createSet(orderIds);
    setData(JSON.stringify(data, null, 2));
  }

  const listOrders = async () => {
    const data = await order.list('WAITING');
    console.log('data:', data);
    setData(JSON.stringify(data, null, 2));
  }

  const createOrder = async () => {
    const storeData = await store.get('Starbuck');
    const data = await order.create({
      username: 'Araiva',
      store: storeData.name,
      items: storeData.items,
      price: 100,
      origin: 'bangkok',
      destination: 'tokyo',
      datetime: DateTime.now().toISO(),
      status: 'WAITING',
    });
    console.log('data:', data);
    setData(JSON.stringify(data, null, 2));
  }

  return (
    <div>
      <div>
        <h1 className='text-lg'>Batch</h1>
        <button
          className="bg-sky-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await listBatchs()}>
          List Batch</button>
        <button
          className="bg-yellow-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await createBatch()}>
          Create Batch</button>
      </div>
      <div>
        <h1 className='text-lg'>Orders</h1>
        <button
          className="bg-sky-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await listOrders()}>
          List Orders</button>
        <button
          className="bg-yellow-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await createOrder()}>
          Create Order</button>
      </div>
      <div>
        <pre>{data}</pre>
      </div>
    </div>
  )
}
