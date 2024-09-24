"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OrderTrackingTimeline } from "./timeLine";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as order from "@/lib/actions/order";
import * as store from "@/lib/actions/store";
import { Separator } from "@/components/ui/separator";
import { MapPinIcon, ClockIcon, ShoppingBagIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";
import { getUsername } from "@/lib/get-username";
import { generateQRCodeFromText } from "@/lib/qr-generator";
import Image from "next/image";

export default function Component() {
  const [text, setText] = useState("Place Order");
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [data, setData] = useState<string>();
  const [showTimeline, setShowTimeline] = useState(false);
  const router = useRouter();
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: "Esspresso", quantity: 1, price: 5.0 },
    { id: 2, name: "Ameriano", quantity: 1, price: 4.0 },
    { id: 3, name: "Flat White", quantity: 1, price: 5.0 },
  ]);

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const deliveryFee = 0.5;
  const total = subtotal + deliveryFee;
  const createOrder = async () => {
    const storeData = await store.get("Starbuck");
    const data = await order.create({
      username: getUsername() ?? "Araiva",
      store: storeData.name,
      items: storeData.items,
      price: 100,
      origin: "bangkok",
      destination: "tokyo",
      datetime: DateTime.now().toISO(),
      status: "WAITING",
    });
    console.log("data:", data);
    setData(JSON.stringify(data, null, 2));
  };

  const handleClick = async () => {
    await createOrder();
    const qrCode = await generateQRCodeFromText({ id: text });
    setQrCode(qrCode);
    setShowTimeline(true);
    setText("Thank you!");
    if (text == "Thank you!") {
      router.push("/");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {showTimeline ? "Tracking" : "Order Summary"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {showTimeline ? (
            <>
              <Separator className="my-4" />
              <OrderTrackingTimeline />
            </>
          ) : (
            <>
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>{item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  <p>Placement at: Siam Station PandaPost locker</p>
                </div>
                <div className="flex items-center text-sm">
                  <ClockIcon className="mr-2 h-4 w-4" />
                  <p>Planned placement time: 4:00 PM</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button
            className="w-full mb-4"
            variant="outline"
            onClick={handleClick}
          >
            <ShoppingBagIcon className="mr-2 h-4 w-4" /> {text}
          </Button>
          {qrCode && (
            <div className="flex flex-col items-center">
              <Image src={qrCode} alt="" width={200} height={200} />
              <p className="text-xs mt-2">
                Scan at the PandaPost locker to retrieve your order at 4:00PM
              </p>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
