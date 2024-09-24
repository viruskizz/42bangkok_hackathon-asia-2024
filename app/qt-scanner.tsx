// import { QrReader } from "react-qr-reader";

import { Card } from "@/components/ui/card";

export default function QrScanner() {
	return (
		<Card className="">
			Hold to scan QR
			<canvas></canvas>
		</Card>
	);
}
