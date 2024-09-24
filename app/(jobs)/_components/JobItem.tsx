import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export type TRunnerItem = {
  id: string;
  dropoff: {
    id: string;
    name: string;
  };
  itemCount: string;
  distance: string;
  orders: [
    {
      id: string;
      location: string;
      items: {
        id: string;
        name: string;
        quantity: string;
      }[];
    }
  ];
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
