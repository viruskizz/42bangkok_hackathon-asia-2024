"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateQRCodeFromText } from "@/lib/qr-generator";
import Image from "next/image";
import { useState } from "react";

export default function QRGeneratorPage() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const handleSubmit = async () => {
    const qrCode = await generateQRCodeFromText({ id: text });
    setQrCode(qrCode);
  };
  return (
    <div className="flex justify-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>QR Code Generator</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
          {qrCode && <Image src={qrCode} alt="" width={500} height={500} />}
          <Label className="text-lg font-bold">Input text</Label>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={handleSubmit}>Generate QR Code</Button>
        </CardContent>
      </Card>
    </div>
  );
}
