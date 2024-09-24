import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import * as jobs from "@/lib/actions/jobs";
import * as batch from "@/lib/actions/batch";
import * as order from "@/lib/actions/order";

export type TRunnerItem = {
  id: string;
  dropoff: {
    id: string;
    name: string;
  };
  itemCount: string;
  distance: string;
  orders: TOrder[];
};

export type TItem = {
  id: string;
  name: string;
  quantity: string;
};

export type TOrder = {
  id: string;
  location: string;
  items: TItem[];
  is_delivered: boolean;
};

export type TCarrierItem = {
  id: string;
  dropoff: {
    id: string;
    name: string;
  };
  batchId: string;
  pickup: {
    id: string;
    name: string;
  };
  timeline: {
    standby: string;
    trainline: {
      time: string;
      name: string;
    }[];
    dropoff: {
      time: string;
      name: string;
    };
  };
  orders: TOrder[];
};

export type TJobItem = {
  runner: TRunnerItem;
  carrier: TCarrierItem;
};

function RunnerItem(props: { data: TRunnerItem }) {
  const { data } = props;
  return (
    <Card className="p-1">
      <Link href={`runner/${data.id}`}>
        <p>ItemCount: {data.itemCount}</p>
        <p>Distance: {data.distance}</p>
        <p>Dropoff: {data.dropoff.name}</p>
      </Link>
    </Card>
  );
}

function CarrierItem(props: { data: TCarrierItem }) {
  const { data } = props;
  return (
    <Card className="p-1">
      <Link href={`carrier/${data.id}`}>
        <p>BatchId: {data.batchId}</p>
        <p>Pickup: {data.pickup.name}</p>
        <p>Dropoff: {data.dropoff.name}</p>
        <p>Timeline: {data.timeline.standby}</p>
      </Link>
    </Card>
  );
}

export function JobItem(
  props: (TRunnerItem | TCarrierItem) & { type: "R" | "C" }
) {
  const { type } = props;

  if (type === "R") {
    return <RunnerItem data={props as TRunnerItem} />;
  } else if (type === "C") {
    return <CarrierItem data={props as TCarrierItem} />;
  }
}

interface IJob {
  runner: TRunnerItem[];
  carrier: TCarrierItem[];
}

export async function create_job_runnser(): Promise<IJob> {
  const job_data = await jobs.list();
  const res: IJob = {
    runner: [],
    carrier: [],
  };
  if (!job_data) {
    return res;
  }
  for (const [key, value] of Object.entries(job_data)) {
    console.log(value)
    const job_order_list = await batch.getBatchDetail(value.batchId);
    if (value.type === "PICKUP") {
      const order_array: TOrder[] = [];
      if (job_order_list?.orders) {
        for (const [key, value] of Object.entries(job_order_list.orders)) {
          const order: TOrder = {
            id: key,
            location: value.location,
            items: value.items.map((item: any) => ({
              id: item.id,
              name: item.name,
              quantity: 1,
            })),
            is_delivered: value.status === "DONE",
          };
          order_array.push(order);
        }
      }

      const runner: TRunnerItem = {
        id: key,
        itemCount: order_array.length.toString(),
        distance: "1.5km",
        orders: order_array,
        // Hard Coded
        dropoff: {
          id: "1",
          name: "Tokyo",
        },
      };
      res.runner.push(runner);
    }
    if (value.type === "DELIVER") {
      const order_array: TOrder[] = [];
      if (job_order_list?.orders) {
        for (const [key, value] of Object.entries(job_order_list.orders)) {
          const order: TOrder = {
            id: key,
            location: value.location,
            items: value.items.map((item: any) => ({
              id: item.id,
              name: item.name,
              quantity: 1,
            })),
            is_delivered: value.status === "DONE",
          };
          order_array.push(order);
        }
      }
      const carrier: TCarrierItem = {
        id: key,
        batchId: value.batchId,
        pickup: {
          id: "1",
          name: "Tokyo",
        },
        dropoff: {
          id: "1",
          name: "Tokyo",
        },
        timeline: {
          standby: new Date().toISOString(),
          trainline: [],
          dropoff: {
            time: new Date().toISOString(),
            name: "Tokyo",
          },
        },
        orders: order_array,
      };
      res.carrier.push(carrier);
    }
  }
  return res;
}
