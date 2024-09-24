"use client"
import { useState } from 'react'
import * as store from '@/lib/actions/store'
import * as station from '@/lib/actions/station'

export default function Page() {
  const [data, setData] = useState<string>();

  const listStore = async () => {
    const data = await store.list();
    setData(JSON.stringify(data, null, 2));
  }
  const createStore = async () => {
    const data = await store.create({
      name: 'Starbuck',
      stations: [
        { name: 'bangkok' },
        { name: 'tokyo' },
      ],
      items: [
        { name: 'Americano', price: 100 },
        { name: 'Espresso', price: 100 },
        { name: 'Flat White', price: 100 },
      ]
    });
    setData(JSON.stringify(data, null, 2));
  }

  const listStation = async () => {
    const data = await station.list();
    setData(JSON.stringify(data, null, 2));
  }

  const createStation = async () => {
    const data2 = await station.create({name: 'bangkok' });
    const data1 = await station.create({name: 'tokyo' });
    const data = {data1, data2};
    setData(JSON.stringify(data, null, 2));
  }
  return (
    <div>
      <div>
        <h1 className='text-lg'>Store</h1>
        <button
          className="bg-sky-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await listStore()}>
          List Store</button>
        <button
          className="bg-yellow-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await createStore()}>
          Create Store</button>
      </div>
      <div>
        <h1 className='text-lg'>Station</h1>
        <button
          className="bg-sky-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await listStation()}>
          List Stations</button>
        <button
          className="bg-yellow-700 text-white px-4 py-2 rounded-md"
          onClick={async () => await createStation()}>
          Create Station</button>
      </div>
      <div>
        <pre>{data}</pre>
      </div>
    </div>
  )
}
