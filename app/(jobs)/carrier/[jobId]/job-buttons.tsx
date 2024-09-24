"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function JobButtons(props: { status: boolean; jobId: string }) {
  const [accept, setAccept] = React.useState(false);
  const router = useRouter();
  function dropoffDelivery() {
    setAccept(false);
    console.log("dropoff", props.jobId);
    router.push(`/carrier/${props.jobId}/dropoff`);
  }

  function acceptDelivery() {
    setAccept(true);
    console.log("accept", props.jobId);
  }

  if (props.status || accept) {
    return (
      <div className="flex flex-col gap-2 w-full justify-around">
        <Button onClick={dropoffDelivery}>Drop-off</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full justify-around">
      <Button onClick={acceptDelivery}>Accept</Button>
      <Button variant="destructive" asChild>
        <Link href="/jobs">Back</Link>
      </Button>
    </div>
  );
}
