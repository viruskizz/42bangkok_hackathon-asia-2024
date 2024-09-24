import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TCarrierItem } from "../../_components/JobItem";
import { Separator } from "@/components/ui/separator";
import {
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTitle,
} from "../../_components/timeline";
import React from "react";
import JobButtons from "./job-buttons";

function getJobDetails(jobs: TCarrierItem[], id: string) {
  return jobs.find((job) => job.id.toLowerCase() === id.toLowerCase());
}

export default function CarrierJobDetailsPage({
  params,
}: {
  params: { jobId: string };
}) {
  const jobStatus = false;
  const data = {
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
  const details = getJobDetails(data.carrier, params.jobId);
  if (!details) {
    return <div>Job not found</div>;
  }
  return (
    <div className="p-4 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold">
            Batch ID: {details.batchId}
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col grow w-full">
          <div className="flex flex-row justify-between mt-4">
            <p className="font-bold">Stand-by Time:</p>
            <p>{details.timeline.standby}</p>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-bold">Arrival Time:</p>
            <p>{details.timeline.trainline[0].time}</p>
          </div>
          <div className="flex flex-row mt-5 grow w-full px-3">
            <Timeline className="w-full">
              {details.timeline.trainline.map((location, index) => {
                return (
                  <TimelineItem key={location.name}>
                    <TimelineHeader className="w-full">
                      <TimelineIcon />
                      <TimelineTitle className="flex flex-row justify-between w-full">
                        <div>{location.name}</div>
                        <div>{location.time}</div>
                      </TimelineTitle>
                    </TimelineHeader>
                    {index === details.timeline.trainline.length - 1 ? null : (
                      <TimelineConnector />
                    )}
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-bold">Dropoff @{details.timeline.dropoff.name}</p>
            <p>{details.timeline.dropoff.time}</p>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="mt-4">
          <JobButtons status={jobStatus} jobId={params.jobId} />
        </CardFooter>
      </Card>
      <div></div>
    </div>
  );
}
