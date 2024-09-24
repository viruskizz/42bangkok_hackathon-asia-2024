"use client"
import { useState } from 'react'
import * as user from '@/lib/actions/user'
export default function Counter() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<string>();
  const onList = async () => {
    const data = await user.list();
    console.log(data);
    setData(JSON.stringify(data, null, 2));
  }
  const onCreate = async () => {
    const data = await user.create({
      name: 'Araiva',
      role: 'CLIENT'
    });
    console.log(data);
    setData(JSON.stringify(data, null, 2));
  }
  return (
    <div>
    <div>
      <p>You clicked {count} times</p>
      <button 
        className="bg-sky-700 text-white px-4 py-2 rounded-md"
        onClick={async () => await onList()}>
          List Users</button>
          <button 
        className="bg-yellow-700 text-white px-4 py-2 rounded-md"
        onClick={async () => await onCreate()}>
          Create User</button>
    </div>
    <div>
      <pre>{ data }</pre>
    </div>
    </div>
  )
}
