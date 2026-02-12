'use client';

import { QRCodeSVG } from 'qrcode.react';

interface WiFiQRCodeProps {
  ssid: string;
  password: string;
  encryption?: 'WPA' | 'WEP' | 'nopass';
  size?: number;
}

export default function WiFiQRCode({
  ssid,
  password,
  encryption = 'WPA',
  size = 160,
}: WiFiQRCodeProps) {
  // WiFi QR code format: WIFI:T:<encryption>;S:<ssid>;P:<password>;;
  const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;

  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg border border-sand">
      <QRCodeSVG
        value={wifiString}
        size={size}
        level="M"
        includeMargin={false}
      />
      <p className="text-sm text-mountain text-center">
        Scan to connect automatically
      </p>
    </div>
  );
}
