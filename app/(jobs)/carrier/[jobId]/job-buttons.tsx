"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

function dropoffDelivery(id: string) {
  return () => {
    console.log("dropoff", id);
  };
}

function acceptDelivery(id: string) {
  return () => {
    console.log("accept", id);
  };
}

export default function JobButtons(props: { status: boolean; jobId: string }) {
  console.log(props);
  if (props.status) {
    return (
      <div className="flex flex-col gap-2 w-full justify-around">
        <Button onClick={dropoffDelivery(props.jobId)}>Drop-off</Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2 w-full justify-around">
      <Button onClick={acceptDelivery(props.jobId)}>Accept</Button>
      <Button variant="destructive" asChild>
        <Link href="/jobs">Back</Link>
      </Button>
    </div>
  );
}
