"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SmyLDliiEpU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { generateTextFromQRCode } from "@/lib/qr-scanner";
import { useState } from "react";
import { CameraIcon } from "@radix-ui/react-icons";

export default function QRScannerPage() {
  const [text, setText] = useState<string>("");
  const handleScan = () => {
    // console.log(document.getElementById('qr_scanner'));
    generateTextFromQRCode({ video: document.getElementById("camera-view") as HTMLVideoElement,
      res: (res:string) => {
        setText(res);
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center justify-center p-6">
          <QrCodeIcon className="w-12 h-12 text-primary" />
          <CardTitle className="mt-4">QR Code Scanner</CardTitle>
          <CardDescription className="mt-2 text-center text-muted-foreground">
            Point your camera at a QR code to scan and decode it.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative h-[320px] w-full overflow-hidden rounded-b-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-muted/50 backdrop-blur-sm" />
              <div className="absolute inset-4 border-2 border-dashed border-primary rounded-lg">
                <video id="camera-view" className="h-full w-full object-cover" autoPlay playsInline  />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-4 p-6">
          <div id="qr-result" className="text-2xl font-bold text-primary">
            <Input
              type="text"
              value={text}
              placeholder="Scan result"
              readOnly
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <Button onClick={handleScan}>
            <CameraIcon className="mr-2 h-4 w-4" />
            Scan
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function QrCodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}

function RefreshCcwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}