"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MissionDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onStartScan: () => void;
  readonly missionText?: string;
}

export function MissionDrawer({
  isOpen,
  onClose,
  onStartScan,
  missionText = "Encuentra a alguien y pídele su QR",
}: MissionDrawerProps) {
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-muted rounded-full" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Header */}
              <div className="text-center space-y-2">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-2">
                  <QrCode className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Nueva Misión
                </h2>
              </div>

              {/* Mission Text */}
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  {missionText}
                </p>
              </div>

              {/* Instructions */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">
                  ¿Cómo funciona?
                </h3>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>Encuentra a alguien que cumpla con la misión</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>Pídele que te muestre su código QR</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>
                      Escanea su código y conversa durante 45 segundos
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>¡Valida el punto y marca la casilla!</span>
                  </li>
                </ol>
              </div>

              {/* Action Button */}
              <Button
                onClick={onStartScan}
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] hover:opacity-90 transition-opacity"
              >
                <QrCode className="w-6 h-6 mr-2" />
                Escanear Jugador
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
