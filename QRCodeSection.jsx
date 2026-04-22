import { useMemo, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download, QrCode } from "lucide-react";

export default function QRCodeSection() {
  const qrRef = useRef(null);
  const websiteUrl = useMemo(() => window.location.href, []);

  const downloadQrCode = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "wedding-invitation-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section className="section card qr-section">
      <h2>
        <QrCode size={20} /> Share Invitation QR
      </h2>
      <p>Scan or share this code to open our wedding website instantly.</p>
      <div className="qr-wrapper" ref={qrRef}>
        <QRCodeCanvas value={websiteUrl} size={200} fgColor="#8a6a3f" bgColor="#fffaf2" includeMargin />
      </div>
      <button onClick={downloadQrCode}>
        <Download size={16} /> Download QR Code
      </button>
    </section>
  );
}
