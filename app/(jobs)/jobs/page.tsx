import {
  JobItem,
  TCarrierItem,
  TJobItem,
  TRunnerItem,
  create_job_runnser,
} from "@/app/(jobs)/_components/JobItem";
import { JobScreen } from "./_components/job-screen";

export default async function JobsPage() {
  // const data_2 = await create_job_runnser();
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
            is_delivered: false,
            items: [
              {
                id: "I001",
                name: "Item A",
                quantity: "1",
              },
              {
                id: "I002",
                name: "Item B",
                quantity: "2",
              },
              {
                id: "I003",
                name: "Item C",
                quantity: "1",
              },
              {
                id: "I004",
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
            is_delivered: false,
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
            is_delivered: false,
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
        id: "R004",
        itemCount: "1",
        distance: "1.5km",
        orders: [
          {
            id: "O001",
            location: "Location A",
            is_delivered: false,
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
        orders: [],
      },
    ],
  };

  return (
    // <div className="px-4 py-2">
    //   <h1 className="text-white font-black text-3xl">Avaiable Jobs</h1>
    //   <h2 className="text-white font-bold text-lg">Runner</h2>
    //   <div className="space-y-2">
    //     {data.runner.map((job) => {
    //       return <JobItem key={job.id} {...job} type="R" />;
    //     })}
    //   </div>
    //   <h2 className="text-white font-bold text-lg">Carrier</h2>
    //   <div className="space-y-2">
    //     {data.carrier.map((job) => {
    //       return <JobItem key={job.id} {...job} type="C" />;
    //     })}
    //   </div>
    // </div>
    <div className="flex justify-center w-full">
      <JobScreen />
    </div>
  );
}
