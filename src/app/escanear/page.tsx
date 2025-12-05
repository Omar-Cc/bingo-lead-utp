"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { QrCode, Camera, AlertCircle, Loader2, User } from "lucide-react";
import { Html5Qrcode } from "html5-qrcode";
import { QRModal } from "@/components/bingo/QRModal";
import { useBingoStore } from "@/lib/store";
import { getUserData } from "@/lib/user";

export default function EscanearPage() {
  const router = useRouter();
  const { activeMission, isUserIdUsed } = useBingoStore();
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isScannerRunningRef = useRef(false);

  const handleScanSuccess = useCallback(
    async (decodedText: string) => {
      setIsProcessing(true);

      try {
        // Parse QR data (expected format: JSON with userId and userName)
        const data = JSON.parse(decodedText);

        if (data.userId && data.userName) {
          // Get current user data
          const currentUser = getUserData();

          // Validation 1: Check if scanning self
          if (currentUser && data.userId === currentUser.userId) {
            setError(
              "❌ No puedes escanearte a ti mismo. Busca a otro participante."
            );
            setIsProcessing(false);
            return;
          }

          // Validation 2: Check if user already scanned
          if (isUserIdUsed(data.userId)) {
            setError(
              "❌ Ya has conectado con esta persona antes. Busca a alguien nuevo."
            );
            setIsProcessing(false);
            return;
          }

          // Stop scanner before navigating
          if (scannerRef.current && isScannerRunningRef.current) {
            try {
              await scannerRef.current.stop();
              isScannerRunningRef.current = false;
            } catch (err) {
              console.error("Error stopping scanner:", err);
            }
          }

          // Navigate to connection page with scanned user data and mission
          const params = new URLSearchParams({
            userId: data.userId,
            userName: data.userName,
          });

          // Add mission index if there's an active mission
          console.log("🎯 Active mission when scanning:", activeMission);
          if (activeMission !== null) {
            params.append("missionIndex", activeMission.toString());
            console.log("✅ Added missionIndex to URL:", activeMission);
          } else {
            console.warn("⚠️ No active mission set!");
          }

          router.push(`/conexion?${params.toString()}`);
        } else {
          setError("Código QR inválido. Debe contener userId y userName.");
          setIsProcessing(false);
        }
      } catch (err) {
        console.error("Parse error:", err);
        console.log("QR Content:", decodedText);

        // Show what was actually scanned
        const preview =
          decodedText.length > 50
            ? decodedText.substring(0, 50) + "..."
            : decodedText;

        setError(
          `Código QR no válido para este juego. Contenido: "${preview}"`
        );
        setIsProcessing(false);
      }
    },
    [router, isUserIdUsed, activeMission]
  );

  useEffect(() => {
    // Initialize and start scanner when isScanning becomes true
    if (isScanning && !scannerRef.current) {
      const initScanner = async () => {
        try {
          // Small delay to ensure DOM is ready
          await new Promise((resolve) => setTimeout(resolve, 100));

          scannerRef.current = new Html5Qrcode("qr-reader");

          await scannerRef.current.start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: { width: 250, height: 250 },
            },
            (decodedText) => {
              // Success callback - QR code detected
              if (!isProcessing) {
                handleScanSuccess(decodedText);
              }
            },
            () => {
              // Error callback - this fires continuously when no QR is found
              // We ignore it to avoid console spam
            }
          );

          isScannerRunningRef.current = true;
        } catch (err) {
          console.error("Error starting scanner:", err);

          if (err instanceof Error) {
            if (
              err.message.includes("NotAllowedError") ||
              err.message.includes("Permission")
            ) {
              setError(
                "Permiso de cámara denegado. Por favor, permite el acceso a la cámara en tu navegador."
              );
            } else if (
              err.message.includes("NotFoundError") ||
              err.message.includes("camera")
            ) {
              setError("No se encontró ninguna cámara en tu dispositivo.");
            } else {
              setError(
                "Error al acceder a la cámara. Verifica los permisos de tu navegador."
              );
            }
          } else {
            setError(
              "Error al acceder a la cámara. Verifica los permisos de tu navegador."
            );
          }

          setIsScanning(false);
        }
      };

      initScanner();
    }

    // Cleanup on unmount or when scanning stops
    return () => {
      if (scannerRef.current && isScannerRunningRef.current) {
        scannerRef.current
          .stop()
          .then(() => {
            isScannerRunningRef.current = false;
            scannerRef.current = null;
          })
          .catch((err) => {
            // Ignore "not running" errors during cleanup
            if (!err.message?.includes("not running")) {
              console.error("Error stopping scanner:", err);
            }
          });
      }
    };
  }, [isScanning, isProcessing, handleScanSuccess]);

  const handleStartScanning = () => {
    setError(null);
    setIsScanning(true);
  };

  const handleStopScanning = async () => {
    if (scannerRef.current && isScannerRunningRef.current) {
      try {
        await scannerRef.current.stop();
        isScannerRunningRef.current = false;
      } catch (err) {
        // Ignore "not running" errors
        if (err instanceof Error && !err.message.includes("not running")) {
          console.error("Error stopping scanner:", err);
        }
      } finally {
        scannerRef.current = null;
      }
    }
    setIsScanning(false);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <QrCode className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            Escanear Código QR
          </h1>
          <p className="text-muted-foreground">
            Apunta tu cámara al código QR de otro participante
          </p>
        </div>

        {/* Scanner Area */}
        <div className="relative">
          {!isScanning ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStartScanning}
              className="w-full aspect-square bg-card border-2 border-dashed border-primary/50 rounded-lg flex flex-col items-center justify-center gap-4 hover:border-primary transition-colors"
            >
              <Camera className="w-16 h-16 text-primary" />
              <span className="text-lg font-medium text-foreground">
                Iniciar Escaneo
              </span>
            </motion.button>
          ) : (
            <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary bg-black">
              {/* QR Reader Container */}
              <div id="qr-reader" className="w-full h-full" />

              {/* Processing indicator */}
              {isProcessing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                  <div className="bg-card p-4 rounded-lg flex items-center gap-3">
                    <Loader2 className="w-6 h-6 text-primary animate-spin" />
                    <span className="text-foreground font-medium">
                      Procesando...
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-destructive/10 border border-destructive/50 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Actions */}
        {isScanning && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleStopScanning}
            className="w-full py-3 px-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-colors"
          >
            Cancelar
          </motion.button>
        )}

        {/* Instructions */}
        <div className="bg-card border border-border rounded-lg p-4 space-y-2">
          <h3 className="font-semibold text-card-foreground">Instrucciones:</h3>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Pide a otro participante que muestre su código QR</li>
            <li>Haz clic en &quot;Iniciar Escaneo&quot;</li>
            <li>
              Permite el acceso a la cámara cuando te lo pida el navegador
            </li>
            <li>Apunta tu cámara al código QR</li>
            <li>¡Espera a que se escanee automáticamente!</li>
          </ul>
        </div>

        {/* Ver mi QR Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowQRModal(true)}
          className="w-full py-3 px-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-all flex items-center justify-center gap-2"
        >
          <User className="w-5 h-5" />
          Ver mi QR
        </motion.button>
      </motion.div>

      {/* QR Modal */}
      <QRModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
    </div>
  );
}
