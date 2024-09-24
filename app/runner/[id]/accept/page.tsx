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
import { Check } from "lucide-react";

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
      location: "Location A",
      dropped: true,
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
    {
      name: "Order 02",
      location: "Location A",
      items: [
        {
          id: "I001",
          name: "Item A",
          quantity: "1",
        },
      ],
    },
  ];

  return (
    <div className="px-4 py-2">
      <h1 className="text-3xl text-white font-black">Job #{id}</h1>
      <div className="space-y-2">
        <div className="rounded overflow-hidden">
          <Image src={MAP_IMAGE} alt="map" />
        </div>
        {data.map((order) => {
          return (
            <Card key={order.name} className="bg-white p-2 flex">
              <div>
                <h2 className="text-lg font-bold">{order.name}</h2>
                <p>Location: {order.location}</p>
                <Collapsible className="space-y-2">
                  <CollapsibleTrigger>
                    <p className="underline">Items</p>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {order.items.map((item) => {
                      return (
                        <div key={item.id} className="bg-gray-100 p-2">
                          <h3 className="text-lg font-bold">{item.name}</h3>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              </div>
              {order.dropped && <Check className="text-green-600" size={24} />}
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center gap-4 pt-2">
        <Button variant={"outline"} className="text-lg">
          <Link href={`/runner/${id}/dropoff`}>DropOff</Link>
        </Button>
      </div>
    </div>
  );
}