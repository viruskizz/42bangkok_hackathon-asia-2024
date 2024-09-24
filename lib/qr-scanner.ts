import QrScanner from 'qr-scanner';
import { DOMElement } from 'react';

export function generateTextFromQRCode({ video, res }: { video: HTMLVideoElement|null, res: (data: string) => void }) {
	if (!video || !QrScanner.hasCamera())
		return null;
	const qrScanner = new QrScanner(video, r => { res(r.data); qrScanner.stop(); }, {});
	qrScanner.setCamera("environment");
	qrScanner.start();
	return qrScanner;
}
