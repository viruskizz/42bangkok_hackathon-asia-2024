import { TCarrierItem, TItem, TOrder } from "@/app/(jobs)/_components/JobItem";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function OrderItemRow(props: { item: TItem }) {
  return (
    <TableRow className="bg-accent">
      <TableCell>
        <div className="font-medium">#{props.item.id}</div>
        {/* <div className="hidden text-sm text-muted-foreground md:inline">
          {props.item.name}
        </div> */}
      </TableCell>
      <TableCell className="sm:table-cell">{props.item.name}</TableCell>
      <TableCell className="sm:table-cell text-right">{props.item.quantity}</TableCell>
      <TableCell className="sm:table-cell">
        <Checkbox checked={props.item.is_delivered} id={props.item.id} />
      </TableCell>
      {/* <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="secondary">
          Fulfilled
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
      <TableCell className="text-right">$250.00</TableCell> */}
    </TableRow>
  );
}

function OrderDetailsCard(props: { order: TOrder }) {
  return (
    <div className="mb-4">
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Order #{props.order.id}</CardTitle>
          <CardDescription>Location: {props.order.location}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="hidden">
              <TableRow className="justify-around w-full">
                <TableHead>Item</TableHead>
                <div className="flex grow"></div>
                <TableHead className="hidden sm:table-cell">Name</TableHead>
                <TableHead className="hidden sm:table-cell">No.</TableHead>
                <TableHead className="text-right">Delivered</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.order.items.map((item) => {
                return <OrderItemRow key={item.id} item={item} />;
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CarrierJobDropoffPage({
  params,
}: {
  params: { jobId: string };
}) {
  const data: TCarrierItem = {
    id: "C001",
    batchId: "B001",
    pickup: {
      id: "P001",
      name: "Pickup A",
    },
    dropoff: {
      id: "D001",
      name: "Dropoff A",
    },
    timeline: {
      standby: "10:00",
      trainline: [
        {
          time: "10:30",
          name: "Train A",
        },
        {
          time: "11:00",
          name: "Train B",
        },
      ],
      dropoff: {
        time: "11:30",
        name: "Dropoff A",
      },
    },
    orders: [
      {
        id: "O001",
        location: "Location A",
        items: [
          {
            id: "I001",
            name: "Item A",
            quantity: "1",
            is_delivered: false,
          },
          {
            id: "I002",
            name: "Item B",
            quantity: "2",
            is_delivered: false,
          },
          {
            id: "I003",
            name: "Item C",
            quantity: "1",
            is_delivered: false,
          },
          {
            id: "I004",
            name: "Item D",
            quantity: "1",
            is_delivered: false,
          },
        ],
      },
      {
        id: "O002",
        location: "Location A",
        items: [
          {
            id: "I005",
            name: "Item A",
            quantity: "2",
            is_delivered: false,
          },
          {
            id: "I006",
            name: "Item C",
            quantity: "1",
            is_delivered: false,
          },
        ],
      },
    ],
  };
  const orders: TOrder[] = data.orders;
  return (
    <div className="px-4 py-4">
      <Card className="p-3 bg-red-100">
        <CardHeader className="p-4">
          <CardTitle className="text-center">Batch ID: {data.batchId}</CardTitle>
        </CardHeader>
        {orders.map((order: TOrder) => {
          return <OrderDetailsCard key={order.id} order={order} />;
        })}
      </Card>
    </div>
  );
}
