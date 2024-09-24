import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BikeIcon, MapPinIcon, PackageIcon } from "lucide-react";

export type TRunnerCard = {
  itemCount: string;
  distance: string;
  dropoff: {
    id: string;
    name: string;
  };
};

const RUNNER_LIST = [
  {
    id: "R004",
    itemCount: "2",
    distance: "2.0km",
    orders: [
      {
        id: "O004",
        location: "Location D",
        items: [
          {
            id: "I002",
            name: "Item E",
            quantity: "3",
          },
          {
            id: "I003",
            name: "Item F",
            quantity: "1",
          },
        ],
      },
    ],
    dropoff: {
      id: "D002",
      name: "Dropoff B",
    },
  },
  {
    id: "R005",
    itemCount: "3",
    distance: "3.5km",
    orders: [
      {
        id: "O005",
        location: "Location E",
        items: [
          {
            id: "I004",
            name: "Item G",
            quantity: "2",
          },
          {
            id: "I005",
            name: "Item H",
            quantity: "1",
          },
        ],
      },
    ],
    dropoff: {
      id: "D003",
      name: "Dropoff C",
    },
  },
  {
    id: "R006",
    itemCount: "4",
    distance: "4.5km",
    orders: [
      {
        id: "O006",
        location: "Location F",
        items: [
          {
            id: "I006",
            name: "Item I",
            quantity: "1",
          },
          {
            id: "I007",
            name: "Item J",
            quantity: "2",
          },
        ],
      },
    ],
    dropoff: {
      id: "D004",
      name: "Dropoff D",
    },
  },
  {
    id: "R007",
    itemCount: "5",
    distance: "5.5km",
    orders: [
      {
        id: "O007",
        location: "Location G",
        items: [
          {
            id: "I008",
            name: "Item K",
            quantity: "1",
          },
          {
            id: "I009",
            name: "Item L",
            quantity: "3",
          },
        ],
      },
    ],
    dropoff: {
      id: "D005",
      name: "Dropoff E",
    },
  },
];

export const RunnerCard = (props: TRunnerCard) => {
  const { itemCount, distance, dropoff } = props;
  return (
    <Card className="max-w-full w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-2">
      <CardHeader className="bg-pink-500 text-white p-4">
        <h2 className="text-xl font-bold">Order Summary</h2>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <PackageIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Items: <span className="font-semibold">{itemCount}</span>
            </p>
          </div>
          <div className="flex items-center">
            <BikeIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Distance: <span className="font-semibold">{distance}</span>
            </p>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Dropoff: <span className="font-semibold">{dropoff.name}</span>
            </p>
          </div>
        </div>
        <div className="mt-6 text-right">
          <p className="text-2xl font-bold text-pink-500">Total Price 0 $</p>
        </div>
      </CardContent>
    </Card>
  );
};

export const RunnerList = () => {
  return (
    <div className="flex flex-col">
      <ScrollArea className="h-[85vh] rounded-md border">
        {RUNNER_LIST.map((runner, index) => (
          <RunnerCard {...runner} key={index} />
        ))}
      </ScrollArea>
    </div>
  );
};
