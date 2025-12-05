"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useBingoStore } from "@/lib/store";
import { QrCode, Trophy, User } from "lucide-react";
import { getUserData } from "@/lib/user";
import { QRModal } from "@/components/bingo/QRModal";
import { MissionDrawer } from "@/components/bingo/MissionDrawer";
import { BingoCard } from "@/components/bingo/BingoCard";
import { getRandomBingoMissions, type BingoMission } from "@/lib/bingoMissions";

export default function BingoPage() {
  const router = useRouter();
  const { connections, setActiveMission } = useBingoStore();
  const [showQRModal, setShowQRModal] = useState(false);
  const [showMissionDrawer, setShowMissionDrawer] = useState(false);
  const [selectedMissionIndex, setSelectedMissionIndex] = useState<
    number | null
  >(null);
  const [missions, setMissions] = useState<BingoMission[]>([]);

  // Load missions on mount
  useEffect(() => {
    const loadedMissions = getRandomBingoMissions();
    setMissions(loadedMissions);
  }, []);

  // Check if user is registered
  useEffect(() => {
    const userData = getUserData();
    if (!userData) {
      router.push("/");
    }
  }, [router]);

  // Calculate progress
  const totalSlots = 25; // 5x5 grid
  const validatedCount = connections.filter((c) => c.validated).length;
  const progress = (validatedCount / totalSlots) * 100;

  // Check for bingo win conditions
  const checkBingo = (): boolean => {
    const grid = Array.from({ length: 5 }, () => Array(5).fill(false));
    
    // Fill grid with validated connections
    connections.forEach((conn) => {
      if (conn.validated && conn.missionIndex !== undefined) {
        const row = Math.floor(conn.missionIndex / 5);
        const col = conn.missionIndex % 5;
        grid[row][col] = true;
      }
    });

    // Check horizontal lines
    for (let row = 0; row < 5; row++) {
      if (grid[row].every((cell) => cell)) return true;
    }

    // Check vertical lines
    for (let col = 0; col < 5; col++) {
      if (grid.every((row) => row[col])) return true;
    }

    // Check diagonal (top-left to bottom-right)
    if (grid.every((row, i) => row[i])) return true;

    // Check diagonal (top-right to bottom-left)
    if (grid.every((row, i) => row[4 - i])) return true;

    // Check four corners
    if (grid[0][0] && grid[0][4] && grid[4][0] && grid[4][4]) return true;

    return false;
  };

  const isComplete = checkBingo();

  console.log("📊 Bingo Page - All connections:", connections);
  console.log("📊 Validated count:", validatedCount);

  // Create grid with connections + empty slots
  const gridItems = Array.from({ length: totalSlots }, (_, index) => {
    // Find the VALIDATED connection for this slot, or the most recent one
    const slotConnections = connections.filter((c) => c.missionIndex === index);
    const connection = slotConnections.find((c) => c.validated) || slotConnections[slotConnections.length - 1] || null;
    if (connection) {
      console.log(`📍 Slot ${index}:`, connection);
    }
    return connection;
  });

  const handleCardClick = (index: number) => {
    // Check if this slot is already filled
    const existingConnection = connections.find(
      (c) => c.missionIndex === index
    );
    if (existingConnection?.validated) {
      return; // Already validated, do nothing
    }

    // Set active mission in store AND local state
    console.log("🎯 Setting active mission:", index);
    setActiveMission(index); // Save to Zustand store
    setSelectedMissionIndex(index); // Save to local state for drawer
    setShowMissionDrawer(true);
  };

  const handleStartScan = () => {
    if (selectedMissionIndex !== null) {
      setActiveMission(selectedMissionIndex);
      setShowMissionDrawer(false);
      router.push("/escanear");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            Mi Bingo LEAD
          </h1>
          <p className="text-muted-foreground">
            Conecta con {totalSlots} personas para ganar
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card border border-border rounded-lg p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-card-foreground">
              Progreso
            </span>
            <span className="text-sm font-bold text-primary">
              {validatedCount}/{totalSlots}
            </span>
          </div>

          <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]"
            />
          </div>
        </motion.div>

        {/* LEAD Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-5 gap-3 mb-2"
        >
          {["L", "E", "A", "D", "!"].map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg"
            >
              <span className="text-4xl font-bold text-white">{letter}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bingo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-5 gap-3"
        >
          {gridItems.map((connection, index) => (
            <BingoCard
              key={index}
              index={index}
              isValidated={connection?.validated || false}
              userName={connection?.scannedUserName}
              isPending={!!connection && !connection.validated}
              isEmpty={!connection}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isComplete ? (
            <>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/ganador")}
                className="w-full py-6 px-6 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] text-white rounded-lg font-bold text-3xl shadow-2xl shadow-primary/60 hover:shadow-3xl hover:shadow-primary/80 transition-all flex items-center justify-center gap-3"
              >
                <Trophy className="w-8 h-8" />
                ¡LEAD!
              </motion.button>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center text-sm text-muted-foreground italic"
              >
                💡 Recuerda gritar: <span className="font-bold text-primary">"¡LEAD UTP!"</span>
              </motion.p>
            </>
          ) : (
            null
          )}

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
        </div>

        {/* Tips */}
        {!isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-4"
          >
            <h3 className="font-semibold text-card-foreground mb-2">
              💡 Consejos:
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Haz clic en una casilla vacía para empezar una misión</li>
              <li>Busca personas que no conozcas</li>
              <li>Tómate el tiempo para conversar de verdad</li>
              <li>Cada conexión cuenta para tu networking</li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* QR Modal */}
      <QRModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />

      {/* Mission Drawer */}
      <MissionDrawer
        isOpen={showMissionDrawer}
        onClose={() => setShowMissionDrawer(false)}
        onStartScan={handleStartScan}
        missionText={
          selectedMissionIndex !== null && missions[selectedMissionIndex]
            ? missions[selectedMissionIndex].mission
            : "Encuentra a alguien y pídele su QR"
        }
      />
    </div>
  );
}
