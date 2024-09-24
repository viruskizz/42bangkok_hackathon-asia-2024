import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClockIcon, MapPinIcon, PackageIcon, TrainIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CARRIER_LIST = [
    {
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
      orders: [],
    },
    {
      id: "C002",
      batchId: "B002",
      pickup: {
        id: "P002",
        name: "Pickup B",
      },
      dropoff: {
        id: "D002",
        name: "Dropoff B",
      },
      timeline: {
        standby: "10:15",
        trainline: [
          {
            time: "10:45",
            name: "Train C",
          },
          {
            time: "11:15",
            name: "Train D",
          },
        ],
        dropoff: {
          time: "11:45",
          name: "Dropoff B",
        },
      },
      orders: [],
    },
    {
      id: "C003",
      batchId: "B003",
      pickup: {
        id: "P003",
        name: "Pickup C",
      },
      dropoff: {
        id: "D003",
        name: "Dropoff C",
      },
      timeline: {
        standby: "10:30",
        trainline: [
          {
            time: "11:00",
            name: "Train E",
          },
          {
            time: "11:30",
            name: "Train F",
          },
        ],
        dropoff: {
          time: "12:00",
          name: "Dropoff C",
        },
      },
      orders: [],
    },
    {
      id: "C004",
      batchId: "B004",
      pickup: {
        id: "P004",
        name: "Pickup D",
      },
      dropoff: {
        id: "D004",
        name: "Dropoff D",
      },
      timeline: {
        standby: "10:45",
        trainline: [
          {
            time: "11:15",
            name: "Train G",
          },
          {
            time: "11:45",
            name: "Train H",
          },
        ],
        dropoff: {
          time: "12:15",
          name: "Dropoff D",
        },
      },
      orders: [],
    },
    {
      id: "C005",
      batchId: "B005",
      pickup: {
        id: "P005",
        name: "Pickup E",
      },
      dropoff: {
        id: "D005",
        name: "Dropoff E",
      },
      timeline: {
        standby: "11:00",
        trainline: [
          {
            time: "11:30",
            name: "Train I",
          },
          {
            time: "12:00",
            name: "Train J",
          },
        ],
        dropoff: {
          time: "12:30",
          name: "Dropoff E",
        },
      },
      orders: [],
    },
    {
      id: "C006",
      batchId: "B006",
      pickup: {
        id: "P006",
        name: "Pickup F",
      },
      dropoff: {
        id: "D006",
        name: "Dropoff F",
      },
      timeline: {
        standby: "11:15",
        trainline: [
          {
            time: "11:45",
            name: "Train K",
          },
          {
            time: "12:15",
            name: "Train L",
          },
        ],
        dropoff: {
          time: "12:45",
          name: "Dropoff F",
        },
      },
      orders: [],
    },
    {
      id: "C007",
      batchId: "B007",
      pickup: {
        id: "P007",
        name: "Pickup G",
      },
      dropoff: {
        id: "D007",
        name: "Dropoff G",
      },
      timeline: {
        standby: "11:30",
        trainline: [
          {
            time: "12:00",
            name: "Train M",
          },
          {
            time: "12:30",
            name: "Train N",
          },
        ],
        dropoff: {
          time: "13:00",
          name: "Dropoff G",
        },
      },
      orders: [],
    },
    {
      id: "C008",
      batchId: "B008",
      pickup: {
        id: "P008",
        name: "Pickup H",
      },
      dropoff: {
        id: "D008",
        name: "Dropoff H",
      },
      timeline: {
        standby: "11:45",
        trainline: [
          {
            time: "12:15",
            name: "Train O",
          },
          {
            time: "12:45",
            name: "Train P",
          },
        ],
        dropoff: {
          time: "13:15",
          name: "Dropoff H",
        },
      },
      orders: [],
    },
    {
      id: "C009",
      batchId: "B009",
      pickup: {
        id: "P009",
        name: "Pickup I",
      },
      dropoff: {
        id: "D009",
        name: "Dropoff I",
      },
      timeline: {
        standby: "12:00",
        trainline: [
          {
            time: "12:30",
            name: "Train Q",
          },
          {
            time: "13:00",
            name: "Train R",
          },
        ],
        dropoff: {
          time: "13:30",
          name: "Dropoff I",
        },
      },
      orders: [],
    },
    {
      id: "C010",
      batchId: "B010",
      pickup: {
        id: "P010",
        name: "Pickup J",
      },
      dropoff: {
        id: "D010",
        name: "Dropoff J",
      },
      timeline: {
        standby: "12:15",
        trainline: [
          {
            time: "12:45",
            name: "Train S",
          },
          {
            time: "13:15",
            name: "Train T",
          },
        ],
        dropoff: {
          time: "13:45",
          name: "Dropoff J",
        },
      },
      orders: [],
    },
    {
      id: "C011",
      batchId: "B011",
      pickup: {
        id: "P011",
        name: "Pickup K",
      },
      dropoff: {
        id: "D011",
        name: "Dropoff K",
      },
      timeline: {
        standby: "12:30",
        trainline: [
          {
            time: "13:00",
            name: "Train U",
          },
          {
            time: "13:30",
            name: "Train V",
          },
        ],
        dropoff: {
          time: "14:00",
          name: "Dropoff K",
        },
      },
      orders: [],
    },
  ];

type Carrier = {
  id: string;
  batchId: string;
  pickup: {
    id: string;
    name: string;
  };
  dropoff: {
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
  orders: any[];
};

export type TCarrierCardProps = {
  carrier: Carrier;
};
export const CarrierCard = (props: TCarrierCardProps) => {
  const { carrier } = props;
  const router = useRouter();
  const handleCarrierClick = () => {
    router.push(`/carrier/${carrier.id}`);
  }
  return (
    <Card className="max-w-full w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-2 hover:cursor-pointer" onClick={handleCarrierClick}>
      <CardHeader className="bg-pink-500 text-white p-4">
        <h2 className="text-xl font-bold">Order Details</h2>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <PackageIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Batch ID: <span className="font-semibold">{carrier.batchId}</span>
            </p>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Pickup:{" "}
              <span className="font-semibold">{carrier.pickup.name}</span>
            </p>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Dropoff:{" "}
              <span className="font-semibold">{carrier.dropoff.name}</span>
            </p>
          </div>
          <div className="flex items-center">
            <ClockIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Standby Time:{" "}
              <span className="font-semibold">{carrier.timeline.standby}</span>
            </p>
          </div>
          <div className="flex flex-col ml-6">
            <p className="text-gray-700 font-semibold mb-1">Train Schedule:</p>
            {carrier.timeline.trainline.map((train, index) => (
              <div key={index} className="flex items-center">
                <TrainIcon className="text-pink-500 mr-2" size={16} />
                <p className="text-gray-700">
                  {train.name}:{" "}
                  <span className="font-semibold">{train.time}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <ClockIcon className="text-pink-500 mr-2" size={20} />
            <p className="text-gray-700">
              Dropoff Time:{" "}
              <span className="font-semibold">
                {carrier.timeline.dropoff.time}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const CarrierList = () => {
  return (
    <div className="flex flex-col">
      <ScrollArea className="h-[85vh] rounded-md border">
        {CARRIER_LIST.map((carrier, index) => (
          <CarrierCard carrier={carrier} key={index} />
        ))}
      </ScrollArea>
    </div>
  );
};
