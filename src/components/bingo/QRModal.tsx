"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, QrCode as QrCodeIcon } from "lucide-react";
import QRCode from "react-qr-code";
import { getUserData } from "@/lib/user";

interface QRModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function QRModal({ isOpen, onClose }: QRModalProps) {
  const userData = getUserData();

  if (!userData) {
    return null;
  }

  // Create QR data with userId and userName
  const qrData = JSON.stringify({
    userId: userData.userId,
    userName: userData.userName,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                  <QrCodeIcon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Mi Código QR
                </h2>
                <p className="text-sm text-muted-foreground">
                  Comparte este código para conectar
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white p-6 rounded-xl mb-6 flex items-center justify-center">
                <QRCode
                  value={qrData}
                  size={200}
                  level="H"
                  className="w-full h-auto max-w-[200px]"
                />
              </div>

              {/* User Info */}
              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Nombre:</span>
                  <span className="text-sm font-medium text-foreground">
                    {userData.userName}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Carrera:
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {userData.carrera}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">ID:</span>
                  <span className="text-xs font-mono text-foreground">
                    {userData.userId.slice(0, 8)}...
                  </span>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Otros participantes pueden escanear este código para conectar
                  contigo
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
