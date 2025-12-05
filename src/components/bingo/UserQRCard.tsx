"use client";

import { motion } from "motion/react";
import QRCode from "react-qr-code";
import { User, QrCode as QrCodeIcon } from "lucide-react";

interface UserQRCardProps {
  readonly userId: string;
  readonly userName: string;
  readonly userEmail?: string;
}

export function UserQRCard({ userId, userName, userEmail }: UserQRCardProps) {
  const qrData = JSON.stringify({ userId, userName });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card border border-border rounded-lg p-6 space-y-6"
    >
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-card-foreground">{userName}</h3>
          {userEmail && (
            <p className="text-sm text-muted-foreground">{userEmail}</p>
          )}
        </div>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-white rounded-lg">
          <QRCode value={qrData} size={200} />
        </div>

        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2 text-primary">
            <QrCodeIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Tu Código QR</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Muestra este código para que otros te escaneen
          </p>
        </div>
      </div>
    </motion.div>
  );
}
