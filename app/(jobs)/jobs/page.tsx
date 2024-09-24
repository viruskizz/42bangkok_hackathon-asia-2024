import {
  JobItem,
  TCarrierItem,
  TJobItem,
  TRunnerItem,
} from "@/app/(jobs)/_components/JobItem";

export default function JobsPage() {
  const data: { runner: TRunnerItem[]; carrier: TCarrierItem[] } = {
    runner: [
      {
        id: "R001",
        itemCount: "1",
        distance: "1.5km",
        orders: [
          {
            id: "O001",
            location: "Location A",
            items: [
              {
                id: "I001",
                name: "Item A",
                quantity: "1",
              },
              {
                id: "I001",
                name: "Item B",
                quantity: "2",
              },
              {
                id: "I001",
                name: "Item C",
                quantity: "1",
              },
              {
                id: "I001",
                name: "Item D",
                quantity: "1",
              },
            ],
          },
        ],
        dropoff: {
          id: "D001",
          name: "Dropoff A",
        },
      },
      {
        id: "R002",
        itemCount: "1",
        distance: "1.5km",
        orders: [
          {
            id: "O002",
            location: "Location B",
            items: [
              {
                id: "I001",
                name: "Item A",
                quantity: "1",
              },
            ],
          },
        ],
        dropoff: {
          id: "D001",
          name: "Dropoff A",
        },
      },
      {
        id: "R003",
        itemCount: "1",
        distance: "1.5km",
        orders: [
          {
            id: "O003",
            location: "Location C",
            items: [
              {
                id: "I001",
                name: "Item A",
                quantity: "1",
              },
            ],
          },
        ],
        dropoff: {
          id: "D001",
          name: "Dropoff A",
        },
      },
      {
        id: "R001",
        itemCount: "1",
        distance: "1.5km",
        orders: [
          {
            id: "O001",
            location: "Location A",
            items: [
              {
                id: "I001",
                name: "Item A",
                quantity: "1",
              },
            ],
          },
        ],
        dropoff: {
          id: "D001",
          name: "Dropoff A",
        },
      },
    ],
    carrier: [
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
      },
    ],
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-white font-black text-3xl">Avaiable Jobs</h1>
      <h2 className="text-white font-bold text-lg">Runner</h2>
      <div className="space-y-2">
        {data.runner.map((job) => {
          return <JobItem key={job.id} {...job} type="R" />;
        })}
      </div>
      <h2 className="text-white font-bold text-lg">Carrier</h2>
      <div className="space-y-2">
        {data.carrier.map((job) => {
          return <JobItem key={job.id} {...job} type="C" />;
        })}
      </div>
    </div>
  );
}
