import QRCode from "qrcode";

export async function generateQRCodeFromText({ id }: { id: string }): Promise<string | null> {
    if (!id) {
        return null;
    }
  const res = await QRCode.toDataURL(id);
  return res;
}
