import { ref, get } from "firebase/database";
import { database } from "@/firebaseConfig";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import MAP_IMAGE from "@/public/map_mockup.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigDownDashIcon, CheckIcon, ScanQrCodeIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default async function RunnerJobPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  //   fetch data here
  const data = [
    {
      name: "Order 01",
      location: "Container A",
    },
    {
      name: "Order 02",
      location: "Container B"
    },
  ];

  return (
    <div className="px-4 py-2">
      <h1 className="text-3xl text-white font-black">Job #{id}</h1>
      <div className="space-y-2">
        {/* <div className="rounded border-gray-300 border-4 overflow-hidden">
          <Image src={MAP_IMAGE} alt="map" />
        </div> */}
        {data.map((order) => {
          return (
            <Card key={order.name} className="bg-white p-2">
              <div className="flex justify-between">
				<h2 className="text-lg font-bold">
					{order.name}
				</h2>
				<Checkbox className="w-8 h-8 data-[state=checked]:bg-green-600" />
			  </div>
              <p>Location: {order.location}</p>
			  <div className="flex justify-end">
				<Button className="bg-green-600 mt-2">
					<Link href={`/runner/${id}/dropoff`}>
						Dropoff Scan <ScanQrCodeIcon className="ml-2 mr-0 float-right"/>
					</Link>
				</Button>
			  </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center gap-4 pt-2 content-end">
		<Button variant={"outline"} className="text-lg">
		  <Link href={`/runner/${id}/accept`}>Back</Link>
        </Button>
        <Button className="bg-pink-500">
			<Link href="/jobs">
			Finish <CheckIcon className="ml-2 mr-0 float-right"/>
			</Link>
		</Button>
      </div>
    </div>
  );
}
