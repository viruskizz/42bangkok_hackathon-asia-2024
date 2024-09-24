"use client";
import { useEffect, useState } from "react";
import * as batch from "@/lib/actions/batch";
import * as order from "@/lib/actions/order";
import * as pipeline from "@/lib/actions/pipeline";

export default function Page() {
  const period = 30 * 1;
  const [data, setData] = useState<string>();
  const [timer, setTimer] = useState<number>(period);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (timer === 0) {
        const batch = await createBatch();
        console.log(batch);
        if (batch.name) {
          const pipeline = await createPipeline();
          const data = {batch, pipeline};
          setData(JSON.stringify(data, null, 2));
        } else {
          setData(JSON.stringify({batch}, null, 2));
        }
        setTimer(period);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer])

  const createBatch = async () => {
    const orders = await order.list("WAITING");
    const orderIds = Object.keys(orders);
    if (orderIds.length > 0) {
      const data = await batch.createSet(orderIds);
      return data;
    }
    return [];
    // setData("Batch" + JSON.stringify(data, null, 2));
  };

  const createPipeline = async () => {
    const data = await pipeline.create();
    console.log("data:", data);
    // setData("PIPELINE" + JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <div>
        <h1 className="text-xl">Timer: {timer}</h1>
      </div>
      <button
        className="bg-yellow-700 text-white px-4 py-2 rounded-md"
        onClick={async () => {
          await createBatch();
          await createPipeline();
        }}
      >
        Magic
      </button>
      <div>
        <pre>{data}</pre>
      </div>
    </div>
  );
}
