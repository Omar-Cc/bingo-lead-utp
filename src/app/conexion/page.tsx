"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ConnectionTimer } from "@/components/bingo/ConnectionTimer";
import { useBingoStore } from "@/lib/store";
import { getRandomIceBreaker } from "@/lib/icebreakers";
import type { Connection } from "@/lib/types";

export default function ConexionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentConnection, addConnection, validateConnection } =
    useBingoStore();

  // Get user info from URL params (from QR scan)
  const scannedUserId = searchParams.get("userId");
  const scannedUserName = searchParams.get("userName");
  const missionIndexParam = searchParams.get("missionIndex");
  const missionIndex = missionIndexParam
    ? parseInt(missionIndexParam, 10)
    : undefined;

  useEffect(() => {
    // If we have scanned user data but no current connection, create one
    if (scannedUserId && scannedUserName && !currentConnection) {
      const question = getRandomIceBreaker();

      const newConnection: Connection = {
        id: `${scannedUserId}-${Date.now()}`,
        scannedUserId,
        scannedUserName,
        scanStartTime: Date.now(),
        question: question.question,
        validated: false,
        missionIndex, // Link to bingo card slot
      };

      addConnection(newConnection);
    }

    // If no connection data at all, redirect to scanner
    if (!scannedUserId && !currentConnection) {
      router.push("/escanear");
    }
  }, [
    scannedUserId,
    scannedUserName,
    missionIndex,
    currentConnection,
    addConnection,
    router,
  ]);

  const handleComplete = () => {
    if (currentConnection) {
      console.log("Validating connection:", currentConnection.id);
      validateConnection(currentConnection.id);

      // Small delay to ensure state is updated before navigation
      setTimeout(() => {
        router.push("/bingo");
      }, 100);
    }
  };

  if (!currentConnection) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <ConnectionTimer
      startTime={currentConnection.scanStartTime}
      duration={45}
      onComplete={handleComplete}
      userName={currentConnection.scannedUserName}
      question={currentConnection.question}
    />
  );
}
